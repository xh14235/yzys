<template>
  <div class="common-wrapper">
    <StatisticsSave v-if="shows.includes('right01')"></StatisticsSave>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Analysis",
  components: {
    StatisticsSave: () => import("@/components/details/analysis/StatisticsSave")
  },
  computed: {
    ...mapState(["dispose"]),
    shows() {
      return this.dispose.Analysis;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
