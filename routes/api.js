const express = require('express');
const router = express.Router();
const Job = require('../models/job.js');

router.get('/jobs', function(req, res, next){ 
  
  Job.find({}).then((data) => {
    res.send(data);      
  }).catch(next);
});

router.get('/jobs/:id', function(req, res, next){ 
  Job.find({id: req.params.id}).then((data) =>{
    res.send(data);     
  }).catch(next);
}); 

router.post('/jobs', function(req,res, next){
  Job.create(req.body).then((data) => {
    res.send(data);
  }).catch(next);
});

router.put('/jobs/:id', function(req,res, next){
  Job.findOneAndUpdate({id: req.params.id},{ $set: req.body}).then((updated) => {
    res.send(updated);
  });
});

router.delete('/jobs/:id', function(req, res, next){
  Job.findByIdAndRemove({id:req.params.id}).then((data) => {
    res.send(data);
  }).catch(next);
});

module.exports = router;