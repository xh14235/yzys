<template>
  <div class="common-wrapper">
    <EnergySave v-if="shows.includes('left01')"></EnergySave>
    <ChargeSave v-if="shows.includes('left02')"></ChargeSave>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  }
};
</script>

<style lang="stylus" scoped></style>
