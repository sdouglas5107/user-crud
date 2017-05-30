'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('User', {
        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: DataTypes.STRING
    });
};
