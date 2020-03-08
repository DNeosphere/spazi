const mongoose = require('mongoose');
const Subject  = mongoose.model('Subject');
const User = mongoose.model('User');

//GET - By User ID
exports.findAllSubjectByUser = function (req, res){
  Subject.find({ ownerId : req.params.ownerId }, function(err, subjects){
    if(err) res.status(500).send(err.message);
    
    console.log('GET/users/:ownerId/subjects');
    res.status(200).jsonp(subjects);
  });
};


//GET - ID
exports.findSubjectByID = function (req, res){
  Subject.findById(req.params.id, function(err, subject){
    if(err) res.send(500, err.message);

    console.log('GET/subjects/:id');
    res.status(200).jsonp(subject);
  });
};

//PUT
exports.updateSubject = function(req, res){
  Subject.findById(req.params.id, function(err, subject){
    if(err) res.send(500, err.message);
    const body = req.body;
    for (let item in body){
      subject[item] = body[item];
    }

    console.log('PUT/subjects/:id');
    subject.save(function (err){
      if(err) res.send(500, err.message);
      
      res.status(200).jsonp(subject);
    });

  });
};

//POST
exports.createSubject = function(req, res){

  console.log('REQ', req.body);
  //console.log('PARAMS ------',req.params);
  console.log('Owner id: -----', req.params.ownerId);
  //req.body = req.body.jsonp();
    const subject = new Subject({
    name: req.body.name,
    type: req.body.type,
    specification: req.body.specification,
    ownerId: req.params.ownerId
  });

    console.log('POST/users/:ownerId/subject');
    subject.save(function (err){
      if(err) res.status(500).send(err.message);
      
    });

  const user = await User.findById(req.params.ownerId);
  console.log(user.id);
  //user.subjects.push(subject);
  /*user.save(function (err){
      if(err) res.status(500).send(err.message);
      
    });*/
  res.status(200).jsonp(subject);

};

//DELETE
exports.deleteSubject = function(req, res){
  Subject.findById(req.params.id, function(err, subject){
    subject.remove(function(err) {
      if(err) res.send(500, err.message);
    res.status(200).send();
    });
  });
};
