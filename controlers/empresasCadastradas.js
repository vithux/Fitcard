var selectBanco = require("C:/Users/vitor/Desktop/FitCard/model/selectBancoDados");

module.exports = function(app) {
  app.get('/empresasCadastradas',function (req,res) {
    res.send(selectBanco());
  });
}
