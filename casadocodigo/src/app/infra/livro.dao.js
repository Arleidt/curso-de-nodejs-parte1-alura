//classe do ECMAScript 6

class LivroDao {

  constructor(db) {
      this._db = db;
  }

  lista(callback) {
      this._db.all(
          'SELECT * FROM livros',
          (erro, resultados) =>
              callback(erro, resultados)

      )

  }

}

module.exports = LivroDao;


//classe do ECMAScript 6
/* class LivroDao {

    // referencia ao bd, definiremos um construtor recebendo a instância db, em seguida, definiremos que  atributo _db da nossa própria classe deverá receber o parâmetro db passado para o nosso construtor
      constructor(db){
        this.db = db;
      }
    //metodo listaLivros recebendo um parâmetro que chamaremos de callback, a funcão callback no listLivros no rotas vai ser executada quando o acesso ao banco de dados terminar.
      lista(callback) {
        this._db.all(
            'SELECT * FROM livros',
            (erro, resultados) =>
                callback(erro, resultados)      
        )    
      }
}console.log("Houve um erro");

module.exports = LivroDao; */

 /* function(erro, resultados){
        callback(erro, resultados);
      }  acima passado essa mesma function callback com ECMAScript6 linha 10*/

/* Nós iremos delegar à classe LivroDao o acesso ao banco de dados. Ela terá um método listaLivros()
 que, quando executado, fará a seleção dos livros no banco. Ao término da seleção, a classe delegará 
 ao callback, passado por listaLivros, o tratamento dos resultados ou do erro.

 Ainda precisamos exportar essa classe LivroDao para que possamos utilizá-la em outros módulos 
 da aplicação. O module.exports é capaz de exportar um tipo definido por uma classe, 
 e é exatamente isso que faremos:

module.exports = LivroDao;

Essa classe nos fornecerá toda e qualquer funcionalidade relativa aos livros no banco de dados, 
como listagem, adição, remoção, edição, e assim por diante. 
Desse modo, faz sentido que toda instância de LivroDao tenha uma referência 
para o nosso banco de dados. */