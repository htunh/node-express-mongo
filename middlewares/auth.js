const jwt = require("jsonwebtoken");

module.exports = {
    authenticateToken: async(req, res, next) => {
        try {
            // Gather the jwt access token from the request header
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1]
            if (token == null) return res.sendStatus(401) // if there isn't any token

            jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
            console.log(err)
            if (err) return res.sendStatus(403)
            req.user = user
            next() // pass the execution off to whatever request the client intended
            })
        } catch (error) {
            res.status(422).json(error);
        }
    }
}