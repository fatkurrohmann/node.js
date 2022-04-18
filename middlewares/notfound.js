const notFound = (req, res, next) => {
    return res.status(404).json({ massage : 'Not Found' });
};

module.exports = {
    notFound,
}