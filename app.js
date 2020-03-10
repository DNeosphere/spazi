const express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
    require('./models/user');
    require('./models/register');
    require('./models/subject');
    routeUser = require('./routes/userRoutes');
    routeRegister = require('./routes/registerRoutes');
    routeSubject = require('./routes/subjectRoutes');
    routeSpazi = require('./routes/spaziRoutes');
const cors = require('cors');

// Environment variables
const SPAZI_DB_USER = process.env.SPAZI_DB_USER;
const SPAZI_DB_PWD = process.env.SPAZI_DB_PWD;

const connectionString = 
`mongodb+srv://${SPAZI_DB_USER}:${SPAZI_DB_PWD}@clustertest0-nnzbs.mongodb.net/spazi?retryWrites=true&w=majority`;

// Adding Middleware

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Adding routes

app.use('/api', routeUser);
app.use('/api', routeRegister);
app.use('/api', routeSubject);
app.use('/api', routeSpazi);

//Adding API status


app.get('/api/status', function(req, res) {
  res.json({status : 'OK'});
});


// Connect to DB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('DataBase connected ' + res);
  }
  app.listen(5001, function() {
    console.log("Node server running on http://localhost:5001");
  });
});
