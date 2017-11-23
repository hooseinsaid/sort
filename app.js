var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8090);
var msg = 'Hello World';
console.log(msg);
console.log("what the fuck is this ?");
