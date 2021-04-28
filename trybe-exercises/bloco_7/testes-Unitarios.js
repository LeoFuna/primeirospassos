// ------------------- PARTE 1 -------------------------------
//Exercicio 1

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4,'5'), 9);
assert.ok(sum(0,0) === 0);

//Exercicio 2

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

// assert.deepStrictEqual(myRemove([1,2,3,4], 3), [1,2,4]);
// assert.notDeepStrictEqual(myRemove([1,2,3,4], 3), [1,2,3,4]);
assert.deepStrictEqual(myRemove([1,2,3,4], 5), [1,2,3,4]);

//Exercicio 3

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

// assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,4]);
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,3,4]);
let myArray = [1,2,3,4]
assert.deepStrictEqual(myRemoveWithoutCopy(myArray, 5), myArray);

//Exercicio 4

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(6), 'fizz');
assert.strictEqual(myFizzBuzz(10), 'buzz');
assert.ok(myFizzBuzz(19) === 19);
assert.ok(myFizzBuzz('10') === false);

//Exercicio 5

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
assert.deepStrictEqual(obj1, obj3, 'Não são iguais!!');

// ----------------------- PARTE 2 ---------------------------------
//Exercicio 1

const assert = require('assert');
// escreva a função addOne aqui
const addOne = (inputArray) => {
  let newArray = [];
  for (let index in inputArray) {
    newArray.push(inputArray[index] + 1);
  }
  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

//Exercicio 2

const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

const wordLengths = (inputArray) => {
  let arrayOfNumber = [];
  for (let content of words) {
    arrayOfNumber.push(content.length);
  }
  return arrayOfNumber;
};

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

//Exercicio 3

const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = (arrayOfNumber) => {
  let total = 0;
  for (let content of arrayOfNumber) {
    total += content;
  }
  return total;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

//Exercicio 4

const assert = require('assert');
// escreva a função findTheNeedle aqui

const findTheNeedle = (arrayOfWords, word) => {
  let indexOfNeedle
  let error = 0;
  for (let index in arrayOfWords) {
    arrayOfWords[index] === word ? indexOfNeedle = Number(index) : error += 1;
  }
  if (error === arrayOfWords.length) {return -1}
  return indexOfNeedle;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);

//---------------------- PARTE 3 -------------------------------
//Exercicio 1
