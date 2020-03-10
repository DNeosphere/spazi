const mongoose = require('mongoose');
      Spazi = mongoose.model('Spazi');

//GET - All spazis
exports.findAllSpazis = async function (req, res){
  const spazis = await Spazi.find().catch(err => console.error(err.message));
  
  res.status(200).json(spazis);
};

//GET - By ID
exports.findSpaziByID = async function (req, res){
  const spazi = await Spazi.findById(req.params.id).catch(err => console.error(err.message));

    console.log('GET/spazis/:id');
    res.status(200).json(spazi);
};

//POST - Create a Spazi
exports.createSpazi = async function(req, res){

  const spazi = await new Spazi({
  name: req.body.name,
  age: req.body.age,
  documentId: req.body.documentId,
  contact: req.body.contact,
  billing: req.body.billing,
  reviews: req.body.reviews,
  specialization: req.body.specialization
});

  console.log('POST/spazis/');
  spazi.save(function (err){
    if(err) res.status(500).send(err.message);
    
    res.status(200).json(spazi);
  });
};


//PUT - Update a Spazi
exports.updateSpazi = async function(req, res){
  const spazi = await Spazi.findById(req.params.id).catch(err => console.error(err.message));
  const body = req.body; 

  for (let bill in body.billing){
    spazi.billing[bill] = body.billing[bill];
  }

  for (let contact in body.contact){
    spazi.contact[contact] = body.contact[contact];
  }

  for (let item in body){
    if (item != 'contact' && item != 'billing'){
      spazi[item] = body[item];
    }
  }

  console.log('PUT/spazi/:id');
  spazi.save(function (err){
    if(err) res.send(500, err.message);
      
    res.status(200).json(spazi);
  });
};

//DELETE - Delete a Spazi
exports.deleteSpazi = async function(req, res){
  const spazi = await Spazi.findById(req.params.id).catch(err => console.error(err.message));
  spazi.remove(function(err) {
      if(err) res.send(500, err.message);
    res.status(200).json({});
    });
};
