var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('sendForm', {
    title: 'Extraction of Field Defenition'
  });
});

module.exports = router;
