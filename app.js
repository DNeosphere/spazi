const express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
    require('./models/user');
    require('./models/register');
    require('./models/subject');
    require('./models/spazi');
    routeUser = require('./routes/userRoutes');
    routeRegister = require('./routes/registerRoutes');
    routeSubject = require('./routes/subjectRoutes');
    routeSpazi = require('./routes/spaziRoutes');
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


app.use(routeUser);
app.use(routeRegister);
app.use(routeSubject);
app.use(routeSpazi);
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
