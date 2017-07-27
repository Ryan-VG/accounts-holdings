var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	userName: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	}
});

module.exports = mongoose.model('Users', UserSchema);
