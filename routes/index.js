var express = require('express');
var db = require('../controller/Connection');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title :"Express"});
});

router.post('/Name', function(req, res, next) {
 // res.render('index', {title :"Express"});
 var userName= req.body.test;
 db(function (err,db)
 {
   collection = db.collection('name');
collection.insert({name:userName});
 });
   res.send('successfull');
});
module.exports = router; 
