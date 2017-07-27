var express = require('express');
var router = express.Router();
var Ticker = require('../public/javascripts/tickerModel');

var mongoose = require('mongoose'),
    ipAddress = "13.58.5.138",
    connStr = 'mongodb://' + ipAddress + ':27017/vg';

    process.env.rando = Math.ceil(Math.random() * 1000);
    console.log(process.env.rando);

mongoose.connect(connStr, { useMongoClient: true })

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
