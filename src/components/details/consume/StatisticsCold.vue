<template>
  <div class="common-box">
    <div class="common-title">供冷统计</div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts"></Eline>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsCold",
  data() {
    return {
      echarts: {
        id: "statisticsCold2",
        title: "",
        legendShow: true,
        legendData: ["外来电 0kW"],
        color: ["yellow"],
        areaColor: false,
        smooth: true,
        xData: [1, 2, 3, 4, 5],
        yName: "(kW) ",
        data: [[11, 32, 23, 42, 35]]
      }
    };
  },
  components: {
    Eline: () => import("@/components/echarts/Eline")
  }
};
</script>

<style lang="stylus" scoped></style>
