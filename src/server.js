import http from 'node:http';
import routes from './routes.js';

http.createServer(({ url, method }, response) => {

  const route = routes.find(route => {
    return url === route.endpoint && method === route.method;
  });

  if (route) {
    route.hendler(response);
    return;
  }

  response.writeHead(
    404,
    { 'content-type': 'text/html; charset=utf-8' }
  );
  response.end(`Cannot ${method} ${url}`);

}).listen(3000);