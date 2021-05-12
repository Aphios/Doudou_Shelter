const ObjectId = require('mongoose').Types.ObjectId;
const Doudou = require('../models/doudouModel');

exports.createDoudou = (req, res) => {
  const doudou = new Doudou({...req.body});
  doudou.save((err, docs) => {
    if(err){
        res.status(400).send("Nous avons rencontré une erreur : " + err);
    }else{
      res.status(201).send("Le doudou a bien été enregistré");
    }
  });
};


exports.modifyDoudou = (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        const updatedDoudou = {...req.body};
        Doudou.findByIdAndUpdate(req.params.id, updatedDoudou, { new: true }, (err, docs) => {
            if (err) {
                res.status(400).send("Nous avons rencontré une erreur : " + err);
            }else if(docs == null){
                res.status(404).send("Modification impossible");
            } else {
                res.status(200).json({ message: "Le doudou a bien été modifié", document: docs });
            }
        });
    }else{
        res.status(400).send('Id incorrect');
    }
};

exports.getDoudouById = (req, res) => {
    Doudou.findOne({_id: req.params.id}, (err, doc) => {
      if(err){
        res.status(400).send("Nous avons rencontré une erreur : " + err);
      }else if(doc == null){
        res.status(404).send("Identifiant non trouvé");
      }else{
        res.status(200).send(doc); 
      }
    });
};

exports.getAllDoudous = (req, res) => {
    Doudou.find({}, (err, docs) => {
        if(err){
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        }else if(docs.length == 0){
            res.status(404).send("Il n'y a aucun doudou dans le catalogue.");
        }else{
            res.status(200).send(docs);
        }
    });
};

exports.getDoudousByName = (req, res) => {
    Doudou.find({name: req.params.name}, (err, docs) => {
        if(err){
            res.status(400).send("Nous avons rencontré une erreur : " + err);  
        }else if(docs.length == 0){
            res.status(404).send("Nom non trouvé");
        }else{
            res.status(200).send(docs);  
        }
    });
};

exports.getDoudousByAge = (req, res) => {
    Doudou.find({ age: req.params.age }, (err, docs) => {
        if (err) {
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        }else if(docs.length == 0){
            res.status(404).send("Il n'y a aucun doudou de cet âge.");
        } else {
            res.status(200).send(docs);
        }
    });
};

exports.getDoudousBySex = (req, res) => {
    Doudou.find({ sex: req.params.sex }, (err, docs) => {
        if (err) {
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        }else if(docs.length == 0){
            res.status(404).send("Il n'y a aucun doudou de ce sexe.");
        } else {
            res.status(200).send(docs);
        }
    });
};

exports.getDoudousBySpecies = (req, res) => {
    Doudou.find({ species: req.params.species }, (err, docs) => {
        if (err) {
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        }else if(docs.length == 0){
            res.status(404).send("Il n'y a aucun doudou de cette espèce.");
        } else {
            res.status(200).send(docs);
        }
    });
};

exports.getDoudousBySoftness = (req, res) => {
    Doudou.find({ softness: req.params.softness }, (err, docs) => {
        if (err) {
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        } else if(docs.length == 0){
            res.status(404).send("Il n'y a aucun doudou possédant ce degré de douceur.")
        }else {
            res.status(200).send(docs);
        }
    });
}

exports.getDoudousByPage = (req, res) => {
    Doudou.find({}, (err, docs) => {
        if (err) {
            res.status(400).send("Nous avons rencontré une erreur : " + err);
        }else if(docs.length == 0){
            res.status(404).send("Il n'y a aucun doudou dans le catalogue.");
        } else {
            // TODO pagination
            res.status(200).send(docs);
        }
    });
};



