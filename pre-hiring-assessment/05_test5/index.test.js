/* global test5 */
const vm = require('vm');
const fs = require('fs');
const chai = require('chai');
const expect = chai.expect;

if (typeof window === 'undefined') {
  let filename = __dirname + '/index.js';
  vm.runInThisContext(fs.readFileSync(filename), filename);
}

// 여기까지는 고칠 필요가 없습니다.
// 이 라인 이후로 테스트 케이스를 추가해주세요.

describe('', function () {
  it('number 타입을 리턴해야 합니다', function () {
    expect(typeof test5(2002)).to.be.equal('number');
  });
  it('0을(를) 입력받은 경우, 0을(를) 리턴해야 합니다', function () {
    expect(test5(0)).to.be.equal(0);
  });
  it('142을(를) 입력받은 경우, 7을(를) 리턴해야 합니다', function () {
    expect(test5(142)).to.equal(7);
  });
  it('100001을(를) 입력받은 경우, 2을(를) 리턴해야 합니다', function () {
    expect(test5(100001)).to.equal(2);
  });
  it('-912을(를) 입력받은 경우, -6을(를) 리턴해야 합니다', function () {
    expect(test5(-912)).to.equal(-6);
  });

  // 히든 테스트 케이스

  // 양수 테스트 케이스 확인
  const posTestCases = [
    [512, 8],
    [705, 12],
    [101010101, 5],
    [2002, 4],
  ];

  posTestCases.forEach(function (testCase) {
    it('수가 주어졌을 때 정확한 값을(를) 리턴해야 합니다', function () {
      expect(test5(testCase[0])).to.be.equal(testCase[1]);
    });
  });

  // 음수 테스트 케이스 확인
  const negTestCases = [
    [-999, 9],
    [-1000001, 0],
    [-0, 0],
  ];

  negTestCases.forEach(function (testCase) {
    it('음수가 포함되었을 때도 정확한 값을(를) 리턴해야 합니다', function () {
      expect(test5(testCase[0])).to.be.equal(testCase[1]);
    });
  });
});
