const express = require('express');
const router = express.Router();
const { DoudouModel } = require('../models/doudouModel');

router.get('/', (req, res) => {
    DoudouModel.find({}, (err, docs) => {
        if(err)
          console.log(err)
        else
          console.log(docs)
    })
})

router.get('/name/:name', (req, res) => {
    DoudouModel.findOne({name: req.params.name}, (err, doc) => {
      if(err)
        console.log(err)
      else
        console.log(doc)
    })
})

router.get('/id/:id', (req, res) => {
    DoudouModel.findOne({_id: req.params.id}, (err, doc) => {
      if(err)
        console.log(err)
      else
        console.log(doc)
    })
})

router.get('/age/:age', (req, res) => {
    DoudouModel.find({age: req.params.age}, (err, doc) => {
      if(err)
        console.log(err)
      else
        console.log(doc)
    })
})

router.get('/sex/:sex', (req, res) => {
    DoudouModel.find({sex: req.params.sex}, (err, doc) => {
      if(err)
        console.log(err)
      else
        console.log(doc)
    })
})

router.get('/species/:species', (req, res) => {
    DoudouModel.find({species: req.params.species}, (err, doc) => {
      if(err)
        console.log(err)
      else
        console.log(doc)
    })
})

router.get('/softness/:softness', (req, res) => {
    DoudouModel.find({softness: req.params.softness}, (err, doc) => {
      if(err)
        console.log(err)
      else
        console.log(doc)
    })
})

router.get('/page/:page', (req, res) => {
    DoudouModel.find({}, (err, doc) => {
    // TODO pagination
    })
})

router.post('/', (req, res) => {
    // TODO
})

router.put('/', (req, res) => {
    // TODO
})

module.exports = router