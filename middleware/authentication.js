const User = require('../models/User');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.SECRET_KEY;

async function authentication(req, res,next) {

    try {

        let token = req.headers.authorization;
        
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        token = token.split(' ')[1];
       
        const decoded = await jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded._id).select('-password -__v');

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        req.user = user;
        next();

    } catch (e) {
        return res.status(400).json({ error: 'Invalid Token' })
    }
}

module.exports = authentication;