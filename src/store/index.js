import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 底部导航
    mapTab: 0,
    // 模块或者说组件配置
    dispose: {
      Manage: ["left01", "left02"],
      Supply: [],
      Consume: [],
      Analysis: []
    }
  },
  mutations: {
    changeMapTab(state, index) {
      state.mapTab = index;
    }
  },
  actions: {},
  modules: {}
});
