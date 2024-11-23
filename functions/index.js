const functions = require("firebase-functions");
const app = require("./src/authorization/authorization");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

exports.app = functions.https.onRequest(app);