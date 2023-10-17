const fs = require('fs').promises;

class ProductManager {
  constructor() {
    this.path = 'Products.json';
  }

  async addProduct(product) {
   
  }

  async getProducts() {
   
  }

  async getProductsById(productId) {
   
  }

  async updateProduct(productId, updatedProduct) {
   
  }

  async deleteProduct(productId) {
  }
}

const product = {
  title: 'camisa',
  description: 'uma camisa',
  price: 70,
  thumbnail: './lol_img.png',
  code: '123',
  stock: 12,
};



const productManager = new ProductManager();


productManager.addProduct(product);

productManager.getProducts();
