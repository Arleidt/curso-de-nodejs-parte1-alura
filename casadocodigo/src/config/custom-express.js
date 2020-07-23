//encapsulamento do modulo express no arquivo custom-express,js

//importa e retorna função express
const express = require('express');
//chamando função express obtendo um objeto do tipo express,  para configurar a nossa aplicação, e execute express();
const app = express();
//importando rotas e suas funções e passando para constante rotas
const rotas = require('../app/rotas/rotas');
//constante rotas recebendo objeto app
rotas(app);
//exportando constante app pelo modulo custom-express.js
module.exports = app;


