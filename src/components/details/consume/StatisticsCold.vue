<template>
  <div class="common-box common-box-bottom">
    <div class="common-title">
      <img src="../../../assets/img/consume-title5.png" alt="" />
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts" v-if="echarts.id"></Eline>
    </div>
  </div>
</template>

<script>
// 供冷统计
export default {
  name: "StatisticsCold",
  props: {
    echarts: {}
  },
  components: {
    Eline: () => import("@/components/echarts/Eline")
  }
};
</script>

<style lang="stylus" scoped></style>
