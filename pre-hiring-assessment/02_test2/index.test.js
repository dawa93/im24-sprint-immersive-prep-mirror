/* global test2, sinon, expect */
/* eslint-env mocha */
if (typeof window === 'undefined') {
  const fs = require('fs');
  const chai = require('chai');
  const expect = chai.expect;
  const sinon = require('sinon');
  const vm = require('vm');
  const jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  const { window } = new JSDOM(
    '<!DOCTYPE html><html><body><ul id="container"></ul></body></html>'
  );
  const { document } = window;
  const sandbox = vm.createContext({
    sinon,
    describe,
    it,
    beforeEach,
    expect,
    console,
    window,
    document,
  });
  let referenceFile = __dirname + '/index.js';
  let testFile = __filename;
  vm.runInContext(
    fs.readFileSync(referenceFile) + fs.readFileSync(testFile),
    sandbox
  );
} else {
  // 여기까지는 고칠 필요가 없습니다.
  // 이 라인 이후로 테스트 케이스를 추가해주세요.

  const spy = sinon.spy(this, 'test2');

  describe('test2', function () {
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

    beforeEach(function () {
      spy.resetHistory();
    });

    it('id와 매칭되는 객체를 리턴해야 합니다', function () {
      expect(test2(TREE_DATA.items, '1')).to.deep.equal({
        id: '1',
        name: 'johnny',
      });

      expect(spy.calledOnce).to.be.equal(true);
    });

    it('객체가 담겨있는 깊이만큼 함수가 호출되어야 합니다 (1)', function () {
      expect(test2(TREE_DATA.items, '4')).to.deep.equal({
        id: '4',
        name: 'katy',
      });

      expect(spy.callCount).to.be.equal(2);
    });

    it('객체가 담겨있는 깊이만큼 함수가 호출되어야 합니다 (2)', function () {
      expect(test2(TREE_DATA.items, '7')).to.deep.equal({
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
      });

      expect(spy.callCount).to.be.equal(3);
    });

    it('객체가 담겨있는 깊이만큼 함수가 호출되어야 합니다 (3)', function () {
      expect(test2(TREE_DATA.items, '9')).to.deep.equal({
        id: '9',
        name: 'hoyong',
      });

      expect(spy.callCount).to.equal(4);
    });
  });
}
