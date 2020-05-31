var express = require('express');
var router = express.Router();
var sql = require('sqlite3');

router.get('/', function(req, res, next) {
    var db = new sql.Database("data.db");
    var ps = db.prepare("INSERT INTO email VALUES (NULL, ?)");
    ps.run(req.query.email);
    ps.finalize();

    res.json("Send successfully");
});

module.exports = router;

