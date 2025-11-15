// importa módulos
const http = require('http')
const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://guilias:N0KMnlkqplSqHNNR@server-gui.6s5i5xk.mongodb.net/?appName=server-gui";
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
// guilias
// N0KMnlkqplSqHNNR


// Conecta ao MongoDB apenas uma vez
// Cria o servidor HTTP


// Conecta ao MongoDB apenas uma vez
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function startServer() {
  try {
    await client.connect();
    console.log("✅ Conectado ao MongoDB!".green);

    const dbo = client.db("exemplo_bd");
    const posts_blog = dbo.collection("posts_blog");

    // Rota inicial → redireciona pro feed
    app.get('/', (req, res) => res.redirect('/feed'));

    // Página de formulário para criar post
    app.get('/blog', (req, res) => {
      res.sendFile(__dirname + '/public/blog.html');
    });

    // Cria um novo post
    app.post("/blogar", async (req, res) => {
      const { titulo, resumo, conteudo } = req.body;
      try {
        await posts_blog.insertOne({
          titulo,
          resumo,
          conteudo,
          data: new Date()
        });
        res.redirect('/feed');
      } catch (err) {
        console.error(err);
        res.render('res_blog', { resposta: "Erro ao criar post!" });
      }
    });

    // Feed com todos os posts
    app.get('/feed', async (req, res) => {
      try {
        const posts = await posts_blog
          .find({})
          .sort({ data: -1 })
          .toArray();

        res.render('feed', { posts });
      } catch (err) {
        console.error(err);
        res.send("Erro ao carregar o feed.");
      }
    });

    // Inicia o servidor
    const PORT = 5501;
    app.listen(PORT, () =>
      console.log(`🌐 Servidor rodando em http://localhost:${PORT}`.cyan)
    );

  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:".red, err);
  }
}

startServer();