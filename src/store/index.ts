import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { RootState } from '@/types/store';

import { StatusModule } from './system-status';

Vue.use(Vuex);

const modules: ModuleTree<RootState> = {
  StatusModule,
};

export default new Vuex.Store({
  modules,
});
