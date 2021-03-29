// Exercicio 1
function ehPalindromo(word) {
   let invertWord = '';
   for (let index = (word.length - 1); index >= 0; index -= 1) {
     invertWord += word[index];
   }
   return invertWord === word;
 }

console.log(ehPalindromo('ovo'));

//Exercicio 2

function indexMajor(enterArray) {
  let majorNumber = enterArray[0];
  let majorIndex = 0;
  for (let index = 0; index < enterArray.length ; index += 1) {
    if ( enterArray[index] > majorNumber ) {
      majorNumber = enterArray[index];
      majorIndex = index;
    }
  }
  return majorIndex;
}
console.log(indexMajor([2, 3, 6, 7, 10, 1]));

//Exercicio 3
function indexMinor(enterArray) {
  let minorNumber = enterArray[0];
  let minorIndex = 0;
  for (let index = 0; index < enterArray.length ; index += 1) {
    if ( enterArray[index] < minorNumber ) {
      minorNumber = enterArray[index];
      minorIndex = index;
    }
  }
  return minorIndex;
}
console.log(indexMinor([2, 4, 6, 7, 10, 0, -3]));

//Exercicio 4 
function hugestName(names) {
  let majorName = '';
  for ( let index = 0 ; index < names.length; index += 1) {
    if (names[index].length > majorName.length ) {
      majorName = names[index];
    }
  }
  return majorName;
}
console.log(hugestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//Exercicio 5
function whoRepeatsMore(numbers) {
  
  let contMajor = 0;
  let mostRepeat = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    let cont = 0;
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if ( numbers[index] === numbers[index2]) {
        cont += 1;
      }
    }
    if (cont >= contMajor) {
      contMajor = cont;
      mostRepeat = numbers[index];
    }
  }
  return mostRepeat;
}

console.log(whoRepeatsMore([2, 3, 2, 5, 8, 2, 3]));

//Exercicio 6
function sumToMax(number) {
  let total = 0;
  for (let index = 1; index <= number; index += 1) {
    total += index;
  }
  return total;
}
console.log(sumToMax(5));