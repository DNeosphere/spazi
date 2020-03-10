const express = require('express');

const router = new express.Router();
const User = require('../controllers/user');

router.route('/users').get(User.findAllUsers)
router.route('/users').post(User.createUser);
router.route('/users/:id').get(User.findUserByID);
router.route('/users/:id').put(User.updateUser);
router.route('/users/:id').delete(User.deleteUser);

module.exports = router;
