/* global test1 */
// 여기서부터
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

const testCases = [
  {
    input: 'yes yes Yes YES no NO NO NOOOO',
    output: { yes: 2, Yes: 1, YES: 1, no: 1, NO: 2, NOOOO: 1 },
  },
  {
    input:
      'I felt happy because I saw the others were happy and because I knew I should feel happy but I was not really happy',
    output: {
      I: 5,
      and: 1,
      because: 2,
      but: 1,
      feel: 1,
      felt: 1,
      happy: 4,
      knew: 1,
      not: 1,
      others: 1,
      really: 1,
      saw: 1,
      should: 1,
      the: 1,
      was: 1,
      were: 1,
    },
  },
  {
    input:
      'So I said yes to Thomas Clinton and later thought that I had said yes to God and later still realized I had said yes only to Thomas Clinton',
    output: {
      Clinton: 2,
      God: 1,
      I: 3,
      So: 1,
      Thomas: 2,
      and: 2,
      had: 2,
      later: 2,
      only: 1,
      realized: 1,
      said: 3,
      still: 1,
      that: 1,
      thought: 1,
      to: 3,
      yes: 3,
    },
  },
  {
    input:
      'James while John had had had had had had had had had had had a better effect on the teacher',
    output: {
      James: 1,
      John: 1,
      a: 1,
      better: 1,
      effect: 1,
      had: 11,
      on: 1,
      teacher: 1,
      the: 1,
      while: 1,
    },
  },
  {
    input: 'That that is is that that is not is not is that it it is',
    output: { That: 1, is: 6, it: 2, not: 2, that: 4 },
  },
];

describe('test1', function () {
  it('객체를 리턴해야 합니다', function () {
    const output = test1('test input');
    expect(typeof output).to.be.equal('object');
    expect(output === null).to.be.equal(false);
    expect(Array.isArray(output)).to.be.false;
  });

  it("'ask a ask'을(를) 입력받은 경우, { ask: 2, a: 1 }을(를) 리턴해야 합니다", function () {
    expect(test1('ask a ask')).to.deep.equal({ ask: 2, a: 1 });
  });

  it("'a b c d c b a '을(를) 입력받은 경우, { a: 2, b: 2, c: 2, d: 1 }을(를) 리턴해야 합니다", function () {
    expect(test1('a b c d c b a ')).to.deep.equal({ a: 2, b: 2, c: 2, d: 1 });
  });

  it('빈 문자열을 입력받은 경우, 빈 객체를 리턴해야 합니다', function () {
    expect(test1('')).to.deep.equal({});
  });

  it("'   '을(를) 입력받은 경우, 빈 객체를 리턴해야 합니다", function () {
    expect(test1('   ')).to.deep.equal({});
  });

  it('문자열에 등장하는 단어의 개수를 정확하게 리턴해야 합니다', function () {
    expect(test1(testCases[0].input)).to.deep.equal(testCases[0].output);
  });

  it('문자열에 등장하는 단어의 개수를 정확하게 리턴해야 합니다', function () {
    expect(test1(testCases[1].input)).to.deep.equal(testCases[1].output);
  });

  it('문자열에 등장하는 단어의 개수를 정확하게 리턴해야 합니다', function () {
    expect(test1(testCases[2].input)).to.deep.equal(testCases[2].output);
  });

  it('문자열에 등장하는 단어의 개수를 정확하게 리턴해야 합니다', function () {
    expect(test1(testCases[3].input)).to.deep.equal(testCases[3].output);
  });

  it('문자열에 등장하는 단어의 개수를 정확하게 리턴해야 합니다', function () {
    expect(test1(testCases[4].input)).to.deep.equal(testCases[4].output);
  });
});
