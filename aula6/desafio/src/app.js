import express from 'express'
import productManager from './ProductManager.js'


const productsData = await productManager.getProducts()
const app = express()

app.get('/products', async (req, res) => {
  const limit = req.query.limit

  if (limit) {
    const limitedItems = productsData.filter((item) => item.id <= limit)
    return res.send(limitedItems)
  } else {
    return res.send(productsData)
  }
})

app.get('/products/:pid', async (req, res) => {
    const productId = req.params.pid

    const foundProduct = productsData.find((item) => item.id == productId)

    if(foundProduct) {
        return res.send(foundProduct)
    }else {
        res.send("Produto não encontrado, tente novamente.")
    }
    
})

app.listen(8080, () => {
  console.log('Executando perfeitamente a partir do Express')
})
