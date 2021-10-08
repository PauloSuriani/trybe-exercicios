// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  let novoArray = [];
  const matrixToArray = arrays.reduce((accumulator, currentValue, index) => {
    accumulator = accumulator.push.call(this, currentValue);
    return accumulator; 
  }, novoArray);
  return matrixToArray;
}