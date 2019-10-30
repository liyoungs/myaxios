import Vue from "vue"
import Vuex from "vuex"
import PersistedState from "vuex-persistedstate"

Vue.use(Vuex);
const state = {};
const actions = {};
const mutations = {};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [PersistedState()]
});
export default store
