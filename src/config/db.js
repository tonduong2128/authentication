const mongoose = require('mongoose');

async function connect() {
    return await mongoose.connect('mongodb://localhost:27017/authentication', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });  
} 

module.exports= {connect}