let { createRandomNumber, uppercaseString, returnFirstLetter, concatStrings } = require('./jest-testes-assincr');
jest.mock('./jest-testes-assincr');

it('Testes da função createRandomNumber', () => {
  createRandomNumber = jest.fn().mockReturnValue(10);

  createRandomNumber();
  expect(createRandomNumber).toHaveBeenCalled();
  expect(createRandomNumber()).toBe(10);
  expect(createRandomNumber).toHaveBeenCalledTimes(2);
  createRandomNumber.mockReset();
});

it('testa a funçao create random com alterações de Div', () => {
  createRandomNumber.mockImplementationOnce((a,b) => (a / b));

  expect(createRandomNumber(4,2)).toBe(2);
  expect(createRandomNumber).toHaveBeenCalled();
  expect(createRandomNumber(4,2)).not.toBe(2);
  createRandomNumber.mockReset();
})

it('testa a funçao create random com alterações de Mult', () => {
  createRandomNumber.mockImplementation((a,b,c) => a * b * c);
  createRandomNumber(3,2,1)
  
  expect(createRandomNumber(3,2,1)).toBe(6);
  expect(createRandomNumber).toHaveBeenCalled();
  expect(createRandomNumber(5,2,1)).toBe(10);
  expect(createRandomNumber).toHaveBeenCalledTimes(3);
  
  createRandomNumber.mockReset();

  createRandomNumber.mockImplementation((number) => number * 2);

  expect(createRandomNumber(7)).toBe(14);
});

describe('Testa as funções do Exercicio 4', () => {
  it('verifica o retorno da função uppperCaseString', () => {
    uppercaseString.mockImplementation((string) => string.toLowerCase());

    expect(uppercaseString('Olá, tudo bem?')).toBe('olá, tudo bem?');
    expect(uppercaseString).toHaveBeenCalled();
    uppercaseString.mockRestore();
    
    const funcaoUppercase = jest.spyOn(uppercaseString, 'uppercaseString');
    expect(funcaoUppercase('Olá, tudo bem?')).toBe('OLÁ, TUDO BEM?');
  });
  it('verifica o retorno da função returnFirstLetter', () => {
    returnFirstLetter.mockImplementation((string) => {
      return string[string.length - 1]
    });
    console.log(returnFirstLetter('Leonardo'))
    expect(returnFirstLetter('Leonardo')).toBe('o');
    console.log(returnFirstLetter('Leonardo'))
    expect(returnFirstLetter('Leonardo')).toEqual('L');
  });
  it('verifica o retorno da função concatStrings', () => {
    concatStrings.mockImplementation
  });
});