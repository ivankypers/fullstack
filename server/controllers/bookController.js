const sequelize = require('../models');
const Book = require('../models/book');

exports.getBooks = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    try {
        const books = await sequelize.query(
            'SELECT * FROM "Books" LIMIT :limit OFFSET :offset',
            {
                replacements: { limit: parseInt(limit), offset: parseInt(offset) },
                type: sequelize.QueryTypes.SELECT
            }
        );

        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};