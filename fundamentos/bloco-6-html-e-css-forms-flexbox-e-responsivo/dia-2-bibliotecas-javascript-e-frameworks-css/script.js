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

function verificaData() {
  const elemData = document.getElementById('data');
  let data = elemData.value;
  let dataFormatada = data.split('/');
  if(dataFormatada.length != 3){
    alerta = 'Formato de data inválido!'
    alert(alerta);
  } else if (parseInt(dataFormatada[0]) >= 1 && parseInt(dataFormatada[0]) <= 31 ){ // dia
    if (parseInt(dataFormatada[1]) >= 1 && parseInt(dataFormatada[1]) <= 12) {      // mês
      if (parseInt(dataFormatada[2]) >= 0){
        alerta = '';
        return true;
      } else {
        alerta = 'O Ano informado é inválido!';
        alert(alerta);
        return false;
      }
    }else {
      alerta = 'O Mês informado é inválido!';
      alert(alerta);
      return false;
    }
  } else {
    alerta = 'O Dia informado é inválido!';
    alert(alerta);
    return false;
  }

}

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
  let ehDataValida = verificaData();
  if (ehDataValida) consolidaTextoSucesso();
  else consolidaTextoFracasso();
}

enviar.addEventListener('click', realizaVerificacoes);
