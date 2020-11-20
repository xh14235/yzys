<template>
  <div class="common-box common-box-bottom">
    <div class="common-title">
      <img src="../../../assets/img/consume-title2.png" alt="" />
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts" v-if="echarts.id"></Eline>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsElectric",
  props: {
    echarts: {}
  },
  components: {
    Eline: () => import("@/components/echarts/Eline")
  }
};
</script>

<style lang="stylus" scoped></style>
