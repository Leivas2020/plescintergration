// product_interdration.ts
import * as pleck from 'pleck';



import { WebsiteHostingProduct } from './product';

export class WebsiteHostingProvider {
  private products: WebsiteHostingProduct[];

  constructor() {
    
    this.products = [];
  }

  createProduct(product: WebsiteHostingProduct): WebsiteHostingProduct {
    this.products.push(product);
    return product;
  }

  getProducts(): WebsiteHostingProduct[] {
    return this.products;
  }

  getProduct(id: string): WebsiteHostingProduct | undefined {
    return this.products.find((product) => product.id === id);
  }

  updateProduct(updatedProduct: WebsiteHostingProduct): WebsiteHostingProduct | undefined {
    const index = this.products.findIndex((product) => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      return updatedProduct;
    }
    return undefined;
  }

  deleteProduct(id: string): boolean {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}

