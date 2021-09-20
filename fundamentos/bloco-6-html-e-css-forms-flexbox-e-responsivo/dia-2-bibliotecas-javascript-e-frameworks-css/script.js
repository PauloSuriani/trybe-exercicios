const estados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal",
"Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará",
"Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte",
"Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

function selectEstados() {
  const seletor = document.getElementById('selec-estado');
  for (let i = 0; i < estados.length; i += 1) {
    const elem = document.createElement('option');
    elem.innerText = estados[i];
    elem.value = estados[i];
    seletor.appendChild(elem);
  }

}

selectEstados();

let alerta = '';

const enviar = document.getElementById('buttonSubmit');

const campos = ['nome', 'e-mail', 'cpf', 'endereco', 'cidade', 'selec-estado'];

function consolidaTextoSucesso() {
  let texto = document.getElementById('consolidado');
  for (let i = 0; i < campos.length; i += 1) {
    texto.innerText = texto.innerText + document.getElementById(campos[i]).value;
    texto.innerHTML = texto.innerHTML + '<br>';
  }
  const radiobtn = document.querySelector('input[name="tipo"]:checked').value; 
  //console.log(document.querySelector('#radio-button').tipo.value);
  
  texto.innerText = texto.innerText + radiobtn;
  
}

function consolidaTextoFracasso() {
  let texto = document.getElementById('consolidado');

  texto.innerText = alerta;
}

function realizaVerificacoes(event) {

  event.preventDefault();
 consolidaTextoSucesso();

}

enviar.addEventListener('click', realizaVerificacoes);

window.onload() = document.getElementById('data').DatePickerX.init();

