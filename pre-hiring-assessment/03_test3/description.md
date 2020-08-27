# test3

## 문제

피보나치 수열을 순차적으로 출력하는 클로저 형태의 함수를 작성해야 합니다.

## 출력

- `number` 타입의 피보나치 수를 리턴해야 합니다.

## 입출력 예시

```javascript
const fn = test3();
console.log(fn()); // --> 0
console.log(fn()); // --> 1
console.log(fn()); // --> 1
console.log(fn()); // --> 2
console.log(fn()); // --> 3
console.log(fn()); // --> 5
```

## 힌트

- 이 함수는 recursive 혹은 iterative한 방법 중 어떤 방법으로든 구현할 수 있습니다.
- 피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 됩니다.
- 예시) 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
