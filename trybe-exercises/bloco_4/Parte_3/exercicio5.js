const n = 7;

let middlePoint = Math.ceil(n/2);

for (let indexOut = 0; indexOut < middlePoint ; indexOut += 1 ) {
  let mainString = '';

  for ( let index = 1; index <= n ; index += 1) {

    if (index === middlePoint + indexOut || index === middlePoint - indexOut ) {
      mainString += '*';
    }
    else if (indexOut === middlePoint - 1 ) {
      mainString += '*'
    }
    else {
    mainString += ' ';
    }
  
  }
  console.log(mainString);
}