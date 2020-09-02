function test7(array) {
  // TODO

  return array.map(function(arr) {
    let obj = {};
    arr.reduce(function(x, y) {
      obj[y[0]] = y[1];
    }, {});
    return obj;
  });
}
