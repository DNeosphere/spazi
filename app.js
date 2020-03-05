const express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
    require('./models/user');
    require('./models/register');
const connectionString = 'mongodb+srv://dioniMongo:oxcVjB9Ir1AYV8SL@clustertest0-nnzbs.mongodb.net/spazi?retryWrites=true&w=majority';


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});


//API routes User
const userCtrl = require('./controllers/user');

const users = express.Router();

users.route('/').get(userCtrl.findAllUsers).post(userCtrl.createUser);

users.route('/:id').get(userCtrl.findUserByID).put(userCtrl.updateUser).delete(userCtrl.deleteUser);

app.use('/api/users', users);

//API routes Register
const regCtrl = require('./controllers/register');
const registers = express.Router();

registers.route('/').post(regCtrl.createUser);

app.use('/api/registers', registers);

app.use(router);

// Connect to DB
mongoose.connect(connectionString, { useNewUrlParser: true }, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('DataBase connected ' + res);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});
