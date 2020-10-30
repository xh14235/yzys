<template>
  <div class="common-header-wrapper">
    <div class="header-title">昱章演示项目demo</div>
    <div class="header-other">
      <span class="header-time">{{ nowTime }}</span>
      <span class="header-weather">{{ weather }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CommonHeader",
  data() {
    return {
      nowTime: "",
      weather: "晴天"
    };
  },
  methods: {
    getTime() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      _this.nowTime =
        yy + "-" + mm + "-" + dd + "  " + hh + ":" + mf + ":" + ss;
    },
    currentTime() {
      this.getTime();
      setInterval(this.getTime, 1000);
    },
    getWeather() {
      axios
        .post(
          "https://tianqiapi.com/api?version=v1&appid=95555958&appsecret=uBN3Pyn2&city=上海"
        )
        .then(res => {
          this.weather = res.data.data[0].wea;
        });
    }
  },
  created() {
    this.currentTime();
    this.getWeather();
  }
};
</script>

<style scoped lang="stylus">
.common-header-wrapper
  width: 100vw
  height: 8vh
  background: #eee
  display: flex
  justify-content: space-between
  align-items: center
</style>
