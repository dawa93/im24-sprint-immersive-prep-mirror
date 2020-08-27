/* global test7 */
const vm = require('vm');
const fs = require('fs');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

if (typeof window === 'undefined') {
  let filename = __dirname + '/index.js';
  vm.runInThisContext(fs.readFileSync(filename), filename);
}

// 여기까지는 고칠 필요가 없습니다.
// 이 라인 이후로 테스트 케이스를 추가해주세요.

describe('test7', function () {
  let input;
  beforeEach(function () {
    sinon.spy(Array.prototype, 'map');
    sinon.spy(Array.prototype, 'reduce');
    input = [
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
      [
        ['firstName', 'Steve'],
        ['lastName', 'Lee'],
        ['city', 'Seoul'],
        ['favoriteFood', 'noodle'],
      ],
    ];
  });

  afterEach(function () {
    Array.prototype.map.restore();
    Array.prototype.reduce.restore();
  });

  it('reduce 함수가 직원 수만큼 호출되어야 합니다', function () {
    test7(input);
    expect(Array.prototype.reduce.callCount).to.equal(input.length);
  });

  it('map 함수가 한번 이상 호출되어야 합니다', function () {
    test7(input);
    expect(Array.prototype.map.called).to.equal(true);
  });

  it('객체들을 포함한 배열을 리턴해야 합니다', function () {
    let output = test7(input);
    expect(typeof output[0]).to.be.equal('object');
    expect(Array.isArray(output)).to.be.equal(true);
  });

  it('직원들의 데이터를 올바르게 변환해야 합니다', function () {
    let output = test7(input);
    let expected = [
      { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
      { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' },
      {
        firstName: 'Steve',
        lastName: 'Lee',
        city: 'Seoul',
        favoriteFood: 'noodle',
      },
    ];
    expect(JSON.stringify(expected)).to.be.equal(JSON.stringify(output));
  });

  const testCases = [
    [
      [
        [
          ['name', 'apple'],
          ['color', 'green'],
        ],
        [['name', 'orange']],
        [['color', 'black']],
      ],
      [
        { name: 'apple', color: 'green' },
        { name: 'orange' },
        { color: 'black' },
      ],
    ],
    [
      [
        [
          ['book', 'programmer'],
          ['author', 'CaMeLcAsE'],
        ],
        [
          ['pen', 'blue'],
          ['brand', 'nobrand'],
        ],
      ],
      [
        { book: 'programmer', author: 'CaMeLcAsE' },
        { pen: 'blue', brand: 'nobrand' },
      ],
    ],
    [
      [
        [
          ['year', 1990],
          ['title', 'nineteen hundreds'],
        ],
        [['boolean', true]],
        [['undefined', undefined]],
      ],
      [
        { year: 1990, title: 'nineteen hundreds' },
        { boolean: true },
        { undefined: undefined },
      ],
    ],
  ];

  testCases.forEach(function (testCase) {
    it('객체들로 변환한 요소들을 배열에 담아 리턴해야 합니다', function () {
      expect(test7(testCase[0])).to.deep.equal(testCase[1]);
    });
  });
});
