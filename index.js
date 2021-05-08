const express = require('express');
const app = express();
require('./models/dbConnect')
const routes = require('./routes/doudouRoutes');

app.use('/doudous', routes)



app.listen(8080, ()=>{console.log("Server started on 8080")})