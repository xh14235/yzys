<template>
  <div>
    <Park v-if="shows.includes('left01')"></Park>
    <Test v-if="shows.includes('left02')"></Test>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Manage",
  components: {
    Park: () => import("@/components/details/Park"),
    Test: () => import("@/components/details/Test")
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
