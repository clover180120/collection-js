import { map, every, filter, some, find, reject, forEach, reduce, includes } from './modules';

class Collection {
  private items;

  constructor(items: Array<any> = []) {
    this.items = items;
  }

  map(callable: Function) {
    this.items = map(this.items, callable);
    return this;
  }

  toArray() {
    return this.items;
  }

  every(callable: Function) {
    return every(this.items, callable);
  }

  filter(callable: Function) {
    this.items = filter(this.items, callable);
    return this;
  }

  some(callable: Function) {
    return some(this.items, callable);
  }

  find(callable: Function) {
    return find(this.items, callable);
  }

  reject(callable: Function) {
    this.items = reject(this.items, callable);
    return this;
  }

  forEach(callable: Function) {
    forEach(this.items, callable);
    return this;
  }

  reduce(callable: Function, init: any = undefined) {
    return reduce(this.items, callable, init);
  }

  size() {
    return this.items.length;
  }

  nth(idx: number) {
    return this.items[idx];
  }

  includes(e: any) {
    return includes(this.items, e);
  }
}

const collect = (items: Array<any>): Collection => new Collection(items);

export {
  collect,
};