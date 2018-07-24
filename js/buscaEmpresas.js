var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/empresasCadastradas");
xhr.send();

xhr.addEventListener("load", function() {
    var resposta = xhr.responseText;
    var empresas = JSON.parse(resposta);
    empresas.forEach(function(empresa){
      adicionaEmpresa(empresa);
    });
});
