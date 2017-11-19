const errorHandling = function(error, req, res, next){
  console.log(error);
  res.status(422).send({error});
};

module.exports = errorHandling;