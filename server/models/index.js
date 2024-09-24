const sequelize = require('../config/database');
const Author = require('./author');
const Book = require('./book');

sequelize.sync({ alter: true });

module.exports = sequelize;