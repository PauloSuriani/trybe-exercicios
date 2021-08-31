let palavra = 'arara';

console.log(verificaPalindrome(palavra));

function verificaPalindrome(palavra){

  let divide = [];
  let inverte;
  let junta;

  divide = palavra.split("");

  inverte = divide.reverse();

  junta = inverte.join("");

  if (palavra === junta){
    return true;
  } else return false;
}