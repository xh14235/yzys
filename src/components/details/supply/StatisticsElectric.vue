<template>
  <div class="common-box common-box-bottom">
    <div class="common-title">
      <img src="../../../assets/img/supply-title2.png" alt="" />
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts" v-if="echarts.id"></Eline>
    </div>
  </div>
</template>

<script>
// 供电统计
export default {
  name: "StatisticsElectric",
  props: {
    echarts: Object
  },
  components: {
    Eline: () => import("@/components/echarts/Eline")
  }
};
</script>

<style lang="stylus" scoped></style>
