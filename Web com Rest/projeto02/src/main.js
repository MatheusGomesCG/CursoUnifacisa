let compras = []; //criando um array vazio
compras.push('Abacate'); //Indice 0
compras.push('Areia de gato'); //Indice 1
compras.push('Papel A4');//Indice 2

//Acessando os elementos do array
console.log(compras[0]);
//removendo, a partir do índice
compras.splice(1, 1); 

//Quantos elementos tem no array?
console.log(compras.length);

let aluno = {
    matricula: 123,
    nome: 'Ana Maria',
    curso: 'Sistema de Informação',
    cre: 8.5
};

//acessando valores por 'dot notation'
console.log(aluno.nome);

//acessando valores pelo nome da chave
console.log(aluno['nome']);

//adicionando um novo atributo
aluno.bolsista = true;
console.log(aluno);

//QR code gerado via o site nodejs.com
const qrcode = require('qrcode-terminal');

qrcode.generate('https://web.dio.me/');