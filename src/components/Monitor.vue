<template>
  <div class="monitor-wrapper">
    <div class="monitor-box">
      <video src="@/assets/video/test.mp4" autoplay muted loop></video>
      <img
        src="@/assets/img/monitor-close.png"
        alt=""
        class="monitor-close"
        @click="closeMonitor"
      />
    </div>
    <img src="@/assets/img/monitor-line.png" alt="" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Monitor",
  methods: {
    ...mapMutations(["closeMonitor"])
  }
};
</script>

<style lang="stylus" scoped>
.monitor-box
  width: 100%
  position: relative
  video
    width: 100%
    vertical-align: top
  .monitor-close
    width: 2vh
    height: 2vh
    position: absolute
    top: 0.5vh
    right: 0.5vh
    cursor: pointer
img
  width: 100%
</style>
