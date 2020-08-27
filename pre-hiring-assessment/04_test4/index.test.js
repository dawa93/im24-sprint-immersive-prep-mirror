/* global test4 */
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

describe('test4', function () {
  it('숫자을(를) 리턴해야 합니다', function () {
    expect(typeof test4(234)).to.be.equal('number');
  });
  it('234을(를) 입력받은 경우, 8을(를) 리턴해야 합니다', function () {
    expect(test4(234)).to.be.eql(8);
  });

  it('786을(를) 입력받은 경우, 0을(를) 리턴해야 합니다', function () {
    expect(test4(786)).to.be.eql(0);
  });

  it('2248을(를) 입력받은 경우, 6을(를) 리턴해야 합니다', function () {
    expect(test4(2248)).to.be.eql(6);
  });

  it('2300을(를) 입력받은 경우, 0을(를) 리턴햐야 합니다', function () {
    expect(test4(2300)).to.be.eql(0);
  });

  // 히든 테스트 케이스
  const testCases = [
    [0, 0],
    [123, 6],
    [323, 8],
  ];

  testCases.forEach(function (testCase) {
    it('입력 받은 숫자의 올바른 결과값을(를) 리턴해야 합니다', function () {
      expect(test4(testCase[0])).to.equal(testCase[1]);
    });
  });
});
