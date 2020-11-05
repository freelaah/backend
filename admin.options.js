const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose')

AdminBro.registerAdapter(AdminBroMongoose);

const users = require('./models/users');
const services = require('./models/services');

/**@type {import('admin-bro').AdminBroOptions} */

const AdmintrationsResource = {
    name: 'Administração',

}

const options = {
    resources: [
        {
            resource: users, options: {
                navigation: AdmintrationsResource
            }
        },
        {
            resource: services, options: {
                navigation: AdmintrationsResource
            }
        },
    ],
    branding: {
        companyName: 'Freelaah',
        logo: "https://raw.githubusercontent.com/freelaah/frontend/16c7511fcb5c82eeea5ad749854a60e4c6420c69/src/assets/images/logo3.svg"
    },
}

module.exports = options;