var mongoose = require("mongoose");

var schema = mongoose.Schema({
	title: String,
	user: {type: mongoose.Schema.Types.ObjectId, ref: "User", index: true},
	date: Date
});

module.exports = mongoose.model("Post", schema);