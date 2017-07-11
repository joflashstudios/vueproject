import Vue from 'vue'
import Hello from '@/components/Hello'
const exampleDependencyInjector = require("!!vue-loader?inject!@/components/Hello")
const testComponent = exampleDependencyInjector({
  "../modules/dependency": {
    getTwelve() {
      return  13;
    }
  }
})

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(testComponent)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App13')
  })
})
