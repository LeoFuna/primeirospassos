const input = 7;


if (input <=1 ) {
  console.log("Favor informar um número válido!");
} 

else {
  let controler = 1;

  for (let index = 0; index < input; index += 1) {
    let line = '';
    for (let indexGaps = 1; indexGaps <= (input - controler); indexGaps += 1) {
      line += ' ';
    }
    for (let indexAsterisk = 1; indexAsterisk <= controler; indexAsterisk += 1) {
      line += '*';
    }
    controler += 1;
    console.log(line);
  }
}
