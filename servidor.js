// importa módulos
const http = require('http')
const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser')

// cria app para tornar os módulos utilizáveis
const app = express();

// método use()
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');


// cria o servidor
let server = http.createServer(app)

// define a porta do servidor
server.listen(5501);

// mensagem
console.log("Server ativado. Let's go!".rainbow)


//sistema de '''login'''
app.get('/', function (req, res){
    res.redirect('/projetos/aula-09/cadastra.html');
});

app.get ('/cadastro', function(req, res){
    let {nickname, email, nascimento, jogo} = req.query;
    res.render('resposta_cadastro', {nickname, email, nascimento, jogo})
})