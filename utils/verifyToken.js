const jwt = require('jsonwebtoken')
module.exports = async (req, res, next) => {
    const token = req.header('access_token')
    if (!token) return res.status(401).json("Invalid Token")
    try {
        const verified = jwt.verify(token, "ffdqkjgkjo");
        req.verifiedUser = verified
        next()
    } catch (err) {
        return res.status(403).json("access_denied")
    }
}