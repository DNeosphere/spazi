const mongoose = require('mongoose');
const Subject  = mongoose.model('Subject');
const User = mongoose.model('User');

//GET - By User ID
exports.findAllSubjectByUser = async function (req, res){
  const user = await User.findById(req.params.ownerId).catch(err => console.error(err.message));
        subjects = user.subject; 

    console.log('GET/users/:ownerId/subjects');
    res.status(200).json(subjects);
};


//GET - ID

exports.findSubjectByID = async function (req, res){
  const user = await User.findById(req.params.ownerId).catch(err => console.error(err.message));
        subjects = user.subject;

  console.log('GET/users/:ownerId/subjects/:id');
  for (let subject of subjects){
    if (subject.id == req.params.id){
      res.status(200).json(subject);
      break;
    }
  }
};

//PUT
exports.updateSubject = async function(req, res){
  const user = await User.findById(req.params.ownerId).catch(err => console.error(err.message));
        subjects = user.subject;
        body = req.body;
  let selecSubject;
  let subject;

  for (subject of subjects){
    if (subject.id == req.params.id){
      selecSubject = subject;
      break;
    }
  }
  
  for (let item in body){
    selecSubject[item] = body[item];
  }

  console.log('PUT/subjects/:id');
  user.save(function (err){
    if(err) res.send(500, err.message);
      
      res.status(200).json(subject);
  });
};

//POST
exports.createSubject = async function(req, res){

  const user = await User.findById(req.params.ownerId)
  .catch(err => {
    console.error(err.message);
  });
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

  const user = await User.updateOne({ _id : req.params.ownerId },
    {$pull : { subject : {_id: req.params.id} } },
    { multi: true}
    )

  res.status(200).json({});
};
