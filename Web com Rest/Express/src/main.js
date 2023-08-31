// 1. Importar bibliotecas
const express = require('express'); // importei o módulo express
const bodyParser = require('body-parser');
const cors = require('cors');

// 2. Criar o servidor web
const app = express();

// 3. Configurar o servidor web
app.use(cors());
app.use(bodyParser.json()); // aceita dados no formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // aceita dados no format url encoded

// 4. Configurar as rotas para o recurso 'produtos'
app.get('/produtos', (req, res) => {
  res.send('retorna todos os produtos cadastrados no sistema');
});
app.get('/produtos/:id', (req, res) => {
  res.send('retorna o produto ' + req.params.id);
});
app.post('/produtos', (req, res) => {
  console.log(req.body);
  res.send('Falta fazer o código para adicionar um produto');
});

// 5. Colocar o servidor no ar
app.listen(5000, () => {
  console.log('A aplicação está no ar em http://localhost:5000');
});