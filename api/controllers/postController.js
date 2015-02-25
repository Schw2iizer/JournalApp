var Post = require("../models/newPost");

module.exports = {
	list: function(req, res){
		console.log(req.user._id);
		Post.find({user: req.user._id}).exec().then(function(posts){
				res.status(200).json(posts);
		}, function(err){
			res.status(500).json(err);
		});
	},
	create: function(req, res){
		console.log(req.body);
		var date = new Date();
		date = date.toISOString();
		Post({user: req.user._id, title: req.body.title, date: date}).save(function(err, post){
			if (err) {
				return res.status(500).end();
			}
			return res.json(post);
		});
	},
	update: function(req, res){
		Post.update({ _id: req.params.id }, req.body).exec(function(err){
			return res.status(200).end();
		});
	}
};