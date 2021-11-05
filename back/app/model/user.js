const Sequelize = require('sequelize');
const connection = require('../database/database');


const User = connection.define('user', {
    uid: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    note: {
        type: Sequelize.STRING,
        allowNull: true
    }
});


User.sync({ force: true });

module.exports = User;