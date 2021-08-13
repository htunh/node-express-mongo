const jwt = require("jsonwebtoken");

module.exports = {
    generateAccessToken: async(username) => {
        return jwt.sign({username}, process.env.SECRET_TOKEN, { expiresIn: '1d' });
    }
}
