const mongoose = require('mongoose');

//host:porta:banco 
const connectionURL = 'mongodb://172.17.0.2:27017/Una2'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

module.exports = { mongoose } 