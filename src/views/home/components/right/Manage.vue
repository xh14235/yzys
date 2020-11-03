<template>
  <div class="common-wrapper">
    <AirTesting v-if="shows.includes('right01')"></AirTesting>
    <WaterTesting v-if="shows.includes('right02')"></WaterTesting>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Manage",
  components: {
    AirTesting: () => import("@/components/details/manage/AirTesting"),
    WaterTesting: () => import("@/components/details/manage/WaterTesting")
  },
  computed: {
    ...mapState(["dispose"]),
    shows() {
      return this.dispose.Manage;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
