# test2

## 문제

JSON 형태의 테이터와 특정 id값을 입력 받으면 해당 id값을 가지고 있는 객체를 입력받은 JSON 데이터에서 찾아 리턴해야 합니다.

## 입력

### 인자 1 : json

- JSON 형태의 데이터
- 입출력 예시에 명시되어 있습니다.

### 인자 2 : id

- `string` 타입의 id 값

## 출력

- 입력 받은 json 에서 정의된 객체를 리턴해야 합니다.

## 주의 사항

- 이 때 객체는 children이라는 키 값에 자식 노드를 가질 수 있으며, 부모 뿐만이 아닌, 자식 노드 중에서도 id값을 가진 객체가 있는지를 찾아내야 합니다.

## 입출력 예시

```javascript
let TREE_DATA = {
  items: [
    {
      id: '1',
      name: 'johnny',
    },
    {
      id: '2',
      name: 'ingi',
      children: [
        {
          id: '3',
          name: 'johnson',
        },
        {
          id: '4',
          name: 'katy',
        },
        {
          id: '5',
          name: 'steve',
          children: [
            {
              id: '6',
              name: 'lisa',
            },
            {
              id: '7',
              name: 'penny',
              children: [
                {
                  id: '8',
                  name: 'john',
                },
                {
                  id: '9',
                  name: 'hoyong',
                },
              ],
            },
            {
              id: '10',
              },
          ],
        },
        {
          id: '11',
        },
        {
          id: '12',
        },
      ],
    },
    {
      id: '13',
    },
    {
      id: '14',
    },
  ],
};

let output = test2(TREE_DATA.items, '1');
console.log(output); // --> { "id": "1", "name": "johnny" }
```
