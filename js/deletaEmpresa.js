var tabela = document.querySelector("table");




tabela.addEventListener("click",function(event){
  var alvoEvento = event.target;
  if(alvoEvento.tagName == 'BUTTON'){
     var elemento = event.target.parentNode.parentNode;
     return elemento.querySelector(".cnpj").innerHTML;
  }
});
