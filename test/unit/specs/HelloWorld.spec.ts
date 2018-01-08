import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    const h1 = <HTMLHeadingElement>vm.$el.querySelector('.hello h1');
    expect(h1.textContent).toEqual('Welcome to Your Vue.js App');
  });
});
