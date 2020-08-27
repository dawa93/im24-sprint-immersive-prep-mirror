const { expect } = require("chai");
const FILL_ME_IN = 'FILL_ME_IN'

describe('this 키워드에 관해서', () => {
  // 브라우저 환경에서 this는 기본적으로 window 객체를 가리킵니다
  // node.js 환경에서 this는 기본적으로 module.exports 객체를 가리킵니다
  // module.exports가 무엇인지는 나중에 알아봅시다
  // 일단 지금은 module.exports에는 "빈 객체 하나"가 들어있다는 것 정도만 기억하고 넘어갑시다

  it('node.js 환경에 존재하는 module.exports 객체의 값을 확인합니다', () => {
    expect(module.exports).to.eql({})
  })

  it('this의 기본을 확인합니다', () => {
    expect(this).to.eql(module.exports)
  })

  // node.js 환경에서는 브라우저 환경의 window와 비슷하게 작동하는 global이라는 객체가 존재합니다
  it('함수 선언식 호출시 this값을 확인합니다', () => {
    function foo() {
      return this
    }

    expect(foo()).to.eql(FILL_ME_IN)
  })

  it('함수 표현식 호출시 this값을 확인합니다', () => {
    const foo = function () {
      return this
    }

    expect(foo()).to.eql(FILL_ME_IN)
  })

  it('화살표 함수 호출시 this값을 확인합니다', () => {
    const foo = () => {
      return this
    }

    expect(foo()).to.eql(FILL_ME_IN)
  })

  it('메소드 호출시 this를 확인합니다', () => {
    const counter = {
      value: 0,
      increse: function () {
        this.value++
      },
      decrease: function () {
        this.value--
      },
      getValue: function () {
        return this.value
      }
    }

    counter.increse()
    counter.increse()
    counter.decrease()
    expect(counter.getValue()).to.eql(FILL_ME_IN)
  })

  it('메소드 호출시 this를 확인합니다', () => {
    // 객체의 속성 값으로 담긴 함수를 특별히 "메소드"라고 부릅니다
    // foo()     :함수
    // foo.bar() :메소드 함수

    const counter = {
      value: 0,
      increse: function () {
        this.value++
      },
      decrease: function () {
        this.value--
      },
      getValue: function () {
        return this.value
      }
    }

    counter.increse()
    counter.increse()
    counter.decrease()
    expect(counter.getValue()).to.eql(FILL_ME_IN)
  })

  it('화살표 함수로 작성된 메소드 호출시 this를 확인합니다', () => {
    module.exports.value = 100

    const counter = {
      value: 0,
      increse: () => {
        this.value++
      },
      decrease: () => {
        this.value--
      },
      getValue: () => {
        return this.value
      }
    }

    counter.increse()
    counter.decrease()
    counter.decrease()
    expect(counter.getValue()).to.eql(FILL_ME_IN)

    // 메소드 선언시에는 화살표 함수를 사용을 피하거나,
    // 화살표 함수를 사용할 경우 this 사용을 피해야 합니다
  })

  it('new 키워드를 이용해 함수를 호출할 수 있습니다', () => {
    // new 키워드를 이용해 호출할 경우에 해당 함수를 특별히 "생성자"라고 부릅니다

    let this_value_in_constructor;

    function Car(name, brand, color) {
      this.name = name;
      this.brand = brand;
      this.color = color;

      this_value_in_constructor = this;
    }

    const mycar = new Car('mini', 'bmw', 'red')
    expect(mycar.name).to.eql(FILL_ME_IN)
    expect(mycar.brand).to.eql(FILL_ME_IN)
    expect(mycar.color).to.eql(FILL_ME_IN)
    expect(this_value_in_constructor).to.eql(FILL_ME_IN)

    const yourcar = new Car('911', 'porsche', 'black')
    expect(yourcar.name).to.eql(FILL_ME_IN)
    expect(yourcar.brand).to.eql(FILL_ME_IN)
    expect(yourcar.color).to.eql(FILL_ME_IN)
    expect(this_value_in_constructor).to.eql(FILL_ME_IN)

    // new 키워드 없이 호출하면?
    const secondcar = Car('spark', 'chevrolet', 'violet')
    // expect(secondcar.name).to.eql('spark') // 이 코드는 TypeError를 발생시킵니다
    expect(secondcar).to.eql(FILL_ME_IN) // 왜일까요?
    expect(this_value_in_constructor).to.eql(FILL_ME_IN)
  })
})
