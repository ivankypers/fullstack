import express from 'express';

const app = express();

const port = 3002;

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log(`Server running on port ${port}`);
})


app.use(express.json());

app.use(express.urlencoded({ extended: true }));
