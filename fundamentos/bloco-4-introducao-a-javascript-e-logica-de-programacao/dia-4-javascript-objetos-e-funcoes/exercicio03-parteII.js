
// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let teste1 = [2, 4, 6, 7, 10, 0, -3];

function menorIndice(numeros){
  let menor = teste[0];
  for (let i = 0; i < teste.length; i += 1){
    if (numeros[i] < menor){
      menor = numeros[i];
    }
  }
  console.log(menor);
  for (let key in numeros){

    if (numeros[key] === menor){
      return console.log(key);
    }
  }
}

menorIndice(teste1);