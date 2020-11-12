<template>
  <div class="home-left">
    <div class="header-title">
      <img src="../../../assets/img/logo.png" alt="" />
    </div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="view"></component>
      </keep-alive>
    </transition>
    <!-- <div class="line" ref="line"></div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeLeft",
  components: {
    Manage: () => import("./left/Manage"),
    Supply: () => import("./left/Supply"),
    Consume: () => import("./left/Consume"),
    Analysis: () => import("./left/Analysis")
  },
  computed: {
    ...mapState(["mapTab", "dispose"]),
    view() {
      let components = Object.keys(this.dispose);
      let component = components[this.mapTab];
      return component;
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~@/assets/css/common.styl'
.home-left
  width: 22.3958vw
  padding-left: 1.5625vw
  background-image: url('../../../assets/img/bg-left.png')
  background-size: 100% 100%
  height: 'calc(100vh  - %s)' % $commonHeight
  overflow: hidden
  .header-title
    height: 8vh
    img
      height: 3.8888889vh
      margin-top: 2vh
      vertical-align: top
</style>
