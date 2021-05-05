//Exercicio 1

const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  const oneArray = arrays.reduce((jointedArray, elements) => {
    elements.forEach(value => {jointedArray.push(value)});
    return jointedArray;
  });
  return oneArray;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

//Exercicio 2

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

function allNames() {
  const namesOfAuthors = books.reduce((completeNames, theBooks) => {
    return completeNames = `${completeNames} ${theBooks.author.name},`;
  }, 'Nomes:');
  return namesOfAuthors.replace(/.$/,".");
}

assert.deepStrictEqual(allNames(), 'Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.');

//Exercicio 3

let expectedResult = 43;

function averageAge() {
  const ageOnRelease = books.map(book => book.releaseYear - book.author.birthYear);
  const averageAgeAuthor= (ageOnRelease.reduce((acc, age) => acc + age)) / ageOnRelease.length;
  return averageAgeAuthor;
}

assert.strictEqual(averageAge(), expectedResult);

//Exercicio 4

expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((majorName, book) => {
    return majorName.name.length > book.name.length ? majorName : book;
  });
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);

//Exercicio 5

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((cont, name) => {
    name.split('').forEach(letter => {
      if (letter === 'a' || letter === 'A') {
        cont += 1;    
      }
    });
    return cont;
  }, 0);
}
assert.deepStrictEqual(containsA(), 20);

//Exercicio 6

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return grades.map((gradesOfGrades, index) => {
    const sumGrades = gradesOfGrades.reduce(((total, grade) => total + grade), 0);
    return {name: students[index], average: (sumGrades)/gradesOfGrades.length};
  })
}

expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
