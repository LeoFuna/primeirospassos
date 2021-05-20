let { createRandomNumber } = require('./jest-testes-assincr');
const { } = require('@jest/globals');
const { TestScheduler } = require('@jest/core');
jest.mock('./jest-testes-assincr')

// it('Testes da função createRandomNumber', () => {
//   createRandomNumber = jest.fn().mockReturnValue(10);

//   createRandomNumber();
//   expect(createRandomNumber).toHaveBeenCalled();
//   expect(createRandomNumber()).toBe(10);
//   expect(createRandomNumber).toHaveBeenCalledTimes(2);
// });

it('testa a funçao create random com alterações', () => {
  createRandomNumber.mockImplementationOnce((a,b) => (a / b));

  expect(createRandomNumber(4,2)).toBe(2);
  expect(createRandomNumber).toHaveBeenCalled();
  expect(createRandomNumber(4,2)).not.toBe(2);
})