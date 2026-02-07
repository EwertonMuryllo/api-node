import users from '../mocks/users.js';

const UserController = {
  getUsers(response) {
    response.writeHead(
      200,
      { 'content-type': 'application/json; charset=utf-8' }
    );
    response.end(JSON.stringify(users));
  }
}

export default UserController;