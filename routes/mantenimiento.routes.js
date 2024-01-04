const {Router} = require('express');
const router = new Router();

var {getAccesoUsuario, getUsuarios, createUsuarios, getUsuarioID, habilitarUsuario, bloquearUsuario} =require('../controllers/usuario.controller');
var {getVehiculos, getVehiculoID, createVehiculo, getIDsVehiculo, updateVehiculo, deleteVehiculo} = require('../controllers/vehiculo.controllers');
var {getMantenimientos, getMantenimientoID, getIDs, createMantenimiento, deleteMantenimiento, updateMantenimiento, updateMantenimiento1} = require('../controllers/mantenimiento.controllers');
var {createRegistro, getRegistros, deleteContacto} = require('../controllers/contacto.controllers');

//Endpoints de Usuario
router.get('/usuarios', getUsuarios);
router.post('/usuario', createUsuarios);
router.post('/acceso', getAccesoUsuario);
router.post('/usuarioID', getUsuarioID);
router.put('/habilitarUsuario', habilitarUsuario);
router.put('/bloquearUsuario', bloquearUsuario);

//Endpoints de Vehiculos
router.get('/vehiculos', getVehiculos);
router.post('/vehiculoID', getVehiculoID);
router.post('/vehiculo', createVehiculo);
router.post('/vehiculosIDs', getIDsVehiculo);
router.put('/updateVehiculo', updateVehiculo);

//Endpoint de Mantenimientos
router.get('/mantenimientos', getMantenimientos);
router.get('/mantenimientoIDs', getIDs);
router.post('/mantenimientoID', getMantenimientoID);
router.post('/mantenimiento', createMantenimiento);
router.put('/updateMantenimiento', updateMantenimiento);
router.put('/updateMantenimiento1', updateMantenimiento1);
router.delete('/deleteMantenimiento', deleteMantenimiento);
router.delete('/deleteVehiculo', deleteVehiculo);

//Endpoint de Contacto
router.get('/registro', getRegistros);
router.post('/contacto', createRegistro);
router.delete('/deleteContacto', deleteContacto);

module.exports = router;