import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from "echarts";
import "./plugins/element.js";
// wheel vue控制台报警
import "default-passive-events";
// rsa加密
import JSEncrypt from "jsencrypt";
// css，各css功能见对接文档
import "@/assets/css/reset.css";
import "@/assets/css/common.css";
import "@/assets/css/transition.css";
// 三维用到的css
import "@/assets/test.css";

// rsa登录加密公钥及方法
const PUBLIC_KEY =
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDSUmOXyQmYYSnZacp0btvAZCOvCNPtzixAp7eJmzmAG4mgy/VgrY/s1BDLh9qTNHIRWXepUtwMrf1kYul/A45qE/2oxIbeeq4238YDWQ7ModOVXR9ytEHsT0jpCFvoYfYXYZnnoWRrLIBylQeXzqxbLDxxBxGCs4AjoRKh5S7nNQIDAQAB";
Vue.prototype.$getRsaCode = str => {
  let pubKey = `-----BEGIN PUBLIC KEY-----${PUBLIC_KEY}-----END PUBLIC KEY-----`;
  let encryptStr = new JSEncrypt();
  encryptStr.setPublicKey(pubKey);
  let data = encryptStr.encrypt(str.toString());
  return data;
};

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
