const app = require('./functions/authorization/authorization')

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});