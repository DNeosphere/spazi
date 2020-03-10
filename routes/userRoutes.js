const express = require('express');

const router = new express.Router();
const User = require('../controllers/user');

router.route('/api/users').get(User.findAllUsers)
router.route('/api/users').post(User.createUser);
router.route('/api/users/:id').get(User.findUserByID);
router.route('/api/users/:id').put(User.updateUser);
router.route('/api/users/:id').delete(User.deleteUser);

module.exports = router;
