// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  let novoArray = [];
  let arrayAux = [];
  const matrixToArray = arrays.reduce((accumulator, currentValue) => {
    accumulator = currentValue.reduce((acc, crr) => {
      acc.push(crr);
      return acc;
    }, arrayAux);
    return accumulator; 
  }, novoArray);
  return matrixToArray;
}

console.log(flatten());