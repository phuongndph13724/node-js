const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const homeRoute = require('./routes/home');
app.use(homeRoute);
const productRouter = require('./routes/home');
app.use(productRouter);

const productDetailRoute = require('./routes/productDetail');
app.use(productDetailRoute);






// b2: Khởi tạo server
// const server = http.createServer((request,response)=>{
//     // console.log(request,url);
//     if(request.url === '/'){
//         // console.Console("home page")
//         response.setHeader("Content-Type" , " text/html");
//         response.write('<h1>Home Page</h1>')
//         response.end
//     }if(request.url === '/products'){
//         // console.Console("home page")
//         response.setHeader("Content-Type" , " text/html");
//         response.write('<h1>Products</h1>')
//         response.end
//     }if(request.url === '/news'){
//         // console.Console("home page")
//         response.setHeader("Content-Type" , " text/html");
//         response.write('<h1>New</h1>')
//         response.end
//     }
// });

// b3: Lắng nghe 
const port = 3001;
server.listen(port,()=>{
    console.log(`sever is running on ${port}`);
})