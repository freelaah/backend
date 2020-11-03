const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesModel = new Schema(
    {
        descricao: {
            type: String,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
        subcategorias: [{
            descricao: {
                type: String,
                required: true
            },
            imgURL: {
                type: String,
                required: true
            }
        }],
        imgURL: {
            type: String,
            required: true
        }
    },
    { _id: true, collection: 'services'}
);

module.exports = mongoose.model('services', servicesModel);