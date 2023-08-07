/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import Daemon from '../daemon';

test('Daemon', () => {
  expect(() => {
    const result = new Daemon('O', 'Daemon');
  }).toThrow('Неверно передано имя персонажа');
});

test('Daemon', () => {
  expect(() => {
    const result = new Daemon('Oleg', 'Human');
  }).toThrow('Неверно передан тип персонажа');
});
