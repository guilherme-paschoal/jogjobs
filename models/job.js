const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  id:{
    type: Number,
    required: [true, 'Job Id field is required']
  },  title:{
  type: String,
    required: [true, 'Job Title field is required']
  },
  company: {
    id: Number,
    name: String
  }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
