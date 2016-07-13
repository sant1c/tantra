var express = require('express');
var router = express.Router();
var database_con = require('./database_con.js');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });

// insert fields into table tcalculcation
router.post('/', function(req,res){
	
	var post = {
		tuuserid : parseInt(req.body.userid),
		tuusername : req.body.username,
		tcstarttime : req.body.starttime,
		tcendtime : req.body.endtime,
		tcammount : parseInt(req.body.amount)
	};
	database_con().query('INSERT INTO tcalculation SET ?', post, function(err, result) {
 		if (err) throw err;

  		console.log(result.insertId);
	});

});
module.exports = router;