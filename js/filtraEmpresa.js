var campoFiltro = document.querySelector("#filtro");

campoFiltro.addEventListener("input", function(){
    var empresas = document.querySelectorAll(".empresa");

    if (this.value.length > 0 ){
      for (var i=0; i < empresas.length; i++){
        var empresa = empresas[i];
        var tdRazaoSocial = empresa.querySelector(".razao-social");
        var razaoSocial = tdRazaoSocial.textContent;
        var expressao = new RegExp(this.value,"i")
        if (expressao.test(razaoSocial)){
          deixaTrVisivel(empresa);
        }else {
          deixaTrInvisivel(empresa);
        }
      }
  }else {
    for (var i=0; i < empresas.length; i++){
      var empresa = empresas[i];
      deixaTrVisivel(empresa);
    }
  }
});

function deixaTrVisivel(tr){
  tr.classList.remove("invisivel");
}

function deixaTrInvisivel(tr){
  tr.classList.add("invisivel");
}
