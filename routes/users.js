var express = require('express');
var router = express.Router();
var database_con = require('./database_con.js');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });


// login user authentication
router.post('/authentication', function(req,res){
	var user_check=req.body;
	database_con().query('SELECT * FROM tusers WHERE tuusername =' + '"' + user_check.username +'"' + 'AND tupassword =' + '"' + user_check.password +'"'  , function(err, rows, fields){
		console.log("hello")
		console.log(rows);
		if(!err){
			if(rows.length !==0)
				res.send("validuser");
			else
				res.send("invaliduser");
		}
	})
});

//insert username and passowrd to table tusers
router.post('/insert-user', function(req,res){
	var post = {
		tuusername : req.body.username,
		tupassword : req.body.password
	};
	database_con().query('INSERT INTO tusers SET ?', post , function(err, result) {
 		if (err) throw err;

  		console.log(result.insertId);
	});

});
module.exports = router;
