const ObjectId = require('mongoose').Types.ObjectId;
const Doudou = require('../models/doudouModel');

exports.createDoudou = (req, res) => {
  const doudou = new Doudou({...req.body});
  doudou.save((err, docs) => {
    if(!err){
      res.status(201).json({message: "Le doudou a bien été enregistré", document: docs});
    }else{
      res.status(400).send("Nous avons rencontré une erreur : " + err);
    }
  });
};

exports.modifyDoudou = (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        const updatedDoudou = {...req.body};
        Doudou.findByIdAndUpdate(req.params.id, updatedDoudou, { returnOriginal: false }, (err, docs) => {
            if (!err) {
                res.status(200).json({ message: "Le doudou a bien été modifié", document: docs });
            } else {
                res.status(400).send("Nous avons rencontré une erreur : " + err);
            }
        });
    }else{
        res.status(400).send('Id inconnu');
    }
};

exports.getDoudouById = (req, res) => {
    Doudou.findOne({_id: req.params.id}, (err, docs) => {
      if(!err){
          res.status(200).send(docs);
      }else{
          res.status(400).send("Nous avons rencontré une erreur : " + err);
      }
    })
};

exports.getAllDoudous = (req, res) => {
    Doudou.find({}, (err, docs) => {
        if(!err){
            res.status(200).send(docs);
        }else{
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        }
    });
};

exports.getDoudouByName = (req, res) => {
    Doudou.findOne({name: req.params.name}, (err, docs) => {
        if(!err){
            res.status(200).send(docs);
        }else{
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        }
    });
};

exports.getDoudousByAge = (req, res) => {
    Doudou.find({ age: req.params.age }, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        }
    });
};

exports.getDoudousBySex = (req, res) => {
    Doudou.find({ sex: req.params.sex }, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        }
    });
};

exports.getDoudousBySpecies = (req, res) => {
    Doudou.find({ species: req.params.species }, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        }
    });
};

exports.getDoudousBySoftness = (req, res) => {
    Doudou.find({ softness: req.params.softness }, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        }
    });
}

exports.getDoudousByPage = (req, res) => {
    Doudou.find({}, (err, docs) => {
        if (!err) {
            // TODO pagination
            res.status(200).send(docs);
        } else {
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        }
    });
};



