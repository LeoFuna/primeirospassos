const number = 101;
let cont = 1;

for ( let index = 2; index <= number; index += 1) {
 
  if ( number % index === 0 ) {
    cont += 1;
  }

}
if (cont > 2) {
  console.log('Número ' + number +  ' não é primo!');
}
else {
  console.log('Número ' + number + ' é primo!');
}