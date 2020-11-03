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
  }
};
</script>

<style lang="stylus" scoped></style>
