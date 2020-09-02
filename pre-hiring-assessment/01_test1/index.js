function test1(str) {
  // TODO: 여기에 코드를 작성합니다.
  let base = str.split(' ');
  let result = {};
  if(str.length === 0){
    return {}
  }
  else{
  for(let i = 0; i < base.length; i++){
    if(base[i] === ''){
      base[i] = 0;
    }
    else if(Object.keys(result).indexOf(base[i])=== -1){
      result[base[i]] = 1;
    }
    else if(result[base[i]]>= 1){
      result[base[i]] = result[base[i]] + 1;
    }
   }
   return result
  }
}

test('ask a bunch try a bunch get a bunch');