/**
 * Main application file
 */

'use strict';

const express = require('express');
const sqldb = require('./sqldb');
const config = require('./config/environment');
const http = require('http');

// Setup server
const app = express();
const server = http.createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
function startServer() {
    server.listen(config.port, config.ip, function () {
        console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
    });
}

sqldb.sequelize.sync()
    .then(startServer)
    .catch(function (err) {
        console.log('Server failed to start due to error: %s', err);
    });

// Expose app
exports = module.exports = app;
