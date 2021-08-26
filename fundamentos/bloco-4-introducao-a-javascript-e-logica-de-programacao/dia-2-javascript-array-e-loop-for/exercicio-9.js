// Utilizando o array criado no exercício anterior 
//imprima o resultado da divisão de cada um dos elementos por 2

let numbers = [];
let resultado;

for (let i = 0; i < 25; i += 1){
  numbers.push(i+1);
  resultado = numbers[i] / 2;
  console.log(resultado);
}

