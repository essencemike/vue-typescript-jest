import * as TYPES from '@/constants';
import { RootState, SystemStatus } from '@/types/store';
import { GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex';

const state: SystemStatus = {
  loading: false,
};

const getters: GetterTree<SystemStatus, any> = {
  loading: state => state.loading,
};

const mutations: MutationTree<SystemStatus> = {
  [TYPES.UPDATE_STATUS] (state: SystemStatus, loading: boolean): void {
    state.loading = loading;
  },
};

const actions: ActionTree<SystemStatus, RootState> = {
  [TYPES.UPDATE_STATUS] (
    { commit }: ActionContext<SystemStatus, RootState>,
    loading: boolean,
  ): void {
    const time = 2000;
    setTimeout(() => { commit(TYPES.UPDATE_STATUS, loading); }, time);
  },
};

export const StatusModule = {
  state,
  getters,
  mutations,
  actions,
};
