module.exports = function(app) {
  app.get('/cadastraEmpresa',function (req,res) {
    res.sendFile("C:/Users/vitor/Desktop/FitCard/views/cadastraEmpresa.html");
  });
}
