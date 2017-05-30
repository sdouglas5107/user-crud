'use strict';
module.exports = {
    sequelize: {
        uri: 'sqlite://',
        options: {
            logging: console.log,
            storage: 'dev.sqlite',
            define: {
                timestamps: false
            }
        }
    },
};
