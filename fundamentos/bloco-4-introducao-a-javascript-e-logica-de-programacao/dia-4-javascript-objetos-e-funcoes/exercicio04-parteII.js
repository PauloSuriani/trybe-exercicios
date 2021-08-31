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