const jwt = require('jsonwebtoken');
const secret = process.env.SPAZI_JWT_SECRET;
const mongoose = require('mongoose');
      User  = mongoose.model('User');
      Spazi  = mongoose.model('Spazi');

exports.withAuth = function(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.id = decoded.id;
        next();
      }
    });
  }
}

exports.userAuth = async function(req, res, next) {

  try {

    const user = await User.findById(req.id);
    if (!user) throw "User token invalid. It is not a user";
    next();

  } catch(error) {
    return res.status(403).send({status: "error", message: error});
  }
}

exports.spaziAuth = async function(req, res, next) {

  try {

    const spazi = await Spazi.findById(req.id);
    if (!spazi) throw "Spazi token invalid. It is not a spazi";
    next();

  } catch(error) {
    return res.status(403).send({status: "error", message: error});
  }
}
