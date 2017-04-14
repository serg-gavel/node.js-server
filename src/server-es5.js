'use strict';

var http = require('http');
var html = '\n<!doctype>\n    <html>\n        <head>\n            <meta charset ="utf-8">\n            <title>Node.js Basics</title>\n            <link rel ="stylesheet" href="app.css">\n        </head>\n        <body>\n            <h1>Node.js Basics</h1>\n            <button>Tap on me</button>\n            \n            <script src="app.js"></script>\n        </body>\n</html>\n';
var css = '\n body{\n    margin:0;\n    padding:0;\n    text-align:center;\n}\nh1{\n    background-color: #43853d;\n    color:white;\n    padding:.5em;\n    font-familt:\'Consolas\'\n}\n';
var js = '\n    const button = document.querySelector(\'button\');\n    button.addEventListener(\'click\', event => alert(\'Node.js in action\'));\n';

http.createServer(function (req, res) {
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
            break;

        case '/app.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(css);
            break;

        case '/app.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(js);
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not found!');
    }
}).listen(3000, function () {
    return console.log('Server works correct');
});