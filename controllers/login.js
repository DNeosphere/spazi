const mongoose = require('mongoose');
const User  = mongoose.model('User');
const Spazi  = mongoose.model('Spazi');
const jwt = require('jsonwebtoken');

const secret = process.env.SPAZI_JWT_SECRET;

exports.loginUser = function(req, res) {
    const { email, password } = req.body;
    User.findOne({ email }, function(err, user) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
          status: 'error',
          message: 'Internal error please try again'
        });
      } else if (!user) {
        res.status(401)
          .json({
            status: 'error',
            message: 'Incorrect email or password'
          });
      } else {
        user.isCorrectPassword(password, function(err, same) {
          if (err) {
            res.status(500)
              .json({
                status: 'error',
                message: 'Internal error please try again'
            });
          } else if (!same) {
            res.status(401)
              .json({
                status: 'error',
                message: 'Incorrect email or password'
            });
          } else {
            // Issue token
            const payload = { id: user._id, type_user: 'user'};
            const token = jwt.sign(payload, secret, {
              expiresIn: '3h'
            });
            res.cookie('token', token, { httpOnly: true })
              .status(200).json({ status: 'OK', message: 'Logged in'});
          }
        });
      }
    });
  };


  exports.logoutUser = function(req, res) {
    res.clearCookie('token');
    res.status(200).json({status: 'OK', message: 'Goodbye!'})
  };