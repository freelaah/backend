const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleModel = new Schema(
    {
        id_servico:{
            type: String,
            required: true
        },
        id_cliente:{
            type: String,
            required: true
        },
        id_profissional:{
            type: String,
            required: true
        },
        dia_servico:{
            type: String,
            required: true
        }
    },
    {_id:true, collection: 'schedule'}
);

module.exports = mongoose.model('schedule', scheduleModel);