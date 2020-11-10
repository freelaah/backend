const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryModel = new Schema(
    {
        nome: {
            type: String,
            required: true
        },
        imgURL: {
            type: String,
            required: false
        }
    },
    { _id: true, collection: 'categories'}
);

module.exports = mongoose.model('categories', categoryModel);