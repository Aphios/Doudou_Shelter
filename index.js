const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

require('./models/dbConnect')
const routes = require('./routes/doudouRoutes');

app.use(cors());

app.use(express.json());

app.use('/api/doudous', routes);

app.listen(8080, () => {console.log("Server started on 8080")});