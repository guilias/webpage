// importa módulos
const http = require('http')
const express = require('express');
const colors = require('colors');
const bodyParser = require('bodyParser')

// cria app para tornar os módulos utilizáveis
const app = express();

// método use()
app.use(express.static('./public'));
app.use(bodyParser. urlencoded({ extended: false}));
app.use(bodyParser. json () );
app.set('view engine', 'ejs');
app.set('views', './views');


// cria o servidor
let server = http.createServer(app)

// define a porta do servidor
server.listen(5501);

// mensagem
console.log('Server rodando, oh yeah.'.rainbow)


//sistema de '''login'''
app.get ('/', function (requisicao, resposta) {
    resposta.redirect ('home. html')
})

app.get ('/inicio', function (requisicao, resposta) {
var nome = requisicao.query.info;
console. log (nome) ;
})

app.post ('/inicio', function (requisicao, resposta) {
var data = requisicao.body.data;
console. log (data) ;
})

app.get ('public/projetos/aula-09/cadastro', function (requisicao, resposta) {
let nome = requisicao. query.nome;
let sobrenome = requisicao.query.sobrenome;
let nascimento = requisicao.query.nascimento;
let civil = requisicao.query.civil;

resposta.render('view/resposta_cadastro', {nome, sobrenome, nascimento, civil})
})