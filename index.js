const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");

app.use(cookieparser()); 

app.get("/setcookie", (req, res) => {
    res.cookie("unibic", "chocolatecookie", {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false
    });
    res.send("cookie setup successfully");
});

app.get("/getcookie", (req, res) => {
    const data=req.cookies.unibic;
    if(data)res.end(data);
    else res.end("no cookie found");
});
app.get("/deletecookie",(req,res)=>{
    res.clearCookie("unibic");
    res.send("Cookie deleted");
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
//system design insta amazon apple 