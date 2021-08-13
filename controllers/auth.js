const User = require('../models/User');
const {generateAccessToken} = require('../modules/utils')
const {authEmitter} = require('../events')
module.exports = {
    register: async(req, res) => {
        try {
            const user = await User.create(req.body);
            authEmitter.emit('email_verification');
            res.status(201).json({ data: user, accessToken: await generateAccessToken(user.userName) });
        } catch (error) {
            console.log(error.message)
            res.status(422).json(error);
        }
    },
    login: async(req, res) => {
        try {
            const user = await User.findOne({userName: req.body.userName});
            const checkPass = await user.isValidPassword(req.body.password);

            if (checkPass) {
                res.status(200).json({ data: user, accessToken: await generateAccessToken(req.body.userName), message: 'login success' });
                authEmitter.emit('login_history');
            } else {
                res.status(403).json({message: 'login failed'})
            }
        } catch (error) {
            res.status(422).json(error);
        }
    },
}