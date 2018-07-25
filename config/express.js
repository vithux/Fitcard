var express = require("express");
var load = require("express-load");
var bodyParser = require("body-parser");


var app = express();

module.exports = function() {

  app.use(express.static("C:/Users/vitor/Desktop/FitCard"));
  app.use(bodyParser.urlencoded());

  load('controlers')
      .into(app);

  return app;
}
