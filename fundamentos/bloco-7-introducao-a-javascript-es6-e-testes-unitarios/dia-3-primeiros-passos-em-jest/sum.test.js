// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")


const sum = require('./sum.js');

describe ('Verify function Sum', () => {
  it ('test if sum(4, 5) is 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it ('test if sum(0, 0) is 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it ('test if throws error when string parameters are sent', () => {
    expect(() => sum(4, '5')).toThrowError('');
  });
  it ('test if throws a message error when string parameters are sent', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});