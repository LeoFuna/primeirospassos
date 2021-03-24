const num1 = 6;
const num2 = 8;
const num3 = "teste";
const confereNum = num1 + num2 + num3;

if (typeof(confereNum) != "number") {
  console.log("Digite um número");
}else {
  if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}