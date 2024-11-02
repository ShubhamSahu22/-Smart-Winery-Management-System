const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

let inventory = [];

app.get('/inventory', (req, res) => {
    res.json(inventory);
});

app.post('/inventory', (req, res) => {
    const item = req.body;
    inventory.push(item);
    res.status(201).json(item);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Inventory service running on port ${process.env.PORT || 3000}`);
});
