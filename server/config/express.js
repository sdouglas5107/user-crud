/**
 * Express configuration
 */

'use strict';

const bodyParser = require('body-parser');
const morgan = require('morgan');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
};
