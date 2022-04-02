require("dotenv").config();
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await app.listen(port);
        console.log(`Server started at http://localhost:${port}`);
    } catch (err) {
        console.error(err);
    }
}

start();






