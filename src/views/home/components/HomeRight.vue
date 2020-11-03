<template>
  <div class="home-right">
    <transition name="fadeRight" mode="out-in">
      <keep-alive>
        <component :is="view"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeRight",
  components: {
    Manage: () => import("./right/Manage"),
    Supply: () => import("./right/Supply"),
    Consume: () => import("./right/Consume"),
    Analysis: () => import("./right/Analysis")
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
.home-right
  width: 20.8333vw
  height: 'calc(100vh  - 2 * %s)' % $commonHeight
  overflow: hidden
</style>
