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
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . 
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .
//  Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

