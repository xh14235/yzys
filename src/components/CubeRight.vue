<template>
  <div class="cube-right-wrapper swing1" v-show="cubeShow">
    <img class="cube-img" src="@/assets/img/cube-right-title.png" alt="" />
    <div class="cube-line"></div>
    <div class="cube-box">
      <div class="cube-box-top">
        <div class="cube-top-item" v-for="(item, index) of list" :key="index">
          <img :src="item.imgUrl" alt="" class="cube-top-img" />
          <div class="cube-top-title">{{ item.title }}</div>
        </div>
      </div>
      <div class="cube-box-center">
        <div class="cube-center-item">
          <img src="@/assets/img/mabiao.png" alt="" class="cube-center-img" />
          <div class="cube-center-title">室内温度</div>
        </div>
        <div class="cube-center-item">
          <img src="@/assets/img/mabiao.png" alt="" class="cube-center-img" />
          <div class="cube-center-title">室内湿度</div>
        </div>
      </div>
      <div class="cube-box-bottom">
        <div class="cube-bottom-item">
          <div class="cube-bottom-title">电子围栏运行状态：</div>
          <div class="cube-bottom-icon"></div>
        </div>
        <div class="cube-bottom-item">
          <div class="cube-bottom-title">电子围栏运行状态：</div>
          <div class="cube-bottom-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CubeRight",
  data() {
    return {
      list: [
        {
          title: "储能单元",
          imgUrl: require("@/assets/img/chuneng1.png")
        },
        {
          title: "储能间隔",
          imgUrl: require("@/assets/img/chuneng2.png")
        },
        {
          title: "AGC",
          imgUrl: require("@/assets/img/agc.png")
        },
        {
          title: "通讯状态",
          imgUrl: require("@/assets/img/tongxun.png")
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
.cube-right-wrapper
  transform: perspective(400px) rotateY(-10deg)
  width: 19.5vw
  height: 53vh
  position: absolute
  top: 27vh
  right: 9.5vw
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
  .cube-box
    width: 100%
    height: 42vh
    background: rgba(0, 0, 0, 0.6)
    padding: 3vh
    display: flex
    flex-direction: column
    justify-content: space-between
    .cube-box-top
      display: flex
      justify-content: space-between
      text-align: center
      .cube-top-item
        .cube-top-img
          width: 2.08vw
        .cube-top-title
          font-size: $font18
    .cube-box-center
      display: flex
      justify-content: space-between
      text-align: center
      .cube-center-item
        .cube-center-img
          width: 6.8vw
        .cube-center-title
          font-size: $font18
    .cube-box-bottom
      .cube-bottom-item
        margin-top: 2vh
        font-size: $font24
        display: flex
        justify-content: flex-start
        align-items: center
        .cube-bottom-icon
          width: 2vw
          height: 2vh
          background: #46D0A9
</style>
