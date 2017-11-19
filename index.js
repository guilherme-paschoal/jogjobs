const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const errorHandling = require('./helpers/errorHandling');

//controllers
const jobsController = require('./controllers/jobsController');

// The order of middlewares in app.use matters. bodyparser needs to be first. Or something like that.
app.use(bodyParser.json());

// The /api parameter below requires that the URL contains '/api'.
// app.use('/api', require('./routes/api'));
// I'm not gonna use it
app.use(require('./routes/api'));

// Handle errors with middleware
app.use(errorHandling);

mongoose.connect(`mongodb://admin:admin123@ds113626.mlab.com:13626/jogjobs`);
mongoose.Promise = global.Promise;

//initialize controllers
jobsController(app);

app.listen(process.env.port || 3000, function(){
  console.log("API Server started");
});



