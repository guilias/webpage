// importa módulos
const http = require('http')
const express = require('express');

// cria app para tornar os módulos utilizáveis
const app = express();

// define a pasta onde está o conteúdo estático
app.use(express.static('public'));

// método use() para definir pasta onde
//o conteúdo estático se encontra
app.use(express.static('./public'))

// cria o servidor
let server = http.createServer(app)

// define a porta do servidor
server.listen(3000);

// mensagem
console.log('Server rodando, oh yeah.')