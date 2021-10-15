// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...numbers) => numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum(8, 14, 6, 77, 11));