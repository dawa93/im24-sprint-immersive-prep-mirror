function printRole(user) {
  // Joe Blow를 클릭하면 clerk 이
  // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
  // 이 함수는 수정하지 마십시오.
  console.log(user.role);
}

function test6(arr) {
  //[{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },{ firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' },]
  // TODO: 여기에 코드를 작성합니다.
 
  //몸 틀 만들자.

  let emptyArr = [];
for(let i = 0; i<arr.length; i++){
  let bodyLI  = document.createElement('li');
  let name_row = document.createElement('a');
  let age_row = document.createElement('div');
  name_row.className = 'name';
  age_row.className = 'age';
  name_row.textContent = arr[i]["firstName"] + ' ' + arr[i]["lastName"];
  age_row.textContent = arr[i]['age'];
  bodyLI.append(name_row);
  bodyLI.append(age_row);
 
  document.querySelector('#container').append(bodyLI);
}

 //클릭했을 때, 롤 나오도록 
  function fml(){
    let button = document.querySelectorAll('.name');
    for(let i =0; i<button.length; i++){
      button[i].onclick = function(){
        for(let j = 0 ; j < arr.length; j++){
            let checkname = arr[j]['firstName'] + ' ' + arr[j]['lastName'];
            if(button[i].textContent === checkname){
              return printRole(arr[j]);
            }
        } 
      }
    }
  }
 fml();
}
