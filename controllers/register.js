var mongoose = require('mongoose');
var Register  = mongoose.model('Register');

exports.createUser = function(req, res){
    console.log('REQ', req.body);
      const record = new Register({
      name: req.body.name,
      email: req.body.email
    });
    record.save(function (err){
        if(err) res.status(500).send(err.message);
        
        res.status(200).jsonp(record);
      });
};
