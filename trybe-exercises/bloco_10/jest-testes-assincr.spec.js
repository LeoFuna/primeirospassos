let { createRandomNumber } = require('./jest-testes-assincr');
const { } = require('@jest/globals');
const { TestScheduler } = require('@jest/core');

it('Testes da função createRandomNumber', () => {
  createRandomNumber = jest.fn().mockReturnValue(10);

  createRandomNumber();
  expect(createRandomNumber).toHaveBeenCalled();
  expect(createRandomNumber()).toBe(10);
  expect(createRandomNumber).toHaveBeenCalledTimes(2);
});