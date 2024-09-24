import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mydb', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;
