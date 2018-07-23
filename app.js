var conectaBanco = require('C:/Users/vitor/Desktop/FitCard/infra/conectaBanco');
var app = require('C:/Users/vitor/Desktop/FitCard/config/express')();



require('C:/Users/vitor/Desktop/FitCard/routes/home')(app);


app.get('/bd',function(req,res){

  var connection = conectaBanco();
  connection.query('select * from empresas', function(err,results){
    res.send(results);
  });
  connection.end();

});


app.listen(3000,function() {
  console.log("servidor rodando");
});
