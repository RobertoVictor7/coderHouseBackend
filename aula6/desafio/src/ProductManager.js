import fs from 'fs'

class ProductManager {
  constructor() {
    this.path = '../Products.json'
  }

  async getProducts() {
    try {
      const productsData = await this.readProducts()
      return productsData
    } catch (error) {
      return error
    }
  }

  async readProducts() {
    try {
      const productsFile = fs.readFileSync(this.path, 'utf-8')
      return JSON.parse(productsFile)
    } catch (error) {
      if (error.code == 'ENOENT') {
        return []
      }
      throw error
    }
  }
}

const productManager = new ProductManager()

export default productManager
