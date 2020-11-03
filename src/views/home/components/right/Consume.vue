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
  name: "Consume",
  components: {
    EnergyDirection: () =>
      import("@/components/details/consume/EnergyDirection"),
    StatisticsCold: () => import("@/components/details/consume/StatisticsCold"),
    StatisticsHot: () => import("@/components/details/consume/StatisticsHot")
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
