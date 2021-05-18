<template>
  <div class="common-header-wrapper">
    <div class="header-other">
      <span class="header-time num">{{ nowTime }}</span>
      <span class="line">|</span>
      <span class="header-date num">{{ nowDate }}</span>
      <img
        class="header-icon"
        :src="require('../assets/img/' + weather.wea_img + '.png')"
        v-if="weather.wea_img"
      />
      <span class="header-tem num" v-if="weather.tem">{{ weather.tem }}℃</span>
      <span class="line">|</span>
      <span class="header-sup">PM2.5 </span>
      <span class="header-pm25 num" v-if="weather.air_pm25">{{
        weather.air_pm25
      }}</span>
      <span class="line">|</span>
      <img
        class="header-logout"
        src="../assets/img/logout.png"
        @click="logout()"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonHeader",
  data() {
    return {
      nowTime: "",
      nowDate: "",
      timer: null,
      interval: 600000
    };
  },
  computed: {
    ...mapState(["weather"])
  },
  methods: {
    ...mapMutations(["mutWeather"]),
    // 获取固定格式的时间与日期
    getTime() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = this.add0(new Date().getMonth() + 1);
      let dd = this.add0(new Date().getDate());
      let hh = this.add0(new Date().getHours());
      let mf = this.add0(new Date().getMinutes());
      let ss = this.add0(new Date().getSeconds());
      _this.nowTime = hh + ":" + mf + ":" + ss;
      _this.nowDate = yy + "/" + mm + "/" + dd;
    },
    add0(time) {
      return time < 10 ? "0" + time : time;
    },
    currentTime() {
      this.getTime();
      setInterval(this.getTime, 1000);
    },
    // 获取天气状况，jsonp解决跨域
    getWeather() {
      const jsonp = require("jsonp");
      jsonp(
        "https://tianqiapi.com/api?version=v6&appid=95555958&appsecret=Fjprg6Px",
        null,
        (err, data) => {
          if (err) {
            console.error(err.message);
          } else {
            this.mutWeather(data);
          }
        }
      );
    },
    // 登出功能
    logout() {
      this.$router.push("/");
      sessionStorage.removeItem("token");
    }
  },
  mounted() {
    this.currentTime();
    this.getWeather();
    this.timer = setInterval(() => {
      this.getWeather();
    }, this.interval);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

<style scoped lang="stylus">
@import '~@/assets/css/common.styl'
.common-header-wrapper
  width: 100%
  height: 8vh
  display: flex
  justify-content: flex-end
  align-items: center
  .header-other
    font-size: $font20
    display: flex
    align-items: center
    justify-content: space-around
    .header-time
      display: inline-block
      flex: 0 0 2.6vw
      width: 2.6vw
      overflow: hidden
    .header-icon
      width: 1.2vw
      height: 1.2vw
      padding: 0 0.5vw
    .header-sup
      font-size: $font12
      align-self: flex-start
      padding-right: 0.5vw
    .line
      padding: 0 0.5vw
      align-self: flex-start
</style>
