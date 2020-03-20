const mongoose = require('mongoose');
const User  = mongoose.model('User');
const Spazi  = mongoose.model('Spazi');
const jwt = require('jsonwebtoken');

const secret = process.env.SPAZI_JWT_SECRET;

exports.login = function(req, res, next) {

  const type = req.body.type;
  const email = req.body.email;
  const password = req.body.password;

  if (type === 'user') {
    loginUser(req, res, next, email, password);
  } else if (type === 'spazi') {
    loginSpazi(req, res, next, email, password);
  } else {
    res.status(400).json({status: 'error', message: '[Error 400]: Bad Request'});
  }
  
}

function loginUser(req, res, next, email, password) {
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


  function loginSpazi(req, res, next, email, password) {
    Spazi.findOne({ email }, function(err, user) {
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
            const payload = { id: user._id, type_user: 'spazi'};
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


exports.logout = function(req, res) {
    res.clearCookie('token');
    res.status(200).json({status: 'OK', message: 'Goodbye!'})
};
  