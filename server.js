var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var LocalStrategy = require("passport-local").Strategy;
var port = process.env.EXPRESS_PORT || 8080;
var session = require("express-session");
var passport = require("passport");
var FacebookStrategy = require("passport-facebook").Strategy;
var mongoose = require("mongoose");
var User = require("./api/models/userModel");
var postController = require("./api/controllers/postController");
var userController = require("./api/controllers/userController");
var connect = require("connect");


mongoose.connect("mongodb://localhost/user");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(session({secret: "Halo Master Chief", saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  //input user model (mongoose)
  done(null, user);
});
passport.deserializeUser(function(obj, done){
  //user object (json)
  done(null, obj);
});

passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password"
}, function(username, password, done){
  User.findOne({email: username}).exec().then(function(user){
    console.log(user);
    if (!user) {
      return done(null, false);
    }
    user.comparePassword(password).then(function(isMatch){
      if (!isMatch) {
        return done(null, false);
      }
      return done(null, user);
    });
  });
}));


var isAuthed = function(req, res, next){
  if (!req.isAuthenticated()) {
    return res.status(403).end();
  }
  return next();
};

app.get("/api/logout", function(req, res){
  req.logout();
  res.redirect('/');
});

app.get("/api/posts", isAuthed, postController.list);

app.post("/api/posts", isAuthed, postController.create);

app.put("/api/posts/:id", isAuthed, postController.update);

app.get("/api/profile", isAuthed, userController.profile);

app.post("/api/login", passport.authenticate("local"), function(req, res){
  //if auth was successful, this will happen
  return res.status(200).end();
})

app.post("/api/register", function(req, res){
  //create a user
  var newUser = new User(req.body);
  newUser.save(function(err, user){
    if (err){
      return res.status(500).end(err);
    }
      return res.json(user);        
  })
})

app.listen(port)

// app.listen(port);