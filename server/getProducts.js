const products = require('./products.json')

const getProducts = (request, response) => {
    if (request.query.price){
        const filteredProducts = products.filter(product => product.price >= parseInt(request.query.price));
        return response.status(200).send(filteredProducts);
    } 
    response.status(200).send(products);
    
}

module.exports = getProducts;