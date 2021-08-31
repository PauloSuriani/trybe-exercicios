let palavra = 'suco';
let divide = [];
let inverte;
let junta;

verificaPalindrome(palavra);

function verificaPalindrome(palavra){

  divide = palavra.split("");

  inverte = divide.reverse();

  junta = inverte.join("");

  //return console.log(junta);

  if (palavra === junta){
    return true;
  } else return false;
}


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let teste = [2, 3, 6, 7, 10, 1];

function maiorIndice(numeros){
  let maior;
  for (let i = 0; i < teste.length; i += 1){
    if (numeros[i] > numeros[i+1]){
      maior = numeros[i];
    }
  }
  console.log(maior);
  for (let key in numeros){
    if (numeros[key] === maior){
      return console.log(key);
    }
  }
}


maiorIndice(teste);


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let teste1 = [2, 4, 6, 7, 10, 0, -3];

function menorIndice(numeros){
  let menor = teste[0];
  for (let i = 0; i < teste.length; i += 1){
    if (numeros[i] < menor){
      menor = numeros[i];
    }
  }
  console.log(menor);
  for (let key in numeros){

    if (numeros[key] === menor){
      return console.log(key);
    }
  }
}

menorIndice(teste1);


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(nomes){
  let tamanhoNome = nomes[0].length;
  let maiorNomeAtual = nomes[0];
  for (let i = 0; i < nomes.length; i += 1){
    if (nomes[i].length > tamanhoNome ){
      tamanhoNome = nomes[i].length;
      maiorNomeAtual = nomes[i];
    }
  }
  return (console.log(maiorNomeAtual));
  
}

maiorNome(nomes);


// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

let numerosArray = [2, 3, 2, 5, 8, 2, 3];

let nro = {
  numero,
  repeticoes
};

function maisRepete(numeros){

  for (let i = 0; i < numeros.length; i += 1){
    let count = -1;
    for (let y = 0; y < numeros.length; y +=1){

      if (numeros [i] === numeros[y]){
        count += 1;

      }
    }
    nro.numero = numeros[i];
    nro.repeticoes = count;
  }

  console.table(nro);

  // let maior;
  // for (let key in nro){
  //   if (numeros[i] > numeros[i+1]){
  //     maior = numeros[i];
  //   }
  // }


}

maisRepete(numerosArray);
