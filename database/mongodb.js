const mongoose = require('mongoose');

//host:porta:banco 
// const connectionURL = 'mongodb://172.17.0.2:27017/unateste'
const connectionURL = 'mongodb://localhost:27017/UNA'
//const connectionURL = "mongodb+srv://moises:teste@cluster0.wrxxf.mongodb.net/<dbname>?retryWrites=true&w=majority";
// 'mongodb://localhost:27017/UNA'



mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

module.exports = { mongoose } 