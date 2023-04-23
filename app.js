const express = require('express');
const { randomUUID } = require('crypto');
const fs = require('fs');

const app = express();

app.use(express.json());

const products = [];

/*
- POST -> Inserir um dado
- GET  -> Buscar um dado
- PUT  -> Alterar um dado
-> DELETE-> Remover um dado
*/

/* Tipos mais comuns de parametros no express
- Body -> Sempre que quiser enviar dados para minha aplicação
- Params -> /product/2346484616816
- Query -> /product?id=2685247422022658548494
*/

app.post('/products', (request, response) => {
  //Nome e preço
  const { name, price } = request.body;

  const product = { name, price, id: randomUUID() };

  products.push(product);

  return response.json(product);
});

app.get('/products', (request, response) => {
  return response.json(products);
});

app.get('/products/:id', (request, response) => {
  const { id } = request.params;
  const product = producs.find((product) => product.id === id);

  return response.json(product);
});

app.put('/products/:id', (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;

  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  };

  return response.json({ message: 'produto alterado com sucesso' });
});

app.delete('/products/:id', (request, response) => {
  const { id } = request.params;
  const productIndex = products.findIndex((product) => product.id === id);

  products.splice(productIndex, 1);

  return response.json({ message: 'produto removido com sucesso' });
});

app.listen(4002, () => console.log('Servidor esta rodando na porta 4002'));
