<template>
  <div class="common-wrapper">
    <ChargeSave v-if="shows.includes('left01')"></ChargeSave>
    <EnergySave v-if="shows.includes('left02')"></EnergySave>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Analysis",
  components: {
    EnergySave: () => import("@/components/details/analysis/EnergySave"),
    ChargeSave: () => import("@/components/details/analysis/ChargeSave")
  },
  computed: {
    ...mapState(["dispose"]),
    shows() {
      return this.dispose.Analysis;
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
