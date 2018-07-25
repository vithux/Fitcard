//var updateBanco = require("C:/Users/vitor/Desktop/FitCard/model/updateBanco");


module.exports = function(app) {
  app.get('/deletaEmpresa',function (req,res) {
    res.sendFile("C:/Users/vitor/Desktop/FitCard/views/deletaEmpresa.html");
  });


  app.post('/deletaEmpresa/post', function (req,res){
    var empresa = req;

     //var elemento = elemento.querySelector(".cnpj").innerHTML;

    //updateBanco(empresa);
    console.log("postouuuu");
    res.redirect('/deletaEmpresa');
  });

}
