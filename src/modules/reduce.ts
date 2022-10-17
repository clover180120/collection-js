const reduce = (items: Array<any>, callable: Function, accumulator: any) => {
  for (let i of items) {
    accumulator = callable(accumulator, i);
  }
  return accumulator;
};

export default reduce;
