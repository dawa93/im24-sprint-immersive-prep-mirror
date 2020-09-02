// function test2(json, id) {
//   // TODO
// }

function test7(json, id) {
  // TODO: 여기에 코드를 작성합니다.

  let result = [];
  for (let obj of arr) {
    if (obj["id"] === id) {
      result = obj;
      return result;
    } else if (obj.hasOwnProperty("children")) {
      result = test7(obj["children"], id);
      result;
      if (result !== null) {
        return result;
      }
    }
  }

  return null;
}
