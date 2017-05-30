'use strict';
const path = require("path");
const _ = require("lodash");

const all = {
    env: process.env.NODE_ENV,

    root: path.normalize(`${__dirname}/../../..`),

    port: process.env.PORT || 9000,

    ip: process.env.IP || '0.0.0.0',
};
module.exports = _.merge(all, require(`./development.js`));
