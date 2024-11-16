const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());


app.post('/login', (req, res) => {
    const { username, password } = req.body;

  
    const validUsername = 'testUser';
    const validPassword = 'abc123';

    if (username === validUsername && password === validPassword) {
        return res.status(200).json({ message: 'Login successful!' });
    } else {
        return res.status(401).json({ error: 'Invalid username or password' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
