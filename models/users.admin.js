const AdminBro = require('admin-bro');
const users = require('./users')

/**@type {AdminBro.ResourceOptions} */
const options = {

}

module.exports = {
    options,
    resource: users,
}