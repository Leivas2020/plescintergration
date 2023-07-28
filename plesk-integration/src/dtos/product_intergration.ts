// product_interdration.ts
import * as pleck from 'pleck';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

class ProductProvider {
  private products: Product[] = [];

  constructor(configPath: string) {
    const config = pleck.load(configPath);
    this.products = config.get('products');
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: Product): void {
    this.products.push(product);
    this.saveProducts();
  }

  updateProduct(updatedProduct: Product): void {
    this.products = this.products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    this.saveProducts();
  }

  deleteProduct(id: string): void {
    this.products = this.products.filter((product) => product.id !== id);
    this.saveProducts();
  }

  private saveProducts(): void {
    const config = pleck.load();
    config.set('products', this.products);
    config.save();
  }
}

export default ProductProvider;
