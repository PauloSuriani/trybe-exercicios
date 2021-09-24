// exercício 01 - parte I

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// exercício 02 - parte I
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordernados = oddsAndEvens.sort((oddsAndEvens, ordernados) => oddsAndEvens - ordernados);

console.log(`Os números ${ordernados} se encontram odernados de forma crescente`);

// referências: https://pt.stackoverflow.com/questions/118474/problema-ao-ordenar-um-array-com-sort


// parte II
// exercício 01 - fatorial

const fatorial = (n) => {
  let somas = n * (n - 1);
  n -= 1;
  let aux = n;
  n -= 1;
  for (let i = 1; i < aux; i += 1) {
    somas = somas * (n);
    n -= 1 ;
  }
  return somas;
}
console.log(fatorial(4));

// exercício 02 - biggest word

const longestWord = (frase) => {
  let palavras = frase.split(' ');
  let nroPalavras = palavras.length - 1;
  let maiorPalavra = '';
  for (let i = 0; i < nroPalavras; i += 1) {
    (palavras[i].length > palavras[i+1].length) ? maiorPalavra = palavras[i] : maiorPalavra = palavras[i+1];
  }
  return(maiorPalavra);

}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu

// exercício 03 - contador de cliques

const btnClick = document.getElementById('btn-click');
const contador = document.getElementById('contador');
let clickCount = 0;

window.onload = () => {btnClick.addEventListener('click', () => {
  clickCount += 1;
  contador.innerText = clickCount;
});}

// exercício 04 - 

const skills = ['JavaScript', 'CSS', 'HTML', 'Bootstrap', 'SQL'];

const substitui = (str) => {
  
  let exemplo = 'Tryber x aqui!';
  let novaStr = exemplo.split('');
  for (let i = 0; i < exemplo.length; i += 1) {
    novaStr[i] === 'x' ? novaStr[i] = str : '' ;
  }
  return novaStr.join('');
}

console.log(substitui('PAULÃO'));