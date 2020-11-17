const AdminBro = require('admin-bro');
const adminUser = require('./models/adminUser');
const { after: passwordAfterHook, before: passwordBeforeHook } = require('./actions/password.hook')

const userAdministrationResource = {
    name: 'Criação de Usuarios Administrativos',
}
/**
 * @type {AdminBro.ResourceOptions}
 */

const options = {
    properties: {
        encryptedPassword: {
            isVisible: false,
        },
        password: {
            type: 'password',
        },
    },
    navigation: userAdministrationResource,
    actions: {
        new: {
            after: passwordAfterHook,
            before: passwordBeforeHook
        },
        edit: {
            after: passwordAfterHook,
            before: passwordBeforeHook
        }
    }


}


module.exports = {
    options,
    resource: adminUser,
}