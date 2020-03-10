const express = require('express');

const router = new express.Router();
const Register = require('../controllers/register');

router.route('/api/registers').post(Register.createUser);

module.exports = router;
