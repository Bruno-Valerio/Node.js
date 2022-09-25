var http = require('http');

http.createServer(function(req, res){
    res.end('Hello World! Welcome to my website')
}).listen(1995)

console.log('Servidor rodando!');