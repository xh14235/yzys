<template>
  <div class="home-left">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="view"></component>
      </keep-alive>
    </transition>
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
  width: 20.8333vw
  height: 'calc(100vh  - 2 * %s)' % $commonHeight
  overflow: hidden
</style>
