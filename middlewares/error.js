const error = (err, req, res, next) => {
    console.log(err.toString());
    return res.status(500). json({ massage: 'An error occured' });
};

module.exports = {
    error,
}