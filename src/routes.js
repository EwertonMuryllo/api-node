import UserController from './controllers/UserController.js'

const routes = [{
    endpoint: '/users',
    method: 'GET',
    hendler: UserController.getUsers
}];

export default routes;