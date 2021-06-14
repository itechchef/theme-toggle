import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  themeColor: '#2EA44F',
  username: '',
  password: ''
};

const mutations = {
  setThemeColor(state, color) {
    state.themeColor = color;
  },
  setUsername(state, username) {
    state.username = username;
  },
  setPassword(state, password) {
    state.password = password;
  }
};

const getters = {
  themeColor: state => state.themeColor,
  username: state => state.username,
  password: state => state.password,
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
});
