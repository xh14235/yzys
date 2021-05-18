<template>
  <div class="common-box">
    <div class="common-title">
      <img src="../../../assets/img/consume-title6.png" alt="" />
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts" v-if="echarts.id"></Eline>
    </div>
  </div>
</template>

<script>
// 供热统计
export default {
  name: "StatisticsHot",
  props: {
    echarts: {}
  },
  components: {
    Eline: () => import("@/components/echarts/Eline")
  }
};
</script>

<style lang="stylus" scoped></style>
