const express = require('express');

const app = express();

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
  const body = request.body;

  console.log(body);
});

app.listen(4002, () => console.log('Servidor esta rodando na porta 4002'));
