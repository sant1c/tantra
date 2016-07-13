var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/dashboard', function(req, res, next) {
	console.log("hello");
res.sendfile('./public/views/dashboard/dashboard.html');
});




router.get('/dailyreports', function(req, res, next) {

res.sendfile('./public/views/tables/data.html');
});



router.get('/monthlyreports', function(req, res, next) {

res.sendfile('./public/views/tables/data2.html');
});

router.get('/yearlyreports', function(req, res, next) {

res.sendfile('./public/views/tables/data3.html');
});


module.exports = router;

