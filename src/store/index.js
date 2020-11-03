import Vue from "vue";
import Vuex from "vuex";

import color from "./color";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 底部导航
    mapTab: 0,
    // 模块或者说组件配置
    dispose: {
      Manage: ["left01", "left02", "right01", "right02"],
      Supply: ["left01", "left02", "left03", "right01", "right02", "right03"],
      Consume: ["left01", "left02", "left03", "right01", "right02", "right03"],
      Analysis: ["left01", "left02", "right01"]
    }
  },
  mutations: {
    changeMapTab(state, index) {
      state.mapTab = index;
    }
  },
  actions: {},
  modules: {
    color
  }
});
