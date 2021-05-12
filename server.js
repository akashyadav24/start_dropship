// Require express and mongoose
var mongoose = require('mongoose');
var express = require('express');

var app = express();


//connecting with database
mongoose.connect('mongodb://localhost:27017/project', {useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,});

// get reference to database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connection Successful!"); 
});


  var UserSchema= mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    Contact: String,
    username: String,
    password: String
  });




  var User = mongoose.model('users', UserSchema, 'users');




app.get('/user', function (req, res) {
  User.find({}, function(err, subjects) {
    if (err) throw err;
    console.log(User);
    });
})

app.post('/User', function(req,res){
    var arr= new User({
      Firstname: "akash",
    Lastname: "yadav",
    Email: "akashyadav24@gmail.com",
    Contact: "8192909306",
    username: "xyz",
    password: "xyz"
    })
   arr.save();
})

app.get('/user/id', function(req,res){
  const ans=Collection.find({"username" : "xyz"});

  ans.then(function(result) {
    console.log(result);
  })

  Collection.updateOne({}, { "Firstname" : "abcd" });

  var myquery = { "username" : "xyz" };

  Collectiono.deleteMany( myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });

})

// On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});


// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(5000, function () {
    console.log('Example app listening on port .' + '5000');
});
