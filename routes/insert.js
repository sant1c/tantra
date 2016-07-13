var express = require('express');
var router = express.Router();

var database_con = require('./database_con.js');
var userid=0;

router.post('/', function(req,res){
	
	database_con().query('SELECT * FROM tusers WHERE tuusername=' + '"' + req.body.username + '"',
	function(err,rows, fields){
		if (err) throw err;
		console.log(rows);
		for (var i in rows){
			userid=rows[i].tuuserid;
			// console.log(userid);			
		};

		console.log(userid);
		var post = {
			tuusername : req.body.username,
	    	tcammount : parseInt(req.body.ammount),
	    	tcstarttime : req.body.starttime,
	    	tcendtime : req.body.endtime,
	    	tuuserid : userid,
	    	tcdate : req.body.date
		};
		database_con().query('INSERT INTO tcalculation SET ?', post , function(err, result) {
	 		if (err) throw err;

	 		console.log("inserted");

	  		console.log(result.insertId);
		// });
			
		});
		// console.log(userid);
		// var post = {
		// 	tuusername : req.body.username,
	 //    	tcammount : parseInt(req.body.ammount),
	 //    	tcstarttime : req.body.starttime,
	 //    	tcendtime : req.body.endtime,
	 //    	tuuserid : userid
		// };
		// .query('INSERT INTO tcalculation SET ?', post , function(err, result) {
	 // 		if (err) throw err;

	 // 		console.log("inserted");

	 //  		// console.log(result.insertId);
		// });
	});

});


module.exports = router;