const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

console.log( Object.keys(order.order.pizza));

// Complete a função customerInfo() para que seu retorno seja similar a 
// "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
const customerInfo = (order) => (`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);

console.log(customerInfo(order));

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  let pedido = Object.keys(order.order.pizza);
  let refri = order.order.drinks.coke.type;
  let preco1 = order.order.pizza.marguerita.price;
  let preco2 = order.order.pizza.pepperoni.price;
  let precoRefri = order.order.drinks.coke.price;
  order.payment.total = preco1 + preco2 + precoRefri;
  
  return (`Olá ${order.name}, o total do seu pedido de ${pedido[0]}, ${pedido[1]} e ${refri} é R$${order.payment.total},00.`);

}

console.log(orderModifier(order));




// PARTE II


const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles:
//  o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const turnoLesson2 = (licao) => licao.turno = 'noite';

console.log(turnoLesson2(lesson2));

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const chaves = (objeto) => Object.keys(objeto);

console.log(chaves(lesson3));
console.log((`chaves> ${chaves(lesson3)}`));

// Crie uma função para mostrar o tamanho de um objeto.
const tamanho = (objeto) => Object.keys(objeto).length;

console.log(tamanho(lesson3));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valores = (objeto) => Object.values(objeto);

console.log(valores(lesson3));
console.log((`valores> ${valores(lesson2)}`));


// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .
//  Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign .
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);


// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas

function studentCount(objLesson) {
  let studentSum = 0;
  for (let index = 0; index < Object.keys(objLesson).length; index += 1){
    studentSum += objLesson[Object.keys(objLesson)[index]].numeroEstudantes;
  }
  return studentSum;
}

// console.log(Object.keys(allLessons));
console.log(studentCount(allLessons));


// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

function getValueByNumber(lesson, position) {
  return Object.values(lesson)[position];
}

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// Crie uma função que verifique se o par (chave / valor) existe na função. 
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (lesson, keyName, keyValue) => {
  const names = Object.keys(lesson);
  const values = Object.values(lesson);
  for (let i = 0; i < names.length; i += 1) {
    if(names[i] === keyName && values[i] === keyValue) {
      return true;
    }
  }
  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false


// Bônus
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const mathStudents = (allLessons) => {
  let mathStudents = 0;
  for(let i = 0; i < Object.keys(allLessons).length; i += 1){
    if (allLessons[Object.keys(allLessons)[i]].materia === 'Matemática') {
      mathStudents += allLessons[Object.keys(allLessons)[i]].numeroEstudantes;
    }
  }
  return mathStudents;
}

console.log(mathStudents(allLessons));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora,
// as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: