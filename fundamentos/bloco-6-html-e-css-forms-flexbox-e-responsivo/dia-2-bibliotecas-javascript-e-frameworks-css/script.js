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

//   event.preventDefault();
//  consolidaTextoSucesso();

}

enviar.addEventListener('click', realizaVerificacoes);

window.onload() = document.getElementById('data').DatePickerX.init();

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000
    },
    position: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true,
    }
  },
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
      required: 'O campo de email é obrigatório.',
      email: 'O email digitado não é válido.',
      maxLength: 'O limite é de 50 caracteres.'
    },
    cpf: {
      required: 'O campo de CPF é obrigatório.',
      maxLength: 'O limite é de 11 caracteres.'
    },
    address: {
      required: 'O campo endereço é obrigatório.',
      maxLength: 'O limite é de 200 caracteres.'
    },
    city: {
      required: 'O campo cidade é obrigatório.',
      maxLength: 'O limite é de 28 caracteres.'
    },
    state: {
      required: 'O campo estado é obrigatório.',
    },
    radio: {
      required: 'A escolha de um item é obrigatória.',
    },
    text: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    position: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    description: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.'
    },
    date: {
      required: 'Este campo é obrigatório.',
    }
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  }});