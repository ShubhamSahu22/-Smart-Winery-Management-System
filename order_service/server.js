const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

app.post('/order', (req, res) => {
    const order = req.body;
    // Logic to process the order
    res.status(201).json(order);
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Order service running on port ${process.env.PORT || 3001}`);
});
