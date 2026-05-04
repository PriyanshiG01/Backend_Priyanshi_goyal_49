//bcrypt,helmet midddleware 
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    store: new FileStore({}),
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 }
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { udata } = req.body;

  if (!udata) {
    return res.redirect("/login");
  }

  req.session.Uname = udata;
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  if (!req.session.Uname) {
    return res.redirect("/login");
  }
  res.render("home", { Uname: req.session.Uname });
});

app.get("/profile", (req, res) => {
  if (!req.session.Uname) {
    return res.redirect("/login");
  }
  res.render("profile", { Uname: req.session.Uname });
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});