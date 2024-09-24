import express from 'express';
import sequelize from './models/index.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
const PORT = 3002;

app.use(express.json());

app.use(bookRoutes);

try {
    await sequelize.authenticate();
    console.log('Database connected...');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (err) {
    console.error('Unable to connect to the database:', err);
}
   
