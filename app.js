var express = require('express');
var app = express();

app.use(express.static("C:/Users/vitor/Desktop/FitCard"));

app.get('/',function (req,res) {
  res.sendFile("index.html");
});

app.listen(3000,function() {
  console.log("servidor rodando");
});
