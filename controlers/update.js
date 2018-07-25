var updateBanco = require("C:/Users/vitor/Desktop/FitCard/model/updateBanco");

module.exports = function(app) {
  app.get('/updateEmpresa',function (req,res) {
    res.sendFile("C:/Users/vitor/Desktop/FitCard/views/updateEmpresa.html");
  });


  app.post('/updateEmpresa/post', function (req,res){
    var empresa = req.body;
    updateBanco(empresa);
    res.redirect('/');
  });

}
