import Vue from "vue";
import Vuex from "vuex";

import color from "./color";
import font from "./font";
import map from "./map";

let defaultToken = sessionStorage.token || "";

Vue.use(Vuex);
// 能源供给及能源消费页面 累计能量值及能源占比图数据请求
export default new Vuex.Store({
  state: {
    token: defaultToken,
    // 天气数据对象
    weather: {},
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
      // Manage: [],
      // Supply: [],
      // Consume: [],
      // Analysis: []
    },
    supplyData: {},
    consumeData: {},
    chargeList: [],
    allCharge: 0
  },
  mutations: {
    // 改变底部tab
    changeMapTab(state, index) {
      state.mapTab = index;
    },
    // 根据左侧栏目底部高度改变地图控制按钮高度
    changeMapIconHeight(state, height) {
      state.mapIconHeight = height;
    },
    // 登录方法
    mutLogin(state, token) {
      state.token = token;
    },
    // 获取天气信息
    mutWeather(state, weather) {
      state.weather = weather;
    },
    // 获取配置能源供给页面数据
    mutSupplyData(state, data) {
      state.supplyData = data;
    },
    // 获取配置能源消费页面数据
    mutConsumeData(state, data) {
      state.consumeData = data;
    },
    // 跳转到能源消费页面
    toCunsumePage(state) {
      if (state.mapTab !== 2) state.mapTab = 2;
    },
    // 获取配置节省费用数据
    mutChargeNum(state, data) {
      state.allCharge = data.allCharge;
      state.chargeList = data.chargeList;
    }
  },
  actions: {},
  modules: {
    color,
    font,
    map
  }
});
