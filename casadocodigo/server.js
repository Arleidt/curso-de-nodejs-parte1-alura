/**tratamento servidor responsavel receber res servidor e tratar elas e criar uma resposta a ser devolvida 
para o cliente, modulo node especifico padrão capaz de atender res e montar respostas de acordo com o protocolo */
const http = require ('http');

const servidor =  http.createServer(function(req, resp) {

    let html =  ' ';
    if (req.url == '/'){
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código </h1>
                </body> 
            </html>
        `;
    } else if(req.url == '/livros'){

        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Listagem de livros </h1>
                </body> 
            </html>
        `;

    }
    //outros else if
    resp.end(html);
});
servidor.listen(3000);



/**servidor.js

const ip = 'localhost';
const porta = 3000;
http.createServer(function (req, resp) {
   resp.end('<html><body><a href="http://www.alura.com.br">Site da Alura</a></body></html>');
}).listen(porta, ip); */