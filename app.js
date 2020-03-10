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
const cors = require('cors');
const connectionString = 'mongodb+srv://dioniMongo:oxcVjB9Ir1AYV8SL@clustertest0-nnzbs.mongodb.net/spazi?retryWrites=true&w=majority';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

/*

//API routes Register
const regCtrl = require('./controllers/register');
const registers = express.Router();

registers.route('/').post(regCtrl.createUser);

app.use('/api/registers', registers);*/

app.use(routeUser);
app.use(routeRegister);
app.use(routeSubject);
app.use(router);


// Connect to DB
mongoose.connect(connectionString, { useNewUrlParser: true }, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('DataBase connected ' + res);
  }
  app.listen(5001, function() {
    console.log("Node server running on http://localhost:5001");
  });
});
