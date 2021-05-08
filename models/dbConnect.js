const mongoose = require('mongoose');

let connection = mongoose.connect(
    'mongodb+srv://aphios:ephioS89A19*@doudouapi.85a2m.mongodb.net/doudou_db?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err)
            console.log('Connected to MongoDB')
        else
            console.log('Failed to connect to MongoDB : ' + err)
    }
)

//module.exports = connection;

