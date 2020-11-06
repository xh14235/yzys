import Vue from "vue";
import Vuex from "vuex";

import color from "./color";
import font from "./font";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 底部导航
    mapTab: 0,
    // 地图控制按钮高度
    mapIconHeight: 0,
    // 模块或者说组件配置
    dispose: {
      Manage: ["left01", "left02", "right01", "right02"],
      Supply: ["left01", "left02", "left03", "right01", "right02", "right03"],
      Consume: ["left01", "left02", "left03", "right01", "right02", "right03"],
      Analysis: ["left01", "left02", "right01"]
    },
    // 月份
    monthList: [
      {
        title: "一月",
        val: 1
      },
      {
        title: "二月",
        val: 2
      },
      {
        title: "三月",
        val: 3
      },
      {
        title: "四月",
        val: 4
      },
      {
        title: "五月",
        val: 5
      },
      {
        title: "六月",
        val: 6
      },
      {
        title: "七月",
        val: 7
      },
      {
        title: "八月",
        val: 8
      },
      {
        title: "九月",
        val: 9
      },
      {
        title: "十月",
        val: 10
      },
      {
        title: "十一月",
        val: 11
      },
      {
        title: "十二月",
        val: 12
      }
    ]
  },
  mutations: {
    changeMapTab(state, index) {
      state.mapTab = index;
    },
    changeMapIconHeight(state, height) {
      state.mapIconHeight = height;
    }
  },
  actions: {},
  modules: {
    color,
    font
  }
});
