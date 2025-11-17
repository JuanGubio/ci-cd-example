const { suma } = require('../src/index');

test('suma dos números', () => {
  expect(suma(2, 3)).toBe(5);
});
