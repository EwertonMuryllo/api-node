import http from 'node:http';

const user = {
  id: 1,
  name: 'Ewerton Muryllo',
  phone: '8552942525',
  adress: {
    street: 'Raimundo Alves Cavalcante',
    number: 71
  }
}

http.createServer(({ url, method }, response) => {

  if (url === '/users' && method === 'GET') {
    response.writeHead(
      200,
      { 'content-type': 'application/json; charset=utf-8' }
    );
    response.end(JSON.stringify(user));
    return;
  }

  response.writeHead(
    404,
    { 'content-type': 'text/html; charset=utf-8' }
  );
  response.end(`Cannot ${method} ${url}`);

}).listen(3000);
