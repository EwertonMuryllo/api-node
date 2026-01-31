import http from 'node:http';

const user = {
    id: crypto.randomUUID(),
    name: 'Ewerton Muryllo',
    adress: {
        street: 'raimundo'
    }

}


http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf-8'})
   response.end('hello Client!')
}).listen(3000);
