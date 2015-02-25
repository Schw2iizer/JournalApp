var mongoose = require("mongoose");

var schema = mongoose.Schema({
	title: String,
	type: String,
	Starts_at: {
		new Date();
				},
	ends_at: {
		new Date();
				},
	editable: boolean,
	deletable: boolean,
	user: {type: mongoose.Schema.Types.ObjectId, ref: "User", index: true}
});

module.exports = mongoose.model("Calendar", schema);