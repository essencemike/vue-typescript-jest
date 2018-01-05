// import Vue from 'vue';
// import Vuex from 'vuex';
import { mount, shallow } from 'vue-test-utils';
import App from '@/App.vue';
import store from '@/store';

// Vue.use(Vuex);

describe('App.vue test', () => {
  let app;

  beforeEach(() => {
    app = mount(App, {
      store,
      data: {
        typescript: 'typescript',
      },
    });
  });

  it('data typescript = typescript', () => {
    expect(app.vm.typescript).toEqual('typescript');
  });
});
