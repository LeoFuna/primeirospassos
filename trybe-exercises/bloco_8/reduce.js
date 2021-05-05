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