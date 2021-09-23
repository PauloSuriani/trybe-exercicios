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

console.log(`Os números ${ordernados} se encontram odernados de forma crescente`); // será necessário alterar essa linha 😉