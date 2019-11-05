import Vue from "vue"
import Vuex from "vuex"
import PersistedState from "vuex-persistedstate"

Vue.use(Vuex);
const state = {
  AUTH_TOKEN: "aklskl"
};
const actions = {};
const mutations = {};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [PersistedState({storage: window.sessionStorage})]
});
export default store
