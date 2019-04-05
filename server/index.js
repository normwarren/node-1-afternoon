const express = require('express')
//const GetProducts = require('./getProducts')
const GetProduct = require('./getProduct')
const GetProdByPrice = require('./getProducts')

const app = express()   //app declaration
const port = 5100 //any above 4000

app.get('/api/products/:id', GetProduct)
//.get('/api/products', GetProducts)

app.get('/api/products/price/:price', GetProdByPrice)

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
})