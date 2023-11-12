import express from 'express'
import juegosController from '../controllers/juegosController.js';
const routeJuegos = express()


routeJuegos.get('/:juego_id/informacion', juegosController.juegoInformacion)
routeJuegos.get('/edicion/:edicion', juegosController.juegosPorEdicion)
routeJuegos.get('/:juego_id/promedio', juegosController.promedio)

routeJuegos.post('/crear', juegosController.crearJuego)
routeJuegos.delete('/:juego_id/eliminar', juegosController.borrarJuego)
routeJuegos.put('/:juego_id/modificar', juegosController.modificarJuego)

export default routeJuegos