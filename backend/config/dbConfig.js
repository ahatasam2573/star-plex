const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongodb connected')
})

connection.on('error', () => {
    console.log('mongodb failed')
})