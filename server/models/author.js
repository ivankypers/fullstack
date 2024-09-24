const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Author = sequelize.define('Author', {
    author_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    num_books: DataTypes.INTEGER
});

export default Author;