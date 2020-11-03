<template>
  <div class="common-wrapper">
    <EnergyDirection v-if="shows.includes('right01')"></EnergyDirection>
    <StatisticsCold v-if="shows.includes('right02')"></StatisticsCold>
    <StatisticsHot v-if="shows.includes('right03')"></StatisticsHot>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Supply",
  components: {
    EnergyDirection: () =>
      import("@/components/details/supply/EnergyDirection"),
    StatisticsCold: () => import("@/components/details/supply/StatisticsCold"),
    StatisticsHot: () => import("@/components/details/supply/StatisticsHot")
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
