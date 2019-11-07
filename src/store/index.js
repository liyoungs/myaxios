import Vue from "vue"
import Vuex from "vuex"
import PersistedState from "vuex-persistedstate"

Vue.use(Vuex);
const state = {
  // AUTH_TOKEN: "aksddkdm"
  AUTH_TOKEN: null
};
const mutations = {
  setToken(state, newValue) {
    state.AUTH_TOKEN = newValue;
  },
  removeToken(state) {
    state.AUTH_TOKEN = null;
  }
};
const actions = {};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [PersistedState({storage: window.sessionStorage})]
});
export default store
