var deletaBanco = require("C:/Users/vitor/Desktop/FitCard/model/deletaBanco");


module.exports = function(app) {
  app.get('/deletaEmpresa',function (req,res) {
    res.sendFile("C:/Users/vitor/Desktop/FitCard/views/deletaEmpresa.html");
  });


  app.post('/deletaEmpresa/post', function (req,res){
    var empresa = req.body;
    deletaBanco(empresa);
    res.redirect('/');
  });

}
