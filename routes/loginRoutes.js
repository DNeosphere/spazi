const express = require('express');

const router = new express.Router();
const Login = require('../controllers/login');


router.route('/login').post(Login.login);
router.route('/logout').get(Login.logout);

module.exports = router;
