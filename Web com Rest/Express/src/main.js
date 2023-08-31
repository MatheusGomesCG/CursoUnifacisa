//Importando o módulo express
const express = require('express');

//Criando uma aplicação web
const app = express();

//Rotas para o recurso 'produtos'
app.get('/produtos', (req, res) => {
    res.send('retorna todos os produtos');
});

app.get('/produtos/:id', (req, res) => {
    res.send('retorna o produto ' + req.params.id);
});

//Inicia o servidor (ele fica escutando em uma porta)
app.listen(5000, () => {
    console.log('A aplicação está no ar em http://localhost:5000');
});