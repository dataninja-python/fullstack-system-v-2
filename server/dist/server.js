const express = require('express');
const app = express();
const PORT = 5025;
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});
app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});
