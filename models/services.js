const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesModel = new Schema(
    {       
        id_user:{
            type: String,
            required: true
        },
        id_categoria:{
            type: String,
            required: true
        },
        descricao:{
            type: String,
            require: true
        },
        preco:{
            type: Number,
            get: getPrice,
            set: setPrice,
            require: true,
        },
        imgURL:{
            type: String,
            require: true
        },
        ativo:{
            type: Boolean,
            required: true
        }
    },
    { _id: true, collection: 'services'}
);

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return (num * 100);
}

module.exports = mongoose.model('services', servicesModel);