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

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  const concatNames = books.reduce((acc, crr, index, array) => {
    if (index === array.length - 1) {
       return `${acc} ${crr.author.name}.`;
    }
    return `${acc} ${crr.author.name},`;
  }, ''); 
  return concatNames;
}

console.log(reduceNames());

// 3 - Calcule a média de idade que as pessoas autoras tinham quando 
// seus respectivos livros foram lançados.

const expectedResult2 = 43;

function averageAge() {
  const ages = books.reduce((acc, book) => {
    return acc + book.releaseYear - book.author.birthYear;
  }, 0);
  return ages / books.length;
}

console.log(averageAge());

// 4 - Encontre o livro com o maior nome.

const expectedResult3 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
}

function longestNamedBook() {
  const maiorNome = books.reduce((acc, book) => {
    if (acc.name.length > book.name.length) {
      return acc;
    }
    return book;
  });
  return maiorNome;
}

console.table(longestNamedBook());

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que 
// aparecem a letra "a" maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let novoNome;
  return names.reduce((accumulator, nome) => {
    novoNome = nome.toLowerCase().split('');
    novoNome.forEach((letra) => letra === 'a' ? accumulator += 1 : '');
    return accumulator;
  }, 0);
}

console.log(containsA());

// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, 
// onde cada objeto terá o formato { name: nome do aluno, average: media das notas } .
//  Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 
//  de alunos , aqui além de reduce será necessário utilizar também a função map .
//   Dica: Você pode acessar o index do array dentro de map ,
//    e você pode ver o objeto esperado na constante expected .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((student, index) => ({
    name: student,
    average: grades[index].reduce((acc, grade) =>  acc + grade, 0) / grades[index].length,
  }));
}

const expected6 = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage());