//Exercício 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} ótimo, fui utilizada no escopo !"`);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
};

testingScope(true);

//Exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaArray = (arrayDeNumeros) => {
  arrayDeNumeros.sort((a, b) => a - b);
  console.log(`Os números ${arrayDeNumeros} se encontram ordenados de forma crescente!`);
}

ordenaArray(oddsAndEvens);

// -- PARTE 2 --
//Exercicio 1

const returnFatorial = (numero) => {
  let total = 1;
  for(let index = numero; index > 0; index -= 1) {
    total *= index;
  }
  console.log(total);
}
returnFatorial(4);

//Exercicio 2

const longestWord = (frase) => {
  const palavras = frase.split(' ');
  let maior = palavras[0];
  for (let index = 1; index < palavras.length; index += 1) {
    maior.length < palavras[index].length ? maior = palavras[index] : maior = maior;
  }
  console.log(maior);
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

//Exercicio 3


//Exercicio 4

const changeX = (palavra) => {
  const aSubstituir = 'Tryber x aqui!';
  const newPalavra = aSubstituir.replace(/x/i, palavra);
  return newPalavra;
}

const skills = ['musica', 'finanças', 'js', 'html', 'css'];

const apresentation = (funcao) => {
  console.log(`${funcao} Minhas cinco principais habilidades são:
  ${skills.sort()}`);
}

apresentation(changeX('Leonardo'));
