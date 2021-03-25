let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for ( let conteudo of numbers ) {
  console.log(conteudo);
}

let soma = 0

for ( let conteudo2 of numbers ) {
  soma += conteudo2;
}
console.log(soma);

let mediaAritmetica = soma/numbers.length;

if (mediaAritmetica > 20){
  console.log('valor maior que 20');
}
else {
  console.log('valor menos ou igual a 20');
}

console.log(mediaAritmetica);

let controle = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > controle) {
    controle = numbers[index];
  }
}
console.log(controle); // imprime o maior valor dentro do array

//Exercicio 6
controle = 0
for ( let conteudo of numbers) {
  if (conteudo % 2 != 0) {
    controle += 1;
  }
}
if (controle = 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(controle);
}

//