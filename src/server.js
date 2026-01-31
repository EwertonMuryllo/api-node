import http from 'node:http';
import users from './mocks/users.js';

const user = {
  id: 1,
  name: 'Ewerton Muryllo',
  phone: '8552942525',
  adress: {
    street: 'Raimundo Alves Cavalcante',
    number: 25
  }  
    ,id: 2,
  name: 'Darius Flinty',
  phone: '85524245',
  adress: {
    street: 'Raimundo Alves Cavalcante',
    number: 43
  }
      ,id: 3,
  name: 'Yume Tanaka',
  phone: '8529443525',
  adress: {
    street: 'Raimundo Alves Cavalcante',
    number: 73
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
