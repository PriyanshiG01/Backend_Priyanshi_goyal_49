const ReqAge = (req, res, next) => {
    const age = req.query.age;

    if (!age) {
        res.send("enter your age");
    } else if (age < 18) {
        res.send("not authorised");
    } else {
        next();
    }
};

module.exports = ReqAge;