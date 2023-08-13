var express = require('express');
const { rawListeners } = require('../models/destinations.model');
var router = express.Router();
var fs = require('fs');
const destinationModel = require('../models/destinations.model');

/* GET all destinations. */
router.get('/list', function(req, res, next) {
 
  destinationModel.find(function(err,destinationListResponse)
  {
    if(err)
    {
      res.send({status: 500, message: 'Unable to find destination!'});
    }else{
      const recordCount = destinationListResponse.length; 
      res.send({status: 200,recordCount:recordCount ,results: destinationListResponse});
    }
  })

});

router.post('/add', function(req, res) {
  let files = req.files;
  let tags = []
  let images = [];
  for(let i = 0;i<files.length;i++)
  {
    let newName = req.body.name + '_' + (i+1)
    let ext = files[i].originalname.substring(files[i].originalname.lastIndexOf('.'),files[i].originalname.length)
    fs.rename(files[i].path,'./public/images/'+newName+ext,(err)=>console.log("Failed to save"))
    images.push('/images/'+newName+ext)
  }
  let name = req.body.name;
  let details = req.body.details;
  let description = req.body.description;
  let price = req.body.price;
  let img1 = images[0];
  let img2 = images[1];
  let img3 = images[2];
  let rating = req.body.rating;
  let tag = req.body.tag;
  tags = tag.split(',')


  let destinationObj = new destinationModel({
    name:name,
    details:details,
    description:description,
    price:price,
    img1:img1,
    img2:img2,
    img3:img3,
    rating:rating,
    tag:tags
  })
  destinationObj.save(function(err,destinationObj)
  {
    if(err)
    {
     res.send({status: 500, message: 'Unable to add Destination!'});
    }else{

     res.send({status: 200, message: 'Able to add Destination!',destinationDetails: destinationObj});
    }
  })
   
});
/* UPDATE update destination. */
router.put('/update', function(req, res, next) {
  let tags = []
  let destinationid = req.body.destinationid;
  let name = req.body.name;
  let details = req.body.details;
  let description = req.body.description;
  let price = req.body.price;
  let rating = req.body.rating;
  let tag = req.body.tag;
  tags = tag.split(',')


  let destinationObj = {
    
    destinationid:destinationid,
    name:name,
    details:details,
    description:description,
    price:price,
    rating:rating,
    tag:tags
  }

  destinationModel.findByIdAndUpdate(destinationid,destinationObj,function(err,destinationResponse)
  {
    if(err)
    {
      res.send({status: 500, message: 'Unable to update destination!'});
    }else{
      res.send({status: 200,results: destinationResponse});
    }
  })
});

/* DELETE delete destination. */
router.delete('/delete', function(req, res, next) {
  const destinationid = req.query.destinationid;

  destinationModel.findByIdAndDelete(destinationid,function(err,destinationResponse)
  {
    if(err)
    {
      res.send({status: 500, message: 'Unable to delete destination!'});
    }else{
      res.send({status: 200,message: 'Destination deleted succesfully',results: destinationResponse});
    }
  })
});

/* GET one destination(tag). */
router.get('/search', function(req, res, next) {
  
  let tag = req.query.tag;
  destinationModel.findOne({tag: tag},function(err,destinationListResponse)
  {
    if(err)
    {
      res.send({status: 500, message: 'Unable to find destination!'});
    }else{
      res.send({status: 200,results: destinationListResponse});
    }
  })

});


/*GET details of a specific destination*/
router.get('/view', function(req, res, next) {
  
  let destinationid = req.query.destinationid;

  destinationModel.findById(destinationid,function(err,destinationResponse)
  {
    if(err)
    {
      res.send({status: 500, message: 'Unable to find destination!'});
    }else{
      res.send({status: 200,results: destinationResponse});
    }
  })

});


module.exports = router;
