const { default: AdminBro } = require('admin-bro');
const { buildAuthenticatedRouter } = require('@admin-bro/express');
const express = require('express');
const argon2 = require('argon2');

const adminUser = require('./models/adminUser');

/**
 * @param {AdminBro} admin
 * @return {express.Router} router
 */
const buildAdminRouter = (admin) => {
    const router = buildAuthenticatedRouter(admin, {
        cookieName: 'admin',
        cookiePassword: 'teste',
        authenticate: async (email, password) => {
            const admin = await adminUser.findOne({ email })

            if (admin && await argon2.verify(admin.encryptedPassword, password)) {
                return admin.toJSON()
            }
            return null
        }
    });
    return router;
};

module.exports = buildAdminRouter;