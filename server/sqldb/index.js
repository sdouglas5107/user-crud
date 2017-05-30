/**
 * Sequelize initialization module
 */

'use strict';

const config = require('../config/environment');
const Sequelize = require('sequelize');

const db = {
    Sequelize,
    sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.User = db.sequelize.import('../api/user/user.model');

module.exports = db;
