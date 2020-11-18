const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//routes.get("/products", ProductController.index);
routes.get("/products", ProductController.indexPaginate);
routes.get('/products/:id', ProductController.show);
routes.post("/products", ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;



    //Product.create({
     //   title: 'React',
      //  description: 'by react',
      //  url: 'http:// teste.com.br' 
   // })