<template>
  <div class="common-wrapper">
    <EnergyAll v-if="shows.includes('left01')"></EnergyAll>
    <StatisticsElectric v-if="shows.includes('left02')"></StatisticsElectric>
    <StatisticsHotWater v-if="shows.includes('left03')"></StatisticsHotWater>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Supply",
  components: {
    EnergyAll: () => import("@/components/details/supply/EnergyAll"),
    StatisticsElectric: () =>
      import("@/components/details/supply/StatisticsElectric"),
    StatisticsHotWater: () =>
      import("@/components/details/supply/StatisticsHotWater")
  },
  computed: {
    ...mapState(["dispose"]),
    shows() {
      return this.dispose.Supply;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
