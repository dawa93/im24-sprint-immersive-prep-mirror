function test3() {
  // TODO: 여기에 코드를 작성합니다.
 let count= [];
 //리턴 함수 구역
 return function fibonacci(){
   let result = 0;
   if(count.length === 0){
     count.push(0);
     return 0
    }
   else if(count.length === 1){
     count.push(1);
     return 1
    }
   else if(count.length === 2){
     count.push(1);
     return 1

    }
   else{
       let addNum = count[count.length -2] + count[count.length -1];
       count.push(addNum);
    }
    
   result = count[count.length-1];
   
   return result
 }

//테스트6 끝나는 곳
}
