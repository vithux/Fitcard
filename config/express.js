var express = require("express");
var load = require("express-load");
var app = express();

module.exports = function() {
  app.use(express.static("C:/Users/vitor/Desktop/FitCard"));

  load('controlers')
      .then('infra')
      .into(app);

  return app;
}
