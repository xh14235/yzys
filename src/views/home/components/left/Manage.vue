<template>
  <div class="common-wrapper">
    <ParkInfo v-if="shows.includes('left01')"></ParkInfo>
    <AbnormalMonitoring v-if="shows.includes('left02')"></AbnormalMonitoring>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  }
};
</script>

<style lang="stylus" scoped></style>
