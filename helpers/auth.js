module.exports = (req, res, next) => {
    // try {
    //     const token = req.headers.authorization.split(' ')[1];
    //     const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    //     next()
    // } catch {
    //     res.status(401).json({
    //         error: 'Invalid request!'
    //     });
    // }
    next()
};