var express = require("express");
var app     = express();
var path    = require("path");

app.use("/public", 
express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/info',function(req,res){
  res.sendFile(path.join(__dirname+'/info.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000);
//app.listen(process.env.port|| 1337, '127.0.0.1');
console.log("Running at Port 3000");