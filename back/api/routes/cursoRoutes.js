const controller = require('../controllers/cursoControllers.js');

server.get('/curso', controller.cursoGetAll)
server.get('/curso/:id', controller.cursoGetById)

server.put('/curso/:id', controller.cursoEditar)
server.post('/curso', controller.cursoNovo)


