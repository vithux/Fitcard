var conectaBanco = require('C:/Users/vitor/Desktop/FitCard/infra/conectaBanco');

module.exports = function(app) {
  app.get('/empresasCadastradas',function (req,res) {
    var connection = conectaBanco();
    connection.query('select * from empresas', function(err,results){
      res.send(results);
    });
    connection.end();
  });
}
