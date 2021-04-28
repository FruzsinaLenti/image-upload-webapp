const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	images: [{
		url: {
			type: String,
			data: Buffer,
			required: false,
			default: 'https://picsum.photos/id/1/200/300'
		},
		name: {
			type: String,
		}
	}
],
});

module.exports = User = mongoose.model("users", UserSchema);
