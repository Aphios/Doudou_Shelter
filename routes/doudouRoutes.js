const express = require('express');
const router = express.Router();
const controller = require('../controllers/doudouController');
const authController = require('../controllers/authController');

router.get('/', controller.getAllDoudous);

router.post('/', controller.createDoudou);

router.put('/:id', controller.modifyDoudou);

router.get('/name/:name', controller.getDoudousByName);

router.get('/id/:id', controller.getDoudouById);

router.get('/age/:age', controller.getDoudousByAge);

router.get('/sex/:sex', controller.getDoudousBySex);

router.get('/species/:species', controller.getDoudousBySpecies);

router.get('/softness/:softness', controller.getDoudousBySoftness);

router.delete('/:id', authController.isAuthenticated, controller.deleteDoudou);

router.get('/list/species', controller.getSpecies);

module.exports = router;