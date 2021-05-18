const sum = require('./testes-automatizados-Jest');

describe('Teste função sum', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4,5)).toEqual(9);
  });
});