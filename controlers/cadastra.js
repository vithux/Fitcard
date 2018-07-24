var insertBanco = require("C:/Users/vitor/Desktop/FitCard/model/insertBancodados");

module.exports = function(app) {
  app.get('/cadastraEmpresa',function (req,res) {
    res.sendFile("C:/Users/vitor/Desktop/FitCard/views/cadastraEmpresa.html");
  });

  app.post('/cadastraEmpresa/post', function (req,res){
    var empresa = req.body;
    insertBanco(empresa);
    res.redirect('/cadastraEmpresa');
  });

}
