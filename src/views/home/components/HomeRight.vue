<template>
  <div class="home-right" v-show="!cubeShow">
    <CommonHeader></CommonHeader>
    <transition name="fadeRight" mode="out-in">
      <!-- <keep-alive> -->
      <component :is="view"></component>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeRight",
  components: {
    CommonHeader: () => import("@/components/CommonHeader"),
    Manage: () => import("./right/Manage"),
    Supply: () => import("./right/Supply"),
    Consume: () => import("./right/Consume"),
    Analysis: () => import("./right/Analysis")
  },
  computed: {
    ...mapState({
      mapTab: state => state.mapTab,
      dispose: state => state.dispose,
      cubeShow: state => state.map.cubeShow
    }),
    // 动态加载组件
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
.home-right
  width: 22.3958vw
  padding-right: 1.5625vw
  background-image: url('../../../assets/img/bg-right.png')
  background-size: 100% 100%
  height: 'calc(100vh  - %s)' % $commonHeight
  overflow: hidden
  position: absolute
  top: 0
  right: 0
  z-index: 1
</style>
