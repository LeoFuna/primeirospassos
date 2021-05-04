const assert = require('assert');
//Exercicio 1
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

let expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  return books.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`);
}

assert.deepStrictEqual(formatedBookNames(), expectedResult);

//Exercicio 2

expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  const ageOnRelease = books.map((livro) => {
    const nomeAutor = livro.author.name;
    const idade = livro.releaseYear - livro.author.birthYear;
    return {age: idade, author: nomeAutor};
  })
  return ageOnRelease.sort((book1, book2) => book1.age - book2.age);
}

assert.deepStrictEqual(nameAndAge(), expectedResult);

//Exercicio 3

expectedResult = [
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
 ];
 
 function fantasyOrScienceFiction() {
   const selectedBooks = books.filter(book => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
   return selectedBooks;
 }
 
 assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);

 //Exercício 4

expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooks() {
  const plus60Book = books.filter(book => (2021 - book.releaseYear) > 60);
  return plus60Book.sort((book1, book2) => book1.releaseYear - book2.releaseYear);
}

assert.deepStrictEqual(oldBooks(), expectedResult);

//Exercicio 5

expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const booksGenreSelected = books.filter(book => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

  const arrayOfAuthors = [];
  booksGenreSelected.forEach(book => {
    arrayOfAuthors.push(book.author.name);
  });
  return arrayOfAuthors.sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);

//Exercicio 6

expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooksEx6() {
  const plus60 = books.filter(book => (2021 - book.releaseYear) > 60);
  const oldBooksNames = [];
  plus60.forEach((book) => {
    oldBooksNames.push(book.name);
  });
  return oldBooksNames;
}

assert.deepStrictEqual(oldBooksEx6(), expectedResult);

//Exercicio 7

expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  const authorSelected = books.find(book => {
    const splitedName = book.author.name.split(' ');
    return splitedName[0][1] === '.' && splitedName[1][1] === '.' && splitedName[2][1];
  })
  return authorSelected.name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
