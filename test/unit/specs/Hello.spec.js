import Vue from 'vue'
const helloInjector = require("!!vue-loader?inject!@/components/Hello")

const Hello = helloInjector({
  "../modules/dependency": {
    getTwelve() {
      return  13;
    }
  }
})

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App13')
  })
})
