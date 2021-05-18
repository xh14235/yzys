<template>
  <div class="cube-top-wrapper" v-show="cubeShow">
    <div class="cube-line"></div>
    <div class="cube-box">
      <div class="cube-left">
        <img src="@/assets/img/battery.png" alt="" class="cube-left-img" />
        <p>功率设定值</p>
        <p>0.00 kW</p>
        <p>Soh: 80%</p>
      </div>
      <div class="cube-right">
        <div class="cube-right-title">
          <div class="cube-right-info">能源中心状态：</div>
          <div class="cube-right-icon"></div>
        </div>
        <div class="cube-right-list">
          <div
            class="cube-right-item"
            v-for="(item, index) of list"
            :key="index"
          >
            {{ item.title }}：{{ item.num }} {{ item.unit }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CubeTop",
  data() {
    return {
      list: [
        {
          title: "可充功率",
          num: -2000,
          unit: "kW"
        },
        {
          title: "可放功率",
          num: 1000,
          unit: "kW"
        },
        {
          title: "可充电量",
          num: 1000,
          unit: "kWh"
        },
        {
          title: "可放电量",
          num: 800,
          unit: "kWh"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      cubeShow: state => state.map.cubeShow
    })
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.cube-top-wrapper
  width: 36vw
  height: 32vh
  position: absolute
  top: 13vh
  left: 32vw
  z-index: 1
  display: flex
  flex-direction: column
  .cube-line
    width: 100%
    height: 0.556vh
    background: linear-gradient(90deg, #74CEA6 0%, #F3CE4F 100%)
  .cube-box
    flex: auto
    width: 100%
    background: rgba(0, 0, 0, 0.6)
    display: flex
    justify-content: space-around
    align-items: center
    .cube-left
      text-align: center
      .cube-left-img
        width: 5.93vw
      p
        margin-top: 0.5vh
        font-size: $font18
    .cube-right
      .cube-right-title
        font-size: $font32
        display: flex
        align-items: center
        .cube-right-icon
          width: 2vw
          height: 2vh
          background: #46D0A9
      .cube-right-list
        .cube-right-item
          margin-top: 2vh
          font-size: $font24
</style>
