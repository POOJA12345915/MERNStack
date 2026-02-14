const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
    res.send("Environment: " + process.env.ENVIRONMENT);
});

app.listen(3000, () => console.log("Running on port 3000"));
