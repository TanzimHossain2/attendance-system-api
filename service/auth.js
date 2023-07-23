const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET_KEY;
const {findUserByProperty,createNewUser} = require('./user')
const error = require('../utils/error');


const registerService =async ({email, password, name})=>{
    let user = await findUserByProperty('email', email);

        if (user) {
            throw error(400, 'User already exists')

        } else {

        user = await createNewUser({name, email, password});
  
        }
}

const loginService = async ({email, password})=>{

    const user = await findUserByProperty('email', email);

    if (!user) {
      throw error(400, 'Invalid Credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw error(400, 'Invalid Credentials');
    }

    const payload = {
        _id: user._id,
        name: user.name,
        email :user.email,
        role: user.role,
        accountStatus: user.accountStatus
    }

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '12h'});

    return token;

}

module.exports = {
    registerService,
    loginService
};