// function test2(json, id) {
//   // TODO
// }

function test2(json, id) {
  // TODO: 여기에 코드를 작성합니다.

  let result = [];
  for (let obj of json) {
    if (obj.id === id) {
      result = obj;
      return result;
    } else if (obj.hasOwnProperty("children")) {
      result = test2(obj["children"], id);
      result;
      if (result !== null) {
        return result;
      }
    }
  }

  return null;
}
