module.exports = function(app) {
  app.get('/',function (req,res) {
    res.sendFile("C:/Users/vitor/Desktop/FitCard/views/index.html");
  });
}
