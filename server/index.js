const express = require('express')
const app = express()
const products = require('./products.json')
const getProducts = require('./getProducts.js')

// function getProduct(id){
//     let product = products.find(product => products.id === id);
// }

app.get('/api/products', getProducts);

app.get('/api/products/:id', (request, response) => {
    let product = products.find(product => product.id === +request.params.id);
    if (product) {
        response.send(product);
    } else {
        response.status(500).json('Item not in list')
    }
})







app.listen(3000, () => console.log('Listening on 3000'))