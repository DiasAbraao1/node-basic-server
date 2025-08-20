const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Página Inicial</h1> <p> Bem-vindo ao meu servidor!</p>');
    } else if (req.url === '/sobre') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Sobre</h1> <p>Esse servidor foi feito em Node.js</p>');
    } else if (req.url === '/contato') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1> Contato</h1> <p> Email: exemplo@gmail.com </p>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Página não encontrada</h1>');
    }
})

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
})