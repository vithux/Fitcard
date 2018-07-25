var conectaBanco = require('C:/Users/vitor/Desktop/FitCard/model/conectaBanco');


module.exports = function(empresa){
    var connection = conectaBanco();

    var sql = "UPDATE empresas " +
              "SET razaoSocial = '" + empresa.social + "', " +
                   "nomeFantasia = '" + empresa.fantasia +"', " +
                   "email = '" + empresa.email +"', " +
                   "endereco = '" + empresa.endereco +"', " +
                   "cidade = '" + empresa.cidade +"', " +
                   "estado = '" + empresa.estado +"', " +
                   "telefone = '" + empresa.telefone +"', " +
                   "categoria = '" + empresa.categoria +"', " +
                   "status = '" + empresa.status +"', " +
                   "agencia = '" + empresa.agencia +"', " +
                   "conta = '" + empresa.conta +"' " +
              "WHERE cnpj = '" + empresa.cnpj + "';";

    connection.query(sql, function(err,results){
      console.log(err);
    });

    connection.end();

  };
