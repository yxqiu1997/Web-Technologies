var express = require('express');
var router = express.Router();
var sql = require("sqlite3");


/* GET home page. */
router.get('/', function(req, res, next) {
	// var data={
	// 	code:0,
	// 	data:{name:'aaa',pwd:'123'},
	// 	isSuccess:true,
	// 	msg:"请求成功"
	// }
	// res.json(data);
	var db = new sql.Database("data.db");
	db.all("select * from tv", show);
	function show(err, rows) {
		if (err) throw err;
		// console.log(rows);
		res.json(rows);
	}
});

module.exports = router;
// "use strict";
// var sql = require("sqlite3");
// var db = new sql.Database("data.db");
// db.all("select * from tv", show);
// function show(err, rows) {
//     if (err) throw err;
//     console.log(rows);
// }


// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('data.db');

// db.all("SELECT * FROM tv", function(error, rows) {
//     console.log("77777777777777777777");
//     console.log(rows);
// }); 

// var express = require('express');
// var router = express.Router();
// /* GET home page. */
// router.get('/', function(req, res, next) {
// 	var data={
// 		code:0,
// 		data:{name:'aaa',pwd:'123'},
// 		isSuccess:true,
// 		msg:"请求成功"
// 	}
// 	res.json(data);
// });

// module.exports = router;