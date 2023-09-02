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
let produtos = []; //Simulando um banco de dados

app.get('/produtos', (req, res) => {
  res.json(produtos);
});
app.get('/produtos/:id', (req, res) => {
  res.send('retorna o produto ' + req.params.id);
});
app.post('/produtos', (req, res) => {
  produtos.push(req.body);
  res.send('Produto adicionado com sucesso');
});

app.put('/produtos/:id', (req, res) => {
  const id = req.params.id; //Recuperando o valor do ID
  const index = produtos.findIndex((p) => p.id === id); //Procurando o ID no Array
  if (index !== -1) { //Só retorna -1 se não encontrar o produto no array
    produtos[index] = req.body; //Acessando os dados do corpo e adicionando ao produto
    res.send('Produto atualizado com sucesso');
  } else {
    res.status(404).send('Produto não encontrado');
  }
});

app.delete('/produtos/:id', (req, res) => {
  const id = req.params.id; //Recuperando o valor do ID
  const index = produtos.findIndex((p) => p.id === id); //Procurando o ID no Array
  if (index !== -1) { //Só retorna -1 se não encontrar o produto no array
    produtos.splice(index, 1); //Para remover o produto do array
    res.send('Produto excluído com sucesso');
  } else {
    res.status(404).send('Produto não encontrado');
  }
});

// 5. Colocar o servidor no ar
app.listen(5000, () => {
  console.log('A aplicação está no ar em http://localhost:5000');
});