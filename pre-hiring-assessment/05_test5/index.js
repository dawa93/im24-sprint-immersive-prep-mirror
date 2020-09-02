
function test5(num) {
  // TODO: 여기에 코드를 작성합니다.
  let base = String(num);
  let special = '';
  let result =0;

  if(base[0] === '-'){
    special = base[0] + base[1];
    result = result + Number(special);
    for(let i = 2; i < base.length; i++){
     result = result + Number(base[i]);

  }
  return result
  }
  else{
    let arr = base.split('');
    for(let value of arr){
      result = result + Number(value)
    }
    return result
  }
}
