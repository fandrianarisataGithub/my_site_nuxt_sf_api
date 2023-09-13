import Vue from 'vue';
import  Vuex  from 'vuex';
Vue.use(Vuex);
export const state = () => ({
  scroll: {
    isScrolling: false,
    limit: {
      x: 0,
      y: 0,
    },
    x: 0,
    y: 0,
  },
})

export const mutations = {
  setScroll: (state, payload) => {
    state.scroll = Object.assign({}, state.scroll, payload)
  },
}
