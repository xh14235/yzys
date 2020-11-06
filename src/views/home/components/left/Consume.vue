<template>
  <div class="common-wrapper">
    <EnergyAll v-if="shows.includes('left01')"></EnergyAll>
    <StatisticsElectric v-if="shows.includes('left02')"></StatisticsElectric>
    <StatisticsHotWater v-if="shows.includes('left03')"></StatisticsHotWater>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Consume",
  components: {
    EnergyAll: () => import("@/components/details/consume/EnergyAll"),
    StatisticsElectric: () =>
      import("@/components/details/consume/StatisticsElectric"),
    StatisticsHotWater: () =>
      import("@/components/details/consume/StatisticsHotWater")
  },
  computed: {
    ...mapState(["dispose"]),
    shows() {
      return this.dispose.Consume;
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
