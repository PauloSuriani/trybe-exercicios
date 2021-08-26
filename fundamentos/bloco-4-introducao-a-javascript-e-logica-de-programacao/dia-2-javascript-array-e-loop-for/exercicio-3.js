// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersSum = 0;

for (let i = 0; i < numbers.length; i += 1)
    numbersSum += numbers[i];

let numbersLength = numbers.length + 1;

let avgResult = 0;

avgResult = numbersSum / numbersLength; // calculo da média: Soma total / quantidade

console.log(avgResult);


