var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('hello', {
    msg: 'Hello Node Express World by package'
  });
});

module.exports = router;
