var tabela = document.querySelector("table");
var form = document.querySelector(".form");




tabela.addEventListener("click",function(event){
  var alvoEvento = event.target;
  if(alvoEvento.tagName == 'BUTTON'){
     var elemento = event.target.parentNode.parentNode;
      tabela.parentNode.classList.add("invisivel");

     form.classList.remove("form");
     form.querySelector("#social").value = elemento.querySelector(".razao-social").innerHTML;
     form.querySelector("#cnpj").value = elemento.querySelector(".cnpj").innerHTML;

     console.log(elemento.querySelector(".cnpj").innerHTML);

  }
});
