import { test, expect } from 'vitest';
import { reduce } from './index';

test('reduce should work', () => {
  const actual = reduce([1, 2, 3, 4, 5], (a: number, v: number) => a + v, 100);
  const expected = 115;

  expect(actual).toStrictEqual(expected);
});

test('reduce should work', () => {
  const actual = reduce([1, 2, 3, 4, 5], (a: number, v: number) => a + v);
  const expected = 15;

  expect(actual).toStrictEqual(expected);
});

test('reduce should work', () => {
  const arr = [['a', 'b'], ['c', 'd'], ['e', 'f']];
  const actualArray = reduce(arr, (accumulator: Array<any>, currentValue: Array<any>) => {
    return accumulator.concat(currentValue);
  }, []);
  const expectedArray = ['a', 'b', 'c', 'd', 'e', 'f'];
  

  expect(actualArray).toStrictEqual(expectedArray);
});