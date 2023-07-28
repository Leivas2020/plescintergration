import axios, { AxiosResponse } from '';
import ProductProvider, {  } from './product_intergration';

class PleskProductProvider {
  private pleskApiUrl: string;
  private pleskAuthToken: string;

  constructor(apiUrl: string, authToken: string) {
    this.pleskApiUrl = apiUrl;
    this.pleskAuthToken = authToken;
  }

  private async makeRequest(endpoint: string): Promise<AxiosResponse> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.pleskAuthToken}`,
    };

    return await axios.get(`${this.pleskApiUrl}${endpoint}`, { headers });
  }

  async getProducts(): Promise<ProductProvider[]> {
    try {
      const response = await this.makeRequest('/products');
      return response.data as ProductProvider[];
    } catch (error) {
      console.error('Error fetching products:', error.message);
      return [];
    }
  }
}

export default PleskProductProvider;
