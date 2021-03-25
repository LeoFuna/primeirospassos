const num1 = 5;
const num2 = 7;
const num3 = 3;
const confereNum = num1 + num2 + num3;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  console.log(true);
}else if (typeof(confereNum) != "number") {
  console.log("Digite um número");
}
else {
  console.log(false);
}