const express = require('express');

const app = express();

app.get("/", (req, resp) => {
    resp.send("Hello World");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.info(`App started on port ${PORT}`);
});