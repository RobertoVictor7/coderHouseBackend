const fs = require('fs')

let produtosArray = []

class ProductManager {
  constructor() {
    this.path = 'Products.json'
  }

  async addProduct(product) {
    try {
      const dadosProdutos = await this.getProducts()
      product.id = dadosProdutos.length + 1
      dadosProdutos.push(product)
      produtosArray.push(product)
      fs.writeFileSync(this.path, JSON.stringify(dadosProdutos, null, 2))
    } catch (error) {
      console.log('Ocorreu um erro na criação: ' + error)
    }
  }

  async getProducts() {
    try {
      let products = fs.readFileSync(this.path, 'utf-8')
      return JSON.parse(products)
    } catch (error) {
      if (error.code == 'ENOENT') {
        return []
      }
      throw error
    }
  }

  async getProductsById(productId) {
    const dadosProdutos = await this.getProducts()
    const produtoPesquisado = dadosProdutos.find(
      (item) => item.id === productId
    )

    if (produtoPesquisado) {
      console.log('PRODUTO PESQUISADO: ')
      console.log(produtoPesquisado)
      return produtoPesquisado
    } else {
      console.log('Produto pesquisado não existe')
    }
  }


  async updateProduct(productId, updatedProduct) {
    const dadosProdutos = await this.getProducts()
    const produtoPesquisado = dadosProdutos.find((item) => item.id == productId)

    const index = dadosProdutos.findIndex((item) => item.id === productId)

    if (productId <= produtosArray[0].id && produtoPesquisado.title != updatedProduct.title) {
      if (index !== -1) {
        dadosProdutos[index] = { ...updatedProduct, id: productId }
        fs.writeFileSync(this.path, JSON.stringify(dadosProdutos, null, 2)) 
        return dadosProdutos
        
      } else {
        console.log('Produto não encontrado')
      }
    }

  
  }

  async deleteProduct(productId) {
    const dadosProdutos = await this.getProducts()
    const index = dadosProdutos.findIndex((item) => item.id == productId)
    if (index !== -1) {
      dadosProdutos.splice(index, 1)
      fs.writeFileSync(this.path, JSON.stringify(dadosProdutos, null, 2))
      return dadosProdutos
    } else {
      console.log('Produto não encontrado')
    }
  }
}

const product = {
  title: 'camisa',
  description: 'uma camisa',
  price: 70,
  thumbnail: './lol_img.png',
  code: '123',
  stock: 12,
}

const newProduct = {
  title: 'Calça jeans',
  description: 'Uma calça jeans',
  price: 120,
  thumbnail: './calca_jeans_img.png',
  code: '456',
  stock: 15,
}

const productManager = new ProductManager()

productManager.getProducts()

productManager.addProduct(product) // primeira execuçao do código adiciona o product ao JSON com id 1

productManager.getProductsById(1) // segunda execução do codigo acha o produto de ID 1 

productManager.updateProduct(2, newProduct) // terceira execuçao do codigo da um update no produto de ID 2 com os valores da variavel newProduct

productManager.deleteProduct(3) // quarta execuçao do codigo deleta o produto de ID 3
