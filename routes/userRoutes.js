const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

// const {
//     getAllUsers,
//     getUserById,
//     // createUser,
//     // updateUser,
//     // deleteUser
// } = require('../controllers/userController');

// router.get('/', userController.getAllUsers);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById,);
router.post('/', userController.createUser);
router.put('/:id',userController.updateUser)
router.delete('/:id', userController.deleteUser);
module.exports = router;