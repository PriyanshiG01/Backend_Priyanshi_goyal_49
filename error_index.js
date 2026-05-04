const express = require("express");
const app = express();
const errorhandler = require("./middleware/errorhandler");

app.get("", (req, res) => {
    res.send("welcome to home");
});

app.use((req, res, next) => {
    const error = new Error("something went wrong");
    error.statusCode = 404;
    error.status = "failed";
    next(error);
});

app.use(errorhandler);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});