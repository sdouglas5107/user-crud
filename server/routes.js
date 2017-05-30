/**
 * Main application routes
 */

'use strict';

const path = require("path");

module.exports = function (app) {
    app.use('/api/users', require('./api/user'));
};
