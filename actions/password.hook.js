const argon2 = require('argon2');
const AdminBro = require('admin-bro');


/**@type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response) => {
    if (response.record && response.record.errors) {
        response.record.errors.password = response.record.errors.encriptedPassword;
    }
    return response;
}

/**@type {AdminBro.Before} */
const before = async (request) => {
    if (request.method === 'post') {
        const { password, ...otherParams } = request.payload;

        if (password) {
            const encriptedPassword = await argon2.hash(password)

            return {
                ...request,
                payload: {
                    ...otherParams,
                    encriptedPassword
                }
            }
        }
    }
    return request;
}

module.exports = { after, before }