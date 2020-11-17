const mongoose = require('mongoose');

//host:porta:banco 
// const connectionURL = 'mongodb://172.17.0.2:27017/unateste'
const connectionURL = 'mongodb://localhost:27017/UNA'
// 'mongodb://localhost:27017/UNA'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

module.exports = { mongoose } 