const controller = require('../controllers/faculdadeControllers.js');

server.get('/faculdade', controller.faculdadeGetAll)
server.get('/faculdade/:id', controller.faculdadeGetById)

server.put('/faculdade/:id', controller.faculdadeEditar)
server.post('/faculdade', controller.faculdadeNovo)

