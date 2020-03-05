var mongoose = require('mongoose');
var User  = mongoose.model('User');

//GET
exports.findAllUsers = function (req, res){
  User.find(function(err, users) {
    if(err) res.send(500, err.message);

    console.log('GET/users')
    res.status(200).jsonp(users);
  });
};


//GET - ID
exports.findUserByID = function (req, res){
  User.findById(req.params.id, function(err, user){
    if(err) res.send(500, err.message);

    console.log('GET/users/:id');
    res.status(200).jsonp(user);
  });
};

//PUT
exports.updateUser = function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err) res.send(500, err.message);

    user.name = req.params.name;
    user.contact = req.params.contact;
    user.need = req.params.need;
    user.subject = req.params.need;
    user.specification = req.params.specification;

    console.log('PUT/users/:id');
    user.save(function (err){
      if(err) res.send(500, err.message);
      
      res.status(200).jsonp(user);
    });

  });
};

//POST
exports.createUser = function(req, res){

  console.log('REQ', req.body);
  //req.body = req.body.jsonp();
    const user = new User({
    name: req.body.name,
    contact: req.body.contact,
    need: req.body.need,
    subject: req.body.subject,
    specification: req.body.specification
  });

    console.log('POST/users/');
    console.log('Body', req.body);
    user.save(function (err){
      if(err) res.status(500).send(err.message);
      
      res.status(200).jsonp(user);
    });
};

//DELETE
exports.deleteUser = function(req, res){
  User.findById(req.params.id, function(err, user){
    user.remove(function(err) {
      if(err) res.send(500, err.message);
    res.status(200).send();
    });
  });
};
