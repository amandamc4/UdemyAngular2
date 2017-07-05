var express = require('express');
var router = express.Router();

//only needs to render index so Angular2 takes over routing
router.get('/', function (req, res, next) {    
   res.render('index');
});

module.exports = router;
