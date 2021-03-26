const input = 6;
let line = '*';

if (input <=1 ) {
  console.log("Favor informar um número válido!");
} 

else {

  for (let index = 1; index < input; index += 1) {
    line += '*';
  }
  for (let times = 0; times < input; times += 1){
    console.log(line);
  }
}