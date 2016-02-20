var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.query);
  res.render('index', { title: "Innovators 2016 utilities: LED Cube Challenge" });
});
router.get('/simulator', function(req, res, next) {
	console.log(req.query);
  	res.render('simulator');
});

router.get('/patternRequest', function(req, res, next) {
	console.log(req.query);
  	res.render('patternRequest');
});

router.post('/request/pattern', function (req, res, next) {
    io.emit('request_pattern', req.body);

	res.send("success");
});

module.exports = router;
