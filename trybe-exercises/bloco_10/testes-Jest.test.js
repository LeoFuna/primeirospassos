const {sum, myRemove, myRemoveWithoutCopy} = require('./testes-automatizados-Jest');

describe('Teste função sum', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4,5)).toEqual(9);
  });
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0,0)).toEqual(0);
  });
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {sum(4,'5')}).toThrow();
  });
  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {sum(4,'5')}).toThrow('parameters must be numbers');
  })
});

describe('Testa se a função retorna um array sem o elemento selecionado', () => {
  it('Teste passando parâmetros válidos', () => {
    expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
    expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
  });
  it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    const myArray = [1,2,3,4];
    expect(myRemove(myArray, 3)).not.toEqual(myArray);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const myArray = [1,2,3,4];
    expect(myRemove(myArray, 5)).toEqual(myArray);
  });
});

describe('Teste para a função que retira um numero de um array alterando o original', () => {
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1,2,3,4], 3)).toEqual([1,2,4]);
  });
  it('verifique se o array passado por parâmetro sofreu alterações', () => {
    const myArray = [1,2,3,4];
    expect(myRemoveWithoutCopy(myArray, 3)).toEqual(myArray);
  })
});