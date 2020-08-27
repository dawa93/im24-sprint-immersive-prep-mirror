# test6

## 문제

사원들의 정보를 배열로 입력 받으면 HTML 엘리먼트의 형태로 변형해서 리턴해야 합니다.

## 입력

### 인자 1 : arr

- 객체를 요소로 갖는 배열
- `arr[i]`는 `'firstName'`, `'lastName'`, `'age'`, `'role'` 등의 속성을 갖는 객체
- `'firstName'`, `'lastName'`, `'role'` 등의 속성은 `string` 타입
- `'age'` 속성은 `number` 타입 (1 이상의 정수)

## 출력

- HTML 엘리먼트 형태로 리턴해야 합니다.

## 입출력 예시

```javascript
let list = [
  { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' },
];

let output = test6(list);
console.log(output); // -->
```

```html
<ul id="container">
  <li>
    <a class="name">Joe Blow</a>
    <div class="age">42</div>
  </li>
  <li>
    <a class="name">Mary Jenkins</a>
    <div class="age">36</div>
  </li>
</ul>
```

## 힌트

- <a> 태그로 만들어진 사원의 이름을 클릭할 경우, 제공되는 printRole 함수를 실행하여,
해당 사원의 role이 콘솔에 출력이 되어야 합니다.
- [jsFiddle](https://jsfiddle.net/Codestates/xowudLjg/48/)에서 HTML, JS를 실험해 보실 수 있습니다
