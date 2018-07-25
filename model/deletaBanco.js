var conectaBanco = require('C:/Users/vitor/Desktop/FitCard/model/conectaBanco');

module.exports = function(empresa){
    var connection = conectaBanco();
    var sql = "DELETE FROM empresas where cnpj = '" + empresa.cnpj + "';";

    connection.query(sql, function(err,results){
      console.log(err);
    });

    connection.end();
  };
