const mongoose = require('mongoose');

mongoose.connect(`mongodb://admin:admin123@ds113626.mlab.com:13626/jogjobs`)

const jobSchema = new mongoose.Schema({
  id: Number,
  title: String,
  company: {
    id: Number,
    name: String
  }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = function(app) {
  
  app.get('/jobs', function(req, res){ 
    
    Job.find({}, function(err, data) {
      if (err) throw err;
      res.json(data);      
    });
    
  });

  app.get('/jobs/:id', function(req, res){ 
    
    Job.find({id:req.params.id}, function(err, data) {
      if (err) throw err;
      res.json(data);      
    });
    
  }); 

  app.post('/jobs', function(req,res){
    console.log(req.body);
    Job(req.body).save(function(err, data){
      if(err) throw err;
      res.json(data);
    });
  });

  app.delete('/jobs/:id', function(req, res){
    Job.find({id:req.params.id}).remove(function(err, data){
      if(err) throw err;
      res.json(data);
    });
  });

}



