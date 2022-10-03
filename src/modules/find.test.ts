import { test, expect } from 'vitest';
import { find } from './index';

test('find should work', () => {
  const actual = find([1, 2, 3, 4, 5], (v: number) => v > 2);
  const expected = 3;

  expect(actual).toStrictEqual(expected);
});

test('cannot find result', () => {
  const actual = find([1, 2, 3, 4, 5], (v: number) => v > 6);
  const expected = undefined;

  expect(actual).toStrictEqual(expected);
});