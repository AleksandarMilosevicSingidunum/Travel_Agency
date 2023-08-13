var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const userModel = require('../models/users.model');

/* GET all users. */
router.get('/list', function(req, res, next) {
 
  userModel.find(function(err,usersListResponse)
  {
    if(err)
    {
      res.send({status: 500, message: 'Unable to find destination!'});
    }else{
      const recordCount = usersListResponse.length; 
      res.send({status: 200,recordCount:recordCount ,results: usersListResponse});
    }
  })

});

/* POST create new destination. */
router.post('/add', async(req, res)=> {

  let emailAddress = req.body.emailAddress;
  let password = req.body.password;

  let userObj = new userModel({
    emailAddress: emailAddress,
    password: password
  })
  userObj.save(function(err,userObj)
  {
    if(err)
    {
      res.send({status: 200, message: 'Able to add user!',userDetails: userObj});
    }else{
      res.send({status: 500, message: 'Unable to add user!'});
    }
  })
   
});
/* POST Check if user Exist. */
router.post('/login', async(req, res)=> {

  let emailAddress = req.body.emailAddress;
  let password = req.body.password;

  userModel.findOne({emailAddress:emailAddress,password:password},function(err,userResponse)
  {
    if(err||!userResponse)
    {
      res.send({status: 500, message: 'User dont exist'});
    }else{
      res.send({status: 200, message: 'User Exist!'});
    }
  })
   
});
/* UPDATE update destination. */
router.put('/update', function(req, res, next) {

  const userid = req.body.userid;
  let emailAddress = req.body.emailAddress;
  let password = req.body.password;

  let userObj = {
    emailAddress:emailAddress,
    password:password,
  }

  userModel.findByIdAndUpdate(userid,userObj,function(err,userObj)
  {
    if(err)
    {
      res.send({status: 500, message: 'Unable to update user!'});
    }else{
      res.send({status: 200,results: userResponse});
    }
  })
  
});

/* DELETE delete destination. */
router.delete('/delete', function(req, res, next) {
  const userid = req.query.userid;

  userModel.findByIdAndDelete(userid,function(err,userResponse)
  {
    if(err)
    {
      res.send({status: 500, message: 'Unable to delete destination!'});
    }else{
      res.send({status: 200,message: 'Destination deleted succesfully',results: userResponse});
    }
  })
});

/* GET one destination(search). */
router.get('/search', function(req, res, next) {
  res.send('respond with a resource');
});

/*GET details of a specific destination*/
router.get('/check', function(req, res, next) {
  
  let emailAddress = req.query.emailAddress;

  userModel.findOne({emailAddress:emailAddress},function(err,userResponse )
  {
    if(err)
    {
      res.send({status: 500, message: 'Unable to find user!'});
    }else{
      res.send({status: 200,results: userResponse});
    }
  })

});


module.exports = router;
