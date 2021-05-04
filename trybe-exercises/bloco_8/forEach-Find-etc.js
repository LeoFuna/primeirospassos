const assert = require('assert');

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
//exercicio 1
const isDate = (element) => {
  return element.author.birthYear === 1947;
}

function authorBornIn1947() {
  const born1947 = books.find(isDate);
  return born1947.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');

//exercicio 2
function smallerName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach((element) => {
    const bookName = element.name;
    if (nameBook.length > bookName.length) {
      nameBook = bookName;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');

//exercicio 3

let expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  const theBook = books.find((element) => element.name.length === 26);
  return theBook;
}

assert.deepStrictEqual(getNamedBook(), expectedResult);

//exercicio 4

expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  const orderedArray = books.sort((objeto1, objeto2) => objeto2.releaseYear - objeto1.releaseYear);
  return orderedArray;
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

//exercicio 5

expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((objeto) => objeto.author.birthYear < 2000 && objeto.author.birthYear > 1900);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

//exercicio 6

expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((objeto) => objeto.releaseYear > 1980 && objeto.releaseYear < 1990);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

//exercicio 7

expectedResult = false;

function authorUnique() {
  return books.every((objeto) => {
    let isEqual = 0;
    for (let values of books) {
      if (values.author.birthYear === objeto.author.birthYear) {
        isEqual += 1;
      }
    }
    return isEqual > 1;
  })
}

assert.strictEqual(authorUnique(), expectedResult);
