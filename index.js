const express = require("express");
const ReqAge = require("./middleware/middleware");
const app = express();
const router=express.Router()
router.use( ReqAge)

app.get("", (req, res) => {
    res.send("home page");
});

app.get("/about", ReqAge, (req, res) => {//bind middleware on route
    res.send("it is about page");
});

router.get("/contact", (req, res) => {
    res.send("it is contact page");
});
app.use(router)
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
