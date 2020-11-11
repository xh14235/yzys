<template>
  <div class="common-header-wrapper">
    <div class="header-title">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <div class="header-other">
      <span class="header-time num">{{ nowTime }}</span>
      <img class="header-icon" src="../assets/img/cloudy.png" />
      <span class="header-weather num">
        <span>{{ tem }}℃ | </span>
        <span class="sup">PM2.5 </span>
        <span>{{ pm25 }}</span>
      </span>
    </div>
  </div>
</template>

<script>
// import { weather } from "@/http/api";
import { mapState, mapMutations } from "vuex";
// import axios from "axios";
export default {
  name: "CommonHeader",
  data() {
    return {
      nowTime: ""
    };
  },
  computed: {
    ...mapState(["tem", "pm25", "weather"])
  },
  methods: {
    ...mapMutations(["mutWeather"]),
    getTime() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = this.add0(new Date().getMonth() + 1);
      let dd = this.add0(new Date().getDate());
      let hh = this.add0(new Date().getHours());
      let mf = this.add0(new Date().getMinutes());
      let ss = this.add0(new Date().getSeconds());
      _this.nowTime =
        hh + ":" + mf + ":" + ss + " | " + yy + "/" + mm + "/" + dd;
    },
    add0(time) {
      return time < 10 ? "0" + time : time;
    },
    currentTime() {
      this.getTime();
      setInterval(this.getTime, 1000);
    },
    getWeather() {
      const jsonp = require("jsonp");
      jsonp(
        "https://tianqiapi.com/api?version=v6&appid=95555958&appsecret=Fjprg6Px",
        null,
        (err, data) => {
          if (err) {
            console.error(err.message);
          } else {
            // console.log(data);
            let weather = {};
            weather.weather = data.wea;
            weather.pm25 = data.air_pm25;
            weather.tem = data.tem;
            weather.humidity = data.humidity;
            weather.pressure = data.pressure;
            this.mutWeather(weather);
          }
        }
      );
      // axios
      //   .get(
      //     "https://tianqiapi.com/api?version=v6&appid=95555958&appsecret=Fjprg6Px"
      //   )
      //   .then(res => {
      //     let weather = {};
      //     weather.weather = res.data.wea;
      //     weather.pm25 = res.data.air_pm25;
      //     weather.tem = res.data.tem;
      //     weather.humidity = res.data.humidity;
      //     weather.pressure = res.data.pressure;
      //     this.mutWeather(weather);
      //   });
      // weather({
      //   version: "v1",
      //   appid: "95555958",
      //   appsecret: "uBN3Pyn2",
      //   city: "上海"
      // }).then(res => {
      //   // console.log(res);
      //   this.weather = res.data.data[0].wea;
      // });
    }
  },
  created() {
    this.currentTime();
    this.getWeather();
  }
};
</script>

<style scoped lang="stylus">
@import '~@/assets/css/common.styl'
.common-header-wrapper
  width: 100%
  height: 8vh
  display: flex
  justify-content: space-between
  align-items: center
  .header-title
    img
      width: 18.44vw
      vertical-align: top
  .header-other
    font-size: $font20
    width: 15vw
    display: flex
    align-items: center
    justify-content: space-around
  .header-icon
    width: 1.5625vw
    height: 1.5625vw
  .header-weather
    .sup
      font-size: $font12
      vertical-align: top
</style>
