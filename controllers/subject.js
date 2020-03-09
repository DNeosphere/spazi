const mongoose = require('mongoose');
const Subject  = mongoose.model('Subject');
const User = mongoose.model('User');

//GET - By User ID
exports.findAllSubjectByUser = async function (req, res){
  const user = await User.findById(req.params.ownerId).catch(err => console.error(err.message));
        subjects = user.subject; 

    console.log('GET/users/:ownerId/subjects');
    res.status(200).jsonp(subjects);
};


//GET - ID
exports.findSubjectByID = async function (req, res){
  const subject = await Subject.findById(req.params.id).catch(err => console.error(err.message));

  console.log('GET/subjects/:id');
  res.status(200).jsonp(subject);
};

//PUT
exports.updateSubject = async function(req, res){
  const subject = await Subject.findById(req.params.id).catch(err => console.error(err.message));
  const body = req.body;
  for (let item in body){
    subject[item] = body[item];
  }

  console.log('PUT/subjects/:id');
  subject.save(function (err){
    if(err) res.send(500, err.message);
      
      res.status(200).jsonp(subject);
  });
};

//POST
exports.createSubject = async function(req, res){

  const user = await User.findById(req.params.ownerId)
  .catch(err => {
    console.error(err.message);
  });
  console.log('REQ', req.body);
  //console.log('PARAMS ------',req.params);
  console.log('Owner id: -----', req.params.ownerId);
  //req.body = req.body.jsonp();
  const subject = new Subject({
    name: req.body.name,
    type: req.body.type,
    specifications: req.body.specifications
  });

  user.subject.push(subject);
  user.save(function (err){
      if(err) res.status(500).send(err.message);
      
  });
  res.status(200).jsonp(subject);

};

//DELETE
exports.deleteSubject = async function(req, res){
  const subject = await Subject.findById(req.params.id).catch(err => console.error(err.message));
    subject.remove(function(err) {
      if(err) res.send(500, err.message);
    res.status(200).send();
    });
};
