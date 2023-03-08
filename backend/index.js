const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

//database connection
const dbConfig = require('./config/dbConfig');

//get the data form the frontend we need to access the data form the database 
app.use(express.json());

const usersRoute = require('./routes/usersRoute');

app.use('/api/users', usersRoute); //for using any route we have to use (app.use)



app.listen(port, () => console.log(`node js started on ${port}`))