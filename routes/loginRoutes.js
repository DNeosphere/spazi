const express = require('express');

const router = new express.Router();
const Login = require('../controllers/login');


router.route('/login').post(Login.loginUser);

module.exports = router;
