//encapsulamento do modulo express no arquivo custom-express,js

//habilitar biblioteca marko na nossa aplicação primeiro habilita no node e segundo no express
require('marko/node-require').install();
require('marko/express');

//importa e retorna função express
const express = require('express');
//chamando função express obtendo um objeto do tipo express,  para configurar a nossa aplicação, e execute express();
const app = express();
//chamando modulo body-parser,  uma nova constante bodyParser que vai receber o retorno do require('body-parser').
const bodyParser = require('body-parser');
//metodo use criar middleware, sempre que encontrar /estático ative o middleware, req para recurso estático. Met estático indicar express onde está pasta de arq estáticos. req para estatico o express vai ativar o middleware retornado pelo metodo static
app.use('/estatico', express.static('src/app/public'));
//usaremos o app (que é o objeto do express) para invocar o método use() recebendo exatamente o middleware que queremos definir na nossa aplicação.
app.use(bodyParser.urlencoded({ 
  extended: true
}));
//importando rotas e suas funções e passando para constante rotas
const rotas = require('../app/rotas/rotas');
//constante rotas recebendo objeto app
rotas(app);
//exportando constante app pelo modulo custom-express.js
module.exports = app;


/**Passaremos bodyParser, para o qual delegaremos a criação desse middleware, e o método 
urlencoded(), que define como o body-parser deve funcionar, e que está ligado à forma padrão de 
envio dos formulários HTML. Esse método receberá um objeto JavaScript com a configuração 
extended : true. Dessa forma, ele estará habilitado a receber objetos complexos em 
formato .json vindos do nosso formulário no navegador. Fazendo essa configuração, o bodyParser 
nos devolverá o middleware que precisamos. */