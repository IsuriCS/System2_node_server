const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'testUser' && password === 'abc123') {
        return res.status(200).json({ message: 'Login successful!' });
    } else {
        return res.status(401).json({ error: 'Invalid username or password' });
    }
});



module.exports = app;