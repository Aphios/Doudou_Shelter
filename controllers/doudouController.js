const ObjectId = require('mongoose').Types.ObjectId;
const Doudou = require('../models/doudouModel');

exports.createDoudou = (req, res) => {
  const doudou = new Doudou({...req.body});
  doudou.save((err, doc) => {
    if(err){
        res.status(400).send("Oops, an error occurred : " + err);
    }else{
      res.status(201).json({message: "Doudou correctly saved in database", document : doc});
    }
  });
};


exports.modifyDoudou = (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        const updatedDoudou = {...req.body};
        Doudou.findByIdAndUpdate(req.params.id, updatedDoudou, { new: true }, (err, docs) => {
            if (err) {
                res.status(400).send("Oops, an error occurred : " + err);
            }else if(docs == null){
                res.status(404).send("Update not possible");
            } else {
                res.status(200).json({ message: "The doudou has been updared", document: docs });
            }
        });
    }else{
        res.status(400).send('Wrong Id');
    }
};

exports.getDoudouById = (req, res) => {
    Doudou.findOne({_id: req.params.id}, (err, doc) => {
      if(err){
        res.status(400).send("Oops, an error occurred : " + err);
      }else if(doc == null){
        res.status(404).send("Id not found");
      }else{
        res.status(200).send(doc); 
      }
    });
};

exports.getAllDoudous = (req, res) => {
    Doudou.find({}, (err, docs) => {
        if(err){
            res.status(400).send("Oops, an error occurred : " + err);
        }else if(docs.length == 0){
            res.status(404).send("No doudou in the database");
        }else{
            res.status(200).send(docs);
        }
    });
};

exports.getDoudousByName = (req, res) => {
    Doudou.find({name: req.params.name}, (err, docs) => {
        if(err){
            res.status(400).send("Oops, an error occurred : " + err);  
        }else if(docs.length == 0){
            res.status(404).send("Name not found");
        }else{
            res.status(200).send(docs);  
        }
    });
};

exports.getDoudousByAge = (req, res) => {
    Doudou.find({ age: req.params.age }, (err, docs) => {
        if (err) {
            res.status(400).send("Oops, an error occurred : " + err);
        }else if(docs.length == 0){
            res.status(404).send("No doudou of this age");
        } else {
            res.status(200).send(docs);
        }
    });
};

exports.getDoudousBySex = (req, res) => {
    Doudou.find({ sex: req.params.sex }, (err, docs) => {
        if (err) {
            res.status(400).send("Oops, an error occurred : " + err);
        }else if(docs.length == 0){
            res.status(404).send("No doudou of this sex");
        } else {
            res.status(200).send(docs);
        }
    });
};

exports.getDoudousBySpecies = (req, res) => {
    Doudou.find({ species: req.params.species }, (err, docs) => {
        if (err) {
            res.status(400).send("Oops, an error occurred : " + err);
        }else if(docs.length == 0){
            res.status(404).send("No doudou of this species");
        } else {
            res.status(200).send(docs);
        }
    });
};

exports.getDoudousBySoftness = (req, res) => {
    Doudou.find({ softness: req.params.softness }, (err, docs) => {
        if (err) {
            res.status(400).send("Oops, an error occurred : " + err);
        } else if(docs.length == 0){
            res.status(404).send("No doudou of this softness");
        }else {
            res.status(200).send(docs);
        }
    });
}

exports.deleteDoudou = (req, res) => {
    Doudou.findByIdAndDelete(req.params.id, (err, doc) => {
        if(err){
            res.status(400).send("Oops, an error occurred : " + err);
        }else if(doc == null){
            res.status(404).send("Id not found");
        }else{
            res.status(200).send("The doudou has been deleted");
        }
    });
};

exports.getSpecies = (req, res) => {
    Doudou.distinct('species', (err, docs) => {
        if(err){
            res.status(400).send("Oops, an error occurred : " + err);
        }else if(docs.length == 0){
            res.status(404).send("No document in the database");
        }else{
            res.status(200).send(docs);
        }
    });
}



