const express = require('express');
const router = express.Router()
const controller = require('../controllers/doudouController')

router.get('/', controller.getAllDoudous);

router.post('/', controller.createDoudou);

router.put('/:id', controller.modifyDoudou);

router.get('/name/:name', controller.getDoudouByName);

router.get('/id/:id', controller.getDoudouById);

router.get('/age/:age', controller.getDoudousByAge);

router.get('/sex/:sex', controller.getDoudousBySex);

router.get('/species/:species', controller.getDoudousBySpecies);

router.get('/softness/:softness', controller.getDoudousBySoftness);

router.get('/page/:page', controller.getDoudousByPage);

module.exports = router;