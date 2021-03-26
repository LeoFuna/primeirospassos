const input = 5;
let line = '';

if (input <=1 ) {
  console.log("Favor informar um número válido!");
} 

else {

  for (let index = 0; index < input; index += 1) {
    line += '*';
    console.log(line);
  } 
}