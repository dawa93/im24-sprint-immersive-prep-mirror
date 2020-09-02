// function test4(num) {
//   // TODO
// }

function test4(num) {
  // TODO: 여기에 코드를 작성합니다.

  let numToStr = String(num);
  let arr = numToStr.split("");

  let result = arr.reduce((x, y) => x * y, 1);

  if (result < 10) {
    return result;
  } else {
    return test3(result);
  }

  // let result = 1;
  // for(let i =0; i < numToStr.length; i++){
  //   let arr = numToStr.split('');
  //   result = result * arr[i];

  //   if(arr.length === 1){
  //     return arr[0];
  //   }
  // }
}
