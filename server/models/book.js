const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Author = require('./author');

const Book = sequelize.define('Book', {
    book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    publication_date: DataTypes.DATE,
    price: DataTypes.NUMERIC,
});

Book.belongsTo(Author, { foreignKey: 'author_id' });

export default Book;