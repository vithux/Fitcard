//ação do botão adicionar
var botaoAdicionar = document.querySelector("#adicionar-empresa");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  //pega as informações digitadas no form e adiciona ao objeto empresa
  var form = document.querySelector("#form-adiciona");
  var empresa = obtemEmpresaDoForm(form);

  var validaErros = empresaValida(empresa);
  if (validaErros.length > 0){
    exibeMensagemErro(validaErros);
    return 0;
  }

  adicionaEmpresa(empresa);
  form.reset();
  document.querySelector("#erro").innerHTML = "";
});

//recebe uma empresa e cria o HTML para adicionar em uma tabela
function montaTr(empresa){
    var empresaTr = document.createElement("tr");
    empresaTr.classList.add("empresa");

    empresaTr.appendChild(montaTd(empresa.razaoSocial,"razao-social"));
    empresaTr.appendChild(montaTd(empresa.nomeFantasia,"nome-fantasia"));
    empresaTr.appendChild(montaTd(empresa.cnpj,"cnpj"));
    empresaTr.appendChild(montaTd(empresa.email,"email"));
    empresaTr.appendChild(montaTd(empresa.endereco,"endereco"));
    empresaTr.appendChild(montaTd(empresa.cidade,"cidade"));
    empresaTr.appendChild(montaTd(empresa.estado,"estado"));
    empresaTr.appendChild(montaTd(empresa.telefone,"telefone"));
    empresaTr.appendChild(montaTd(empresa.data,"data"));
    empresaTr.appendChild(montaTd(empresa.categoria,"categoria"));
    empresaTr.appendChild(montaTd(empresa.status,"status"));
    empresaTr.appendChild(montaTd(empresa.agencia,"agencia"));
    empresaTr.appendChild(montaTd(empresa.conta,"conta"));
    empresaTr.appendChild(adicionaBotao());
    return empresaTr;
}

function adicionaBotao(){
  var td = document.createElement("td");
  var botao = document.createElement("button");
  botao.textContent = "Delete";
  botao.classList.add("botao-delete");
  td.appendChild(botao);
  return td;
}

//monta e popula a Td
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

//pega os dados do formulário e passa para o objeto empresa
function obtemEmpresaDoForm(form){
  var data = new Date();
  var empresa = {
    razaoSocial: form.social.value,
    nomeFantasia: form.fantasia.value,
     cnpj: form.cnpj.value,
     email: form.email.value,
     endereco: form.endereco.value,
     cidade: form.cidade.value,
     estado: form.estado.value,
     telefone: form.telefone.value,
     data: data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getFullYear(),
     categoria: form.categoria.value,
     status: form.status.value,
     agencia: form.agencia.value,
     conta: form.conta.value
  }
  return empresa;
}

function empresaValida(empresa){
  var mensagemErro = [];

  if (empresa.razaoSocial.length == 0 || empresa.cnpj.length == 0) {
    mensagemErro.push("Razão Social e CNPJ são campos obrigatórios!");
  }

  if(empresa.categoria == "supermercado" && empresa.telefone.length == 0){
    mensagemErro.push("Para Supermercado o Telefone deve ser preenchido!");
  }

  return mensagemErro;
}


function exibeMensagemErro(erros){
  var ul = document.querySelector("#erro");
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}

function adicionaEmpresa(empresa){
  var empresaTr = montaTr(empresa);
  var tabela = document.querySelector("#tabela-empresas");
  tabela.appendChild(empresaTr);
}
