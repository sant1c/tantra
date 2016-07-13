var mysql = require("mysql");
module.exports=databaseConnection;

function databaseConnection(){
	

	var con = mysql.createConnection({
 	 host: "localhost",
  	user: "root",
  	password: "",
  	database:"tantra"
	});

	con.connect(function(err){
	  if(err){
	    console.log('Error connecting to Db');
	    return;
	  }
	  console.log('Connection established');
	});

return con;
	
 };
