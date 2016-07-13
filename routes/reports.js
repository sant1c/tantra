var express = require('express');
var router = express.Router();

var database_con = require('./database_con.js');



router.post('/daily', function(req,res){
  var total=0;
	database_con().query('SELECT * FROM tcalculation WHERE tcdate=' + '"' + req.body.date +'"', function(err, rows) {
 		if (err) throw err;
    for (var i in rows){
 			total = total + rows[i].tcammount;
 		}	
  		
  var datatotal ={
    "dataRow" : rows,

    "dataTotal" : total
  }  
	
  res.send(datatotal);
  });
});

router.post('/monthly', function(req,res){
    var total=0;
	var date = new Date(req.body.date);
	var month = date.getMonth() + 1;

	database_con().query('SELECT * FROM tcalculation WHERE MONTH(tcdate)=' + '"' + month + '"' , function(err, rows) {
 		if (err) throw err;
 		console.log(rows);
  		for (var i in rows){
  			total = total + rows[i].tcammount;
  		}	
      var datatotal ={
         "dataRow" : rows,

         "dataTotal" : total

   }  
     res.send(datatotal);
  		
	});



});

router.post('/yearly', function(req,res){
  var total=0;
  var date = new Date(req.body.date);
  var year = date.getFullYear();

  console.log(year);
  database_con().query('SELECT * FROM tcalculation WHERE YEAR(tcdate)=' + '"' + year + '"' , function(err, rows) {
    if (err) throw err;
    console.log(rows);
      for (var i in rows){
        total = total + rows[i].tcammount;
      } 
   var datatotal ={
         "dataRow" : rows,

         "dataTotal" : total

   }  
     res.send(datatotal);

  });
});

router.post('/update', function(req,res){
  // console.log(req.body.ammount);
  var post = {
    tuusername : req.body.username,
    tcammount : parseInt(req.body.ammount),
    tcstarttime : req.body.starttime,
    tcendtime : req.body.endtime,
    tccalcid : parseInt(req.body.calcid)
  };
  console.log(post);
  database_con().query('UPDATE tcalculation SET ? WHERE tccalcid = ?', [post,post.tccalcid], function(err, rows) {
    if (err) throw err;
    console.log("updated user");
  //   for (var i in rows){
  //     total = total + rows[i].tcammount;
  //   } 
      
  // var datatotal ={
  //   "dataRow" : rows,

  //   "dataTotal" : total
  // }  
  
  // res.send(datatotal);
  });
});

module.exports = router;