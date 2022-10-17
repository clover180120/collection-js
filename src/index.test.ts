import { test, expect } from 'vitest';
import { collect } from './index';

test('map should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .map((v: number) => v * 2)
    .toArray();
  const expected = [2, 4, 6, 8, 10];

  expect(actual).toStrictEqual(expected);
});

test('every should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .every((v: number) => v > 5);
  const expected = false;

  expect(actual).toStrictEqual(expected);
});

test('filter should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .filter((v: number) => v > 2)
    .toArray();
  const expected = [3, 4, 5];

  expect(actual).toStrictEqual(expected);
});

test('some should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .some((v: number) => v > 2);
  const expected = true;

  expect(actual).toStrictEqual(expected);
});

test('find should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .find((v: number) => v > 2);
  const expected = 3;

  expect(actual).toStrictEqual(expected);
});

test('reject should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .reject((v: number) => v > 2)
    .toArray();
  const expected = [1, 2];

  expect(actual).toStrictEqual(expected);
});

test('forEach should work', () => {
  const actual: Object = {};
  const arr = [1, 2, 3, 4, 5];
  collect(arr).forEach((v: any) => actual[v as keyof Object] = v);
  const expected = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  };

  expect(actual).toStrictEqual(expected);
});

test('reduce should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .reduce((acc: any, v: number) => acc += v, 100);
  const expected = 115;

  expect(actual).toStrictEqual(expected);
});

test('reduce should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .reduce((acc: any, v: number) => acc += v);
  const expected = 15;

  expect(actual).toStrictEqual(expected);
});

test('size should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .size();
  const expected = 5;

  expect(actual).toStrictEqual(expected);
});

test('nth should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .nth(2);
  const expected = 3;

  expect(actual).toStrictEqual(expected);
});

test('includes should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .includes((v: number) => v > 2);
  const expected = true;

  expect(actual).toStrictEqual(expected);
});