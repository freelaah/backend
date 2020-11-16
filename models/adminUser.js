const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminUserModel = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        encryptedPassword: {
            type: String,
            required: true
        }
    },
    { _id: true, collection: 'adminUser' }
);

module.exports = mongoose.model('adminUser', adminUserModel);