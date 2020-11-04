<template>
  <div class="common-box">
    <div class="common-title">供热统计</div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts" v-if="echarts.id"></Eline>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsHot",
  data() {
    return {
      echarts: {}
    };
  },
  components: {
    Eline: () => import("@/components/echarts/Eline")
  },
  methods: {
    getEchartsData() {
      this.echarts = {
        id: "statisticsHot",
        title: "",
        legendShow: true,
        legendData: ["外来电"],
        color: ["yellow"],
        areaColor: false,
        smooth: true,
        xData: [1, 2, 3, 4, 5],
        yName: "(kW) ",
        data: [[11, 32, 23, 42, 35]]
      };
    }
  },
  mounted() {
    this.getEchartsData();
  }
};
</script>

<style lang="stylus" scoped></style>
