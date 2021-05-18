<template>
  <div class="common-box common-box-bottom">
    <div class="common-title">
      <img src="../../../assets/img/manage-title3.png" alt="" />
    </div>
    <div class="air-wrapper">
      <div class="air-left">
        <div class="air-left-title">环境空气质量在线实时监测</div>
        <div class="air-left-num num">19</div>
        <div class="air-left-other">
          <div class="air-left-pm">PM2.5</div>
          <div class="air-left-unit">Ug/m³</div>
          <div class="air-left-standard">
            <div class="standard-item excellent">优</div>
            <div class="standard-item good">良</div>
            <div class="standard-item bad">差</div>
          </div>
        </div>
      </div>
      <img class="air-line" src="../../../assets/img/long-line.png" alt="" />
      <div class="air-right">
        <div class="air-right-item">
          <span>温度</span>
          <div>
            <span class="num">{{ weather.tem }}</span> ℃
          </div>
        </div>
        <div class="air-right-item">
          <span>湿度</span>
          <div>
            <span class="num">{{ weather.humidity }}</span> RH
          </div>
        </div>
        <div class="air-right-item">
          <span>大气压</span>
          <div>
            <span class="num">{{
              parseInt(weather.pressure).toLocaleString()
            }}</span>
            kPa
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AirTesting",
  computed: {
    ...mapState(["weather"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.air-wrapper
  margin-top: 2.23148vh
  width: 100%
  display: flex
  justify-content: space-between
  .air-left
    flex: 0 0 11.98vw
    width: 11.98vw
    padding-right: 1vw
    display: flex
    flex-direction: column
    justify-content: space-between
    .air-left-num
      margin-top: auto
      color: $green
      font-size: 10vh
      vertical-align: bottom
    .air-left-other
      display: flex
      justify-content: space-between
      align-items: flex-end
      .air-left-pm
        font-size: $font24
      .air-left-unit
        font-size: $font16
        margin-right: auto
        margin-left: 0.5vw
      .air-left-standard
        .standard-item
          width: 2.1354vw
          text-align: center
          height: 1.66667vh
          line-height: 1.66667vh
          margin-top: 0.4762vh
          font-size: $font12
          &.excellent
            background: $green
          &.good
            background: $yellow
          &.bad
            background: $red
  .air-line
    height: 22.3148vh
    width: 1px
  .air-right
    flex: 0 0 6.25vw
    width: 6.25vw
    display: flex
    flex-direction: column
    justify-content: space-between
    padding-left: 1vw
    .air-right-item
      div
        .num
          color: $green
          font-size: $font30
</style>
