const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;