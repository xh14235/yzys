<template>
  <div class="common-wrapper">
    <ParkInfo v-if="shows.includes('left01')"></ParkInfo>
    <AbnormalMonitoring v-if="shows.includes('left02')"></AbnormalMonitoring>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Manage",
  components: {
    ParkInfo: () => import("@/components/details/manage/ParkInfo"),
    AbnormalMonitoring: () =>
      import("@/components/details/manage/AbnormalMonitoring")
  },
  computed: {
    ...mapState(["dispose"]),
    shows() {
      return this.dispose.Manage;
    }
  },
  methods: {
    ...mapMutations(["changeMapIconHeight"])
  },
  activated() {
    setTimeout(() => {
      let line = this.$refs.line;
      let height =
        document.body.clientHeight - line.getBoundingClientRect().top;
      this.changeMapIconHeight(height);
    }, 500);
  }
};
</script>

<style lang="stylus" scoped></style>
