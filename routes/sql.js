var express = require('express');
var router = express.Router();
var sql = require('sqlite3');

router.get('/', function(req, res, next) {
	var db = new sql.Database("data.db");
	db.all("SELECT * FROM tv", show);
	function show(err, rows) {
		if (err) throw err;
		res.json(rows);
	}
});

module.exports = router;
