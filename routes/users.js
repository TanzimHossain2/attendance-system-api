const router = require('express').Router();
const userController = require('../controller/user');

//get a user by id
router.get('/:id', userController.getUserById);

//get a user by email
router.get('/e/:email', userController.getUserByEmail);

//create a new user
router.post('/', userController.postUser);

//update a user by id
router.put('/:id', userController.putUserById);

//update a user by id
router.patch('/:id', userController.patchUserById);

//update a user by email
router.patch('/:email', userController.updateUserByEmail);

//delete a user by id
router.delete('/:id', userController.deleteUserById);

//get all users
router.get('/', userController.getAllUsers);

module.exports = router;