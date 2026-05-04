const errorhandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "you failed";

    res.status(err.statusCode).json({
        statusCode: err.statusCode,
        status: err.status,
        message: "hi!"
    });
};

module.exports = errorhandler;