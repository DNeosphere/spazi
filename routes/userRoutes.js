const express = require('express');
const auth = require('../util/auth.js');

const router = new express.Router();
const User = require('../controllers/user');

router.route('/users').get(auth.withAuth, auth.userAuth, User.findAllUsers)
router.route('/users').post(User.createUser);
router.route('/users/me').get(auth.withAuth, auth.userAuth, User.findCurrentUser);
router.route('/users/contact-spazi').post(auth.withAuth, auth.userAuth, User.contactSpazi);
router.route('/users/match-spazi').post(auth.withAuth, auth.userAuth);
router.route('/users/:id').get(auth.withAuth, auth.userAuth, User.findUserByID);
router.route('/users/:id').put(auth.withAuth, auth.userAuth, User.updateUser);
router.route('/users/:id').delete(auth.withAuth, auth.userAuth, User.deleteUser);

module.exports = router;
