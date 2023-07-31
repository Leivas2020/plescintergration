// index.ts
import * as plesk from '@hosterai/provider-client';
import { WebsiteHostingProvider } from './PleskProductProvider';

const provider = new WebsiteHostingProvider();

// Endpoint to create a new website hosting product
plesk.route('/create', async (req, res) => {
  const { name, domain, storage, bandwidth } = req.body;
  const newProduct: WebsiteHostingProduct = {
    id: String(provider.getProducts().length + 1),
    name,
    domain,
    storage,
    bandwidth,
    active: true,
  };
  const createdProduct = provider.createProduct(newProduct);
  res.send(createdProduct);
});

// Endpoint to retrieve all website hosting products
plesk.route('/list', async (_req, res) => {
  const products = provider.getProducts();
  res.send(products);
});

// Endpoint to retrieve a specific website hosting product by ID
plesk.route('/get/:id', async (req, res) => {
  const { id } = req.params;
  const product = provider.getProduct(id);
  if (product) {
    res.send(product);
  } else {
    res.sendStatus(404);
  }
});

// Endpoint to update a website hosting product
plesk.route('/update', async (req, res) => {
  const { id, name, domain, storage, bandwidth } = req.body;
  const updatedProduct: WebsiteHostingProduct = {
    id,
    name,
    domain,
    storage,
    bandwidth,
    active: true,
  };
  const product = provider.updateProduct(updatedProduct);
  if (product) {
    res.send(product);
  } else {
    res.sendStatus(404);
  }
});

// Endpoint to delete a website hosting product
plesk.route('/delete/:id', async (req, res) => {
  const { id } = req.params;
  const success = provider.deleteProduct(id);
  if (success) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

// Register the extension
plesk.registerExtension({
  id: 'com.example.websitehosting',
  title: 'Website Hosting Provider',
  description: 'Manage website hosting products in Plesk',
  version: '1.0.0',
  logo: 'logo.svg', // Replace with your logo file name
});
