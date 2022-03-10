const express = require('express');
const route = express.Router();

route.get('/products/:ProductId', (request,response) => {
    response.send(`
        <h1>Product Detail Page</h1>
        ${ request.params.ProductId}
    `);
});


module.exports = route;
