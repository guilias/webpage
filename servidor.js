// importa módulos
const http = require('http')
const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://guilias:N0KMnlkqplSqHNNR@server-gui.6s5i5xk.mongodb.net/?appName=server-gui"; // meu link, senha e usuários pro mongodb

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

// conecta ao MongoDB uma única vez
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// FUNÇÃO PRINCIPAL DO SERVER
async function startServer() { // função assíncrona: ela fica numa "fila" esperando ser finalizada, desta forma, o servidor não buga enquanto aguarda a conslusão dela (?)
  // tenta realizar a conexão:
  try { 
    await client.connect(); // a função await faz com que uma função assíncrona pause, aguardando a resposta, ou "promessa"
    console.log("✅ Conectado ao MongoDB!".green);

    // banco de dando para onde as informações vão:
    const dbo = client.db("exemplo_bd");

    // "coleção", dentro do banco de dados, onde as informações estarão especificamente armazenadas,
    // essa variável será citada várias vezes ao longo do código:
    const posts_blog = dbo.collection("posts_blog");

    // rota inicial → redireciona pro feed:
    app.get('/', (req, res) => res.redirect('/feed'));

    // página de formulário para criar post, nesse caso, BLOG.HTML
    app.get('/blog', (req, res) => {
      res.sendFile(__dirname + '/blog.html'); // '__dirname' coleta automaticamente o caminho da pasta
    });


    // --- CRIAR UM NOVO POST ---
    app.post("/blogar", async (req, res) => {
      const { titulo, resumo, conteudo } = req.body; // coleta os campos do formulário

      // tenta coletar os dados:
      try { 
        await posts_blog.insertOne({ // adicione eles à coleção posts_blog
          titulo,
          resumo,
          conteudo,
          data: new Date() // adiciona uma data. nesse caso, dia e horário do post
        });
        res.redirect('/feed'); // redireciona p/ página dinâmica (EJS)

      // caso dê erro:
      } catch (err) { 
        console.error(err);
        res.render('res_blog', { resposta: "Erro ao criar post!" });
      }
    });
    // --- "CRIAR UM NOVO POST" acaba aqui ---


    // --- CARREGAR FEED ---
    app.get('/feed', async (req, res) => {
      try {
        const posts = await posts_blog
          .find({})
          .sort({ data: -1 })
          .toArray();

        res.render('feed', { posts }); //página dinâmica (EJS)
      } catch (err) {
        console.error(err);
        res.send("Erro ao carregar o feed.");
      }
    });
    // --- "ARREGAR FEED" acaba aqui ---

    // inicia o servidor
    const PORT = 5501;
    app.listen(PORT, () =>
      console.log(`🌐 Servidor rodando em http://localhost:${PORT}`.cyan)
    );

  // caso a conexão falhe, exibe o erro no terminal ('try' e 'catch' são semelhantes a um if e else):
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:".red, err);
  }
}

// chama a função definida anteriormente
startServer();