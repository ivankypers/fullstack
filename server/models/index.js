import sequelize from '../config/database';
import Author from './author';
import Book from './book';

sequelize.sync({ alter: true });

export default sequelize;
