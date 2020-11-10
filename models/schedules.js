const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleModel = new Schema(
    {
        id_service:{
            type: String,
            required: true
        },
        service_day:{
            type: String,
            required: true
        }
    },
    {_id:true, collection: 'schedule'}
);

module.exports = mongoose.model('schedule', scheduleModel);