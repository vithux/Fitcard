
var data = new Date();
var resultados;

module.exports = function(){
    var conectaBanco = require('C:/Users/vitor/Desktop/FitCard/model/conectaBanco');
    var connection = conectaBanco();

    var sql = "SELECT razaoSocial, " +
                     "nomeFantasia, " +
                     "cnpj, " +
                     "email, " +
                     "endereco, " +
                     "cidade, " +
                     "estado, " +
                     "telefone, " +
                     "data, " +
                     "categoria, " +
                     "status, " +
                     "agencia, " +
                     "conta " +
              "FROM empresas;";

    connection.query(sql, function(err,results){
      resultados = results;
    });

    return resultados;
    connection.end();

  };
