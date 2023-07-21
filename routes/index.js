var express = require('express');
var router = express.Router();

const itemList = [
  {'id':1,'title':'Heading 1','description':'This is a description of the work','reference':'References'},
  {'id':2,'title':'Heading 2','description':'This is a description of the work','reference':'References'},
  {'id':3,'title':'Heading 3','description':'This is a description of the work','reference':'References'},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SIT722 DevOps Glossary', 
    subheading: 'Welcome to my website showing a collection of DevOps terms and their brief descriptions.', 
    items: itemList });
});

module.exports = router;
