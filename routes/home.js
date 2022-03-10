const express = require('express');
const route = express.Router();

route.get('/', (request,response) => {
    response.send(`
        <h1>Home Page</h1>
        <p>Nguyễn Đắc Phương</p>
    `);
});


module.exports = route;
