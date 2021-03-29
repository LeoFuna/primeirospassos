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