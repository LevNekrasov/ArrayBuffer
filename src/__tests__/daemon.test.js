/* eslint-disable linebreak-style */
import Daemon from '../daemon';

test('test deamon 100', () => {
  const lorento = new Daemon('Oleg', 'Daemon', 2);
  lorento.attack = 100;
  lorento.stoned = true;

  const result = 85;

  expect(lorento.attack).toBe(result);
});

test('test deamon 100 without stoned', () => {
  const lorento = new Daemon('Oleg', 'Daemon', 2);
  lorento.attack = 100;
  lorento.stoned = false;

  const result = 90;

  expect(lorento.attack).toBe(result);
});

test('test deamon 200', () => {
  const lorento = new Daemon('Oleg', 'Daemon', 2);
  lorento.attack = 200;
  lorento.stoned = true;

  const result = 175;

  expect(lorento.attack).toBe(result);
});
