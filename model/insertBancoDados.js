var conectaBanco = require('C:/Users/vitor/Desktop/FitCard/model/conectaBanco');
var data = new Date();

module.exports = function(empresa){
    var connection = conectaBanco();

    var sql = "INSERT INTO empresas VALUES ('" + empresa.social + "', '"
                                               + empresa.fantasia + "', '"
                                               + empresa.cnpj + "', '"
                                               + empresa.email+ "', '"
                                               + empresa.endereco + "', '"
                                               + empresa.cidade + "', '"
                                               + empresa.estado + "', '"
                                               + empresa.telefone + "', '"
                                               + data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getFullYear() + "', '"
                                               + empresa.categoria + "', '"
                                               + empresa.status + "', '"
                                               + empresa.agencia + "', '"
                                               + empresa.conta+ "' );";

    connection.query(sql, function(err,results){
      console.log(err);
    });

    connection.end();
  };
