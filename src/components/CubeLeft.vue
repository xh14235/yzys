<template>
  <div class="cube-left-wrapper swing2" v-show="cubeShow">
    <img class="cube-img" src="@/assets/img/cube-left-title.png" alt="" />
    <div class="cube-line"></div>
    <div class="cube-list">
      <div class="cube-item" v-for="(item, index) of list" :key="index">
        {{ item.title }}：<span class="num">{{ item.num }}</span>
        {{ item.unit }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CubeLeft",
  data() {
    return {
      list: [
        {
          title: "电量",
          num: 100,
          unit: "%"
        },
        {
          title: "电压",
          num: 691.2,
          unit: "V"
        },
        {
          title: "电流",
          num: 733,
          unit: "A"
        },
        {
          title: "温度",
          num: 34,
          unit: "℃"
        },
        {
          title: "SOH",
          num: 95,
          unit: "%"
        },
        {
          title: "有功功率",
          num: 498.5,
          unit: "kW"
        },
        {
          title: "无功功率",
          num: 101.2,
          unit: "kW"
        },
        {
          title: "运行状态",
          num: 1,
          unit: ""
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
.cube-left-wrapper
  transform: perspective(400px) rotateY(10deg)
  width: 19.5vw
  height: 53vh
  position: absolute
  top: 27vh
  left: 9.5vw
  z-index: 1
  display: flex
  flex-direction: column
  justify-content: space-between
  .cube-img
    width: 100%
    margin-bottom: auto
    vertical-align: top
  .cube-line
    width: 100%
    height: 0.556vh
    background: linear-gradient(90deg, #74CEA6 0%, #F3CE4F 100%)
  .cube-list
    width: 100%
    height: 42vh
    background: rgba(0, 0, 0, 0.6)
    padding: 3vh
    display: flex
    flex-direction: column
    justify-content: space-between
    .cube-item
      font-size: $font24
      &:last-child
        .num
          display: inline-block
          vertical-align: middle
          width: 2vw
          height: 2vh
          background: #46D0A9
          color: transparent
</style>
