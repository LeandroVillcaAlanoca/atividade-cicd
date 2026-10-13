const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Aplicacao CI/CD funcionando!');
});

if (require.main === module) {
  server.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
  });
}

module.exports = server;
