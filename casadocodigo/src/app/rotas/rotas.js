//encapsulamento rotas

//import Livro.dao, Nota: repare que estamos usando LivroDao, com letra maiúscula, pois é uma referência exata à classe que criamos.
const LivroDao =require('../infra/livro.dao.js');

const db = require('../../config/database')
//  exportar uma função (que, no mundo JavaScript, é a instrução capaz de receber um parâmetro) capaz de receber o objeto app. 
//ECMAScript 6, que introduziu as famosas arrow functions:
module.exports = (app) => {
//metodos: get  primeiro parâmetros string qual a "rota caminho", segundo função callback executada sempre que cliente fazer requisição para '/ ' rota
  app.get('/', function(req, resp){
    //objeto represetando a  resposta, recebendo método send que recebendo uma string como parâmetro
    resp.send(
          `
            <html>
                  <head>
                      <meta charset="utf-8">
                  </head>
                  <body>
                      <h1> Casa do Código </h1>
                  </body> 
            </html>
          `
    );

  });

  app.get('/livros', function(req, resp){
    //instancia da classe
    const livroDao = new LivroDao(db);
      livroDao.lista()
          .then(livros => resp.marko(
            require('../views/livros/lista/lista.marko'),
                {
                    livros: livros
                }

          ))
            .catch(erro => console.log(erro));
  });

  app.get('/livros/form', function(req, resp){
    resp.marko(require('../views/livros/form/form.marko'));

    
  });

  app.post('/livros', function(req, resp) {
    console.log(req.body);
    const livroDao = new LivroDao(db);
      livroDao.adiciona(req.body)
          .then(resp.redirect('/livros'))
          .catch(erro => console.log(erro));  
  });

};



  /* 
    livroDao.lista(function(erro, resultados) {
      resp.marko(
          require('../views/livros/lista/lista.marko'),
          {
              livros: resultados
          }

      );

    } );
    
  });

} ;

 Linha 34- Quando fazemos a listagem, chamamos o método lista() do nosso livroDao, passando uma
  função de callback que é executada ao final da operação assíncrona do acesso ao banco de dados. 
  Por padrão, no mundo JavaScript, utilizam-se Promises para esse tipo de situação, e é isso que faremos agora.
 
//all metodo de listagem no bd, 2 parâmetros string representando o sql propriamente dito e e o segundo parâmetro uma função que vai ser executada quando nossa consulta tiver terminado
     db.all (' SELECT * FROM livros', function(erro, resultados){

      resp.marko(
        require('../views/livros/lista/lista.marko'),
        {
          //passando resultados que vieram do db
            livros : resultados
        }
  
      );

    } ); 

    resp.marko(
      require('../views/livros/lista/lista.marko'),
      {
        // recebendo segundo parametro, objeto javascript contendo as informações que vai enviar para a tela que vai ser carregada definido chaves e valores do objeto javascript
        //chave e valor array
          livros: [
            { 
                id: 1,
                titulo: 'Fundamentos do Node'
            },
            { 
                id: 2,
                titulo: 'Node Avançado'
            }
        ]

      }

    ); 
    

  });

} ;

        
    
    Agora, queremos acessar o conteúdo armazenado em lista.marko. Para isso, executaremos o
     método resp.marko(), que foi habilitado com a inclusão do Marko no nosso projeto. 
     Com ele, poderemos exibir arquivos .marko para o cliente na resposta, sendo necessário 
     apenas importar o arquivo com essa extensão, o que também é feito com o método require().
    resp.send(
          `
            <html>
                  <head>
                      <meta charset="utf-8">
                  </head>
                  <body>
                      <h1> Listagem de Livros </h1>
                  </body> 
            </html>
          `
    ); **/