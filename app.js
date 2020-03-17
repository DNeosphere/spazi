const express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    cookieParser = require("cookie-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
    require('./models/user');
    require('./models/register');
    require('./models/subject');
    require('./models/spazi');
    withAuth = require('./util/auth.js');
    routeUser = require('./routes/userRoutes');
    routeRegister = require('./routes/registerRoutes');
    routeSubject = require('./routes/subjectRoutes');
    routeSpazi = require('./routes/spaziRoutes');
    routeLogin = require('./routes/loginRoutes');
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
app.use(cookieParser());

// Adding authentication middleware



// Adding routes

app.use('/api', routeUser);
app.use('/api', routeRegister);
app.use('/api', routeSubject);
app.use('/api', routeSpazi);
app.use('/api', routeLogin);

//Adding API status


app.get('/api/status', function(req, res) {
  res.json({status : 'OK'});
});

app.get('/api/checktoken', withAuth, function(req, res) {
  res.sendStatus(200).json({status: 'OK', message: 'Token authenticated'});
});

app.use('/api', function (req, res, next) {
  res.status(404).json({status: 'error', message: '[Error 404]: Page not found'});
});


// Connect to DB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Database connected ' + res);
  }
  app.listen(5001, function() {
    console.log("Node server running on http://localhost:5001");
  });
});
