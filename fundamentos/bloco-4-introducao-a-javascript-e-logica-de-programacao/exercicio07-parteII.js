
// 7 - Crie uma função que receba uma string word e outra string ending . 
//Verifique se a string ending é o final da string word . 
//Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

let word= 'trybe';
let ending = 'be';

verificaFimPalavra(word, ending);
function verificaFimPalavra(word, ending){

  let divideWord = word.split(ending);
  if (divideWord[divideWord.length-1] === ''){
    console.log("true");
  } else console.log("false");

}