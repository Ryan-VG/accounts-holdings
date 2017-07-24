var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TickerSchema = new Schema({
	tickerName: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	tickerPrice: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Tickers', TickerSchema);
