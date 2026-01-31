import http from 'node:http';

http.createServer((request, response) => {
   response.end('hello Client!')
}).listen(3000);
