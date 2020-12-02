import Validator from '../src';

test('Validator constructor1', () => {
  const validator = new Validator('vasya');
  expect(validator.validateUsername()).toBe(true);
});

test('Validator constructor2', () => {
  const validator = new Validator('Вася');
  expect(validator.validateUsername()).toBe(false);
});

test('Validator constructor3', () => {
  const validator = new Validator('vasya555hghghg');
  expect(validator.validateUsername()).toBe(true);
});

test('Validator constructor8', () => {
  const validator = new Validator('vasya5500000005hgh');
  expect(validator.validateUsername()).toBe(false);
});

test('Validator constructor4', () => {
  const validator = new Validator('5vasya');
  expect(validator.validateUsername()).toBe(false);
});

test('Validator constructor5', () => {
  const validator = new Validator('vasya5');
  expect(validator.validateUsername()).toBe(false);
});

test('Validator constructor6', () => {
  const validator = new Validator('-vasya');
  expect(validator.validateUsername()).toBe(false);
});

test('Validator constructor9', () => {
  const validator = new Validator('vasya-');
  expect(validator.validateUsername()).toBe(false);
});
