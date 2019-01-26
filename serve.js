var express = require('express'); 
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! ' + process.env.NODE_ENV );
}); 

app.listen(3000, function () {  
  console.log('env NODE_ENV ' + process.env.NODE_ENV );
  console.log('Example app listening on port 3000!');
});