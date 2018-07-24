module.exports = function(app) {
  app.get('/listaEmpresas',function (req,res) {
    res.sendFile("C:/Users/vitor/Desktop/FitCard/views/listaEmpresas.html");
  });
}
