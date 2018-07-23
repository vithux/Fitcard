express = require("express");
var app = express();

module.exports = function() {
  app.use(express.static("C:/Users/vitor/Desktop/FitCard"));
  return app;
}
