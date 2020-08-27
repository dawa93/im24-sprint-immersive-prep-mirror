# test7

## 문제

사원들의 정보를 배열로 입력 받으면 다른 형태로 정보를 변형해서 리턴해야 합니다.

## 입력

### 인자 1 : arr

- 다차원 배열
- `arr[i]`는 배열을 요소로 갖는 배열
- `arr[i][j]`는 `string` 또는 `number` 타입 (길이는 2)

## 출력

- 객체를 요소로 갖는 배열

## 주의 사항

- Array의 map 메소드와 reduce 메소드를 사용해야 합니다.

## 입출력 예시

```javascript
let list = [
  [
    ['firstName', 'Joe'],
    ['lastName', 'Blow'],
    ['age', 42],
    ['role', 'clerk'],
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager'],
  ],
];

let output = test7(list);
console.log(output); // -->
[
  { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' },
];
```
