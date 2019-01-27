var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://mongodb:27017/test', {useNewUrlParser: true});
// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//   console.log('open connect mongodb');
// });

app.post('/user', function (req, res) {

  let db = require("./db");
  let userName = req.body.nome;
  let userEmail = req.body.email;

  let Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  let user = new Users({ nome: userName, email: userEmail });
  user.save(function (err, data) {
      if (err) {
          console.log("Error! " + err.message);
          return err;
      }
      else {
          console.log("Post saved user");          
          res.status(201).send( {
            id: data._id,
            nome: userName,
            email: userEmail
          });
      }
  });
});

app.get('/user', function(req, res) {
  var db = require("./db");
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Users.find({}).lean().exec(
     function (e, docs) {
        res.send(docs);
  });
});

app.get('/', function (req, res) {
  res.send('Hello World! ' + process.env.NODE_ENV );
}); 



app.listen(3000, function () {  
  console.log('env NODE_ENV ' + process.env.NODE_ENV );
  console.log('Example app listening on port 3000!');
});