var express = require('express');
var router = express.Router();
var Ticker = require('../public/javascripts/tickerModel');
var User = require('../public/javascripts/userModel');

var mongoose = require('mongoose'),
    ipAddress = "13.58.5.138",
    connStr = 'mongodb://' + ipAddress + ':27017/vg';

    process.env.rando = Math.ceil(Math.random() * 1000);

mongoose.connect(connStr, { useMongoClient: true })

router.get('/rando', function(req, res, next) {
    res.json(process.env.rando);
});

router.get('/users', function(req, res, next) {
    var exists = User.find({});

	exists.exec(function(err, users) {
        if (err) {
            throw err;
		} else if (users) {
			res.json(users);
		} else {
			res.json({
				"error": "no users found"
			});
		}
    });
});

router.get('/ticker', function(req, res, next) {
    var exists = Ticker.find({});

	exists.exec(function(err, tickers) {
        if (err) {
            throw err;
		} else if (tickers) {
			res.json(tickers);
		} else {
			res.json({
				"error": "no tickers found"
			});
		}
    });
});

module.exports = router;
