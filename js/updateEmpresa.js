var tabela = document.querySelector("table");
var form = document.querySelector(".form");



tabela.addEventListener("click",function(event){
  var alvoEvento = event.target;
  if(alvoEvento.tagName == 'BUTTON'){
     var elemento = event.target.parentNode.parentNode;
      tabela.parentNode.classList.add("invisivel");
     form.classList.remove("form");

     preencheForm(montaEmpresa(elemento));
  }
});

function preencheForm(empresa){
  form.querySelector("#social").value = empresa.razaoSocial;
  form.querySelector("#fantasia").value = empresa.nomeFantasia;
  form.querySelector("#cnpj").value = empresa.cnpj;
  form.querySelector("#email").value = empresa.email;
  form.querySelector("#endereco").value = empresa.endereco;
  form.querySelector("#cidade").value = empresa.cidade;
  form.querySelector("#estado").value = empresa.estado;
  form.querySelector("#telefone").value = empresa.telefone;
  form.querySelector("#agencia").value = empresa.agencia;
  form.querySelector("#conta").value = empresa.conta;
  form.querySelector("#categoria").value = empresa.categoria;
  form.querySelector("#status").value = empresa.status;
}

function montaEmpresa(elemento){
  var empresa = {
    razaoSocial: elemento.querySelector(".razao-social").innerHTML,
    nomeFantasia: elemento.querySelector(".nome-fantasia").innerHTML,
     cnpj: elemento.querySelector(".cnpj").innerHTML,
     email: elemento.querySelector(".email").innerHTML,
     endereco: elemento.querySelector(".endereco").innerHTML,
     cidade: elemento.querySelector(".cidade").innerHTML,
     estado: elemento.querySelector(".estado").innerHTML,
     telefone: elemento.querySelector(".telefone").innerHTML,
     data: elemento.querySelector(".data").innerHTML,
     categoria: elemento.querySelector(".categoria").innerHTML,
     status: elemento.querySelector(".status").innerHTML,
     agencia: elemento.querySelector(".agencia").innerHTML,
     conta: elemento.querySelector(".conta").innerHTML
  }
  return empresa;
}
