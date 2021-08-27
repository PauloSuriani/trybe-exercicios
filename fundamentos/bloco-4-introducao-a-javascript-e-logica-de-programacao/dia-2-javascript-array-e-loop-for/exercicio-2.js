// Para o segundo exercício, some todos os valores 
// contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0; // variável que armazena soma

for (let i = 0; i < numbers.length; i += 1)
  sum += numbers[i];

console.log(sum);