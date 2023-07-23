const User = require('../models/User');
const userService = require('../service/user');
const error = require('../utils/error');
const authService = require('../service/auth');

const getAllUsers = async (req, res, next) => {
    // Todo: filter, sort, paginate, select
    try {

        const users = await userService.findUsers();
        res.status(200).json(users);

    } catch (err) {
        next(err);
    }


}

const getUserById = async (req, res, next) => {
    const { id } = req.params;


    try {
        const user = await userService.findUserByProperty('_id', id);

        if (!user) {
            throw error('User not found', 404);
        }

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}

const getUserByEmail = async (req, res, next) => {
    const { email } = req.params;
    try {
        const user = await userService.findUserByProperty('email', email);

        if (!user) {
            throw error('User not found', 404);
        }

        res.status(200).json(user);

    } catch (err) {
        next(err);
    }
}

const postUser = async (req, res, next) => {
    const { name, email, password, roles, accountStatus } = req.body;

    try {
        const user = await authService.registerService({ name, email, password, roles, accountStatus });

        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
}

const putUserById = async (req, res, next) => {
    const { id } = req.params;
    const { name, roles, accountStatus, email } = req.body;

    try {
        const user = await userService.updateUser(id, { name, roles, email, accountStatus });
        console.log(user);
        if (!user) {
            throw error('User not found', 404);
        }

        res.status(200).json(user);

    } catch (err) {
        next(err);
    }
}

const patchUserById = async (req, res, next) => {
    const { id } = req.params;
    const { name, roles, accountStatus } = req.body;

    try {
        const user = await userService.findUserByProperty('_id', id);

        if (!user) {
            throw error('User not found', 404);
        }

        user.name = name ?? user.name;
        user.roles = roles ?? user.roles;
        user.accountStatus = accountStatus ?? user.accountStatus;

        await user.save();

        res.status(200).json(user);


    } catch (err) {
        next(err);
    }

}

const updateUserByEmail = async (req, res, next) => {
    const { email } = req.params;
    const { name, roles, accountStatus } = req.body;

    try {
        const user = await userService.findUserByProperty('email', email);

        if (!user) {
            throw error('User not found', 404);
        }

        user.name = name ?? user.name;
        user.roles = roles ?? user.roles;
        user.accountStatus = accountStatus ?? user.accountStatus;

        await user.save();

        res.status(200).json(user);

    } catch (err) {
        next(err);
    }
}

const deleteUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await userService.findUserByProperty('_id', id);

        if (!user) {
            throw error('User not found', 404);
        }

        await user.deleteOne();
        return res.status(203).send();

    } catch (err) {
        next(err);
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    updateUserByEmail,
    postUser,
    putUserById,
    patchUserById,
    deleteUserById,
    getUserByEmail
}

