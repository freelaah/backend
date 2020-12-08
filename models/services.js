const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return (num);
}

/*
function getData(value){
    return "10/10/2020";
}


function setData(value){
    //yyyy/mm/dd;
    let arrData = value.split("/");

    return `{arrData[0]}`;
}
*/

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
            require: true
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
    { _id: true, collection: 'services', toJSON: { getters: true } } // Funcionar o get para setar a casa decimal do preco 0.00
);
module.exports = mongoose.model('services', servicesModel);