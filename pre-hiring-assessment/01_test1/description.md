# test1

## 문제

문자열을 입력받아 문자열에 존재하는 각 단어의 개수 정보를 담은 객체를 리턴해야 합니다.

## 입력

### 인자 1 : str

- `string` 타입의 문자열
- `str[i]`는 알파벳

## 출력

- 각 단어를 키로 하고, 각 단어의 개수를 값으로 하는 객체를 리턴해야 합니다.

## 주의 사항

- 단어는 공백 한 칸으로 구분합니다.
- 단어가 존재하지 않는 경우, 빈 객체를 리턴해야 합니다.
- 대소문자를 구분합니다.

## 입출력 예시

```javascript
let output = test1('ask a bunch try a bunch get a bunch');
console.log(output); // --> { ask: 1, a: 3, bunch: 3, try: 1, get: 1 }
```
