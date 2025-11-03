// importa módulos
const http = require('http')
const express = require('express');
const colors = require('colors');

// cria app para tornar os módulos utilizáveis
const app = express();

// método use() para definir pasta onde
//o conteúdo estático se encontra
app.use(express.static('./public'))

// cria o servidor
let server = http.createServer(app)

// define a porta do servidor
server.listen(5501);

// mensagem
console.log('Server rodando, oh yeah.'.rainbow)