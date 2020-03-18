const express = require('express');
const withAuth = require('../util/auth.js');

const router = new express.Router();
const User = require('../controllers/user');

router.route('/users').get(withAuth, User.findAllUsers)
router.route('/users').post(User.createUser);
router.route('/users/me').get(withAuth, User.findCurrentUser);
router.route('/users/contact-spazi').post(withAuth, User.contactSpazi);
router.route('/users/:id').get(withAuth, User.findUserByID);
router.route('/users/:id').put(withAuth, User.updateUser);
router.route('/users/:id').delete(withAuth, User.deleteUser);

module.exports = router;
