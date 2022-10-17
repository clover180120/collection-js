const reduce = (items: Array<any>, callable: Function, init?: any) => {
  var accumulator = (init === undefined) ? items[0] : init;
  var startIdx = (init === undefined) ? 1 : 0;
  for (let i = startIdx; i < items.length; i++) {
    accumulator = callable(accumulator, items[i]);
  }
  return accumulator;
};

export default reduce;
