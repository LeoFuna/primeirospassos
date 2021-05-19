const { uppercase } = require('./testes-assincronos');

describe('Testa retorno da função Uppercase', () => {
  it('Deve ser uma string totalmente maiúscula', done => { //Atenção ao done()
    uppercase('Olá, como vai você?', (value) => {
      expect(value).toBe('OLÁ, COMO VAI VOCÊ?'); // o Expect vai dentro do callback da função!!
      done(); // Atenção ao done()
    })
  });
});