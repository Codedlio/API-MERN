const controllers=require('../controllers/getHotels');

const express =require('express')
const routerHotel=express.Router()


routerHotel
// Ruta para obtener todos los hoteles
.get('/',controllers.getAllCollections)
// Ruta para obtener un hotel por su ID
.get('/:id', controllers.getIdHotel)
// Ruta para crear un nuevo hotel
.post('/post', controllers.postDataHotel)

.delete('/:id', controllers.deleteHotel);
module.exports=routerHotel;