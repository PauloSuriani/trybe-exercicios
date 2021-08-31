
// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

let numerosArray = [2, 3, 2, 5, 8, 2, 3];
let maisRepetido;

function maisRepete(numeros){

  let countAnt = 0;
  for (let i = 0; i < numeros.length; i += 1){

    let count = -1;

    for (let y = 0; y < numeros.length; y +=1){

      if (numeros [i] === numeros[y]){
        count += 1;
      }
    }
    if (countAnt < count){
      maisRepetido = numeros[i];
      countAnt = count;
    }
  }
  console.log(maisRepetido);
}

maisRepete(numerosArray);