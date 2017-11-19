const express = require('express');
const router = express.Router();
const Job = require('../models/job.js');

router.get('/jobs', function(req, res){ 
  
  Job.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);      
  });
  
});

router.get('/jobs/:id', function(req, res){ 
  
  Job.find({id:req.params.id}, (err, data) =>{
    res.json(data);      
  });
  
}); 

router.post('/jobs', function(req,res, next){

  Job.create(req.body).then((data) => {
    res.json(data);
  }).catch(next);
  
});

router.delete('/jobs/:id', function(req, res){
  Job.find({id:req.params.id}).remove(function(err, data){
    if(err) throw err;
    res.json(data);
  });
});

module.exports = router;