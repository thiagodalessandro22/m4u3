var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.send('Hola soy la página de contacto')
// });

router.get('/', function(req, res, next) {
    res.render('index')
  });

module.exports = router;
