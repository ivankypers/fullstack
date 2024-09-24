const express = require('express');
const sequelize = require('./models');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(bookRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.log('Error: ' + err));