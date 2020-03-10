const mongoose = require('mongoose');
      User  = mongoose.model('User');
      Subject = mongoose.model('Subject');
      subjectCtrl = require('../controllers/subject');


//GET
exports.findAllUsers = async function (req, res){
  const users = await User.find().catch(err => console.error(err.message));
  
  res.status(200).jsonp(users);
};

//GET - ID
exports.findUserByID = async function (req, res){
  const user = await User.findById(req.params.id).catch(err => console.error(err.message));

    console.log('GET/users/:id');
    res.status(200).jsonp(user);
};

//PUT
exports.updateUser = async function(req, res){
  const user = await User.findById(req.params.id).catch(err => console.error(err.message));
  const body = req.body;

  for (let contact in body.contact){
    console.log(contact);
    user.contact[contact] = body.contact[contact];
  }

  for (let item in body){
    if (item != 'contact' && item != 'subject'){
      console.log(item);
      user[item] = body[item];
    }
  }

  console.log('PUT/users/:id');
  user.save(function (err){
    if(err) res.send(500, err.message);
      
    res.status(200).jsonp(user);
  });
};

//POST
exports.createUser = async function(req, res){

    const user = await new User({
    name: req.body.name,
    contact: req.body.contact,
    subject: req.body.subject,
    reviews: req.body.reviews
    
  });

    console.log('POST/users/');
    user.save(function (err){
      if(err) res.status(500).send(err.message);
      
      res.status(200).jsonp(user);
    });
};

//DELETE
exports.deleteUser = async function(req, res){
  const user = await User.findById(req.params.id).catch(err => console.error(err.message));
  user.remove(function(err) {
      if(err) res.send(500, err.message);
    res.status(200).send({});
    });
};
