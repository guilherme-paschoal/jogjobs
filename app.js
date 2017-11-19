const express = require('express');
const bodyParser = require('body-parser');

//controllers
const jobsController = require('./controllers/jobsController');

const app = express();

app.use(bodyParser.json());

//initialize controllers
jobsController(app);

app.listen(3000);



