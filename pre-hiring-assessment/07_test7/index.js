function test7(array) {
  // TODO

  return array.map(arr => {
    let obj = {};
    arr.reduce((x, y) => (obj[y[0]] = y[1]), {});
    return obj;
  });
}
