<template>
  <div class="common-wrapper">
    <EnergyAll v-if="shows.includes('left01')"></EnergyAll>
    <StatisticsElectric
      v-if="shows.includes('left02')"
      :echarts="echarts1"
    ></StatisticsElectric>
    <StatisticsHotWater
      v-if="shows.includes('left03')"
      :echarts="echarts2"
    ></StatisticsHotWater>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
import { getElectricNum, getSingleEnergyNum } from "@/http/api";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Supply",
  components: {
    EnergyAll: () => import("@/components/details/supply/EnergyAll"),
    StatisticsElectric: () =>
      import("@/components/details/supply/StatisticsElectric"),
    StatisticsHotWater: () =>
      import("@/components/details/supply/StatisticsHotWater")
  },
  data() {
    return {
      echarts1: {},
      echarts2: {},
      timer: null,
      interval: 60000
    };
  },
  computed: {
    ...mapState({
      dispose: state => state.dispose,
      yellow: state => state.color.yellow,
      green: state => state.color.green
    }),
    shows() {
      return this.dispose.Supply;
    }
  },
  methods: {
    ...mapMutations(["changeMapIconHeight"]),
    // 获取供电统计echarts图数据
    getEchartsData1() {
      getElectricNum().then(res => {
        let data = res.data.DISTRIBUTED.slice(-24);
        let xData = data.map(item => {
          return item.hourValue - 1;
        });
        let yData = data.map(item => {
          return item.value;
        });
        this.echarts1 = {
          id: "statisticsElectric",
          title: "",
          legendShow: false,
          legendData: ["供电统计"],
          color: [this.green],
          areaColor: true,
          smooth: true,
          xData: xData,
          yName: "(kWh) ",
          data: [yData]
        };
      });
    },
    // 获取共热水统计echarts图数据
    getEchartsData2() {
      getSingleEnergyNum({
        type: "HOT_WATER"
      }).then(res => {
        let data = res.data.slice(-24);
        let xData = data.map(item => {
          return item.hourValue - 1;
        });
        let yData = data.map(item => {
          return item.value;
        });
        this.echarts2 = {
          id: "statisticsHotWater",
          title: "",
          legendShow: false,
          legendData: ["供热水统计"],
          color: [this.yellow],
          areaColor: true,
          smooth: true,
          xData: xData,
          yName: "(kWh) ",
          data: [yData]
        };
      });
    }
  },
  mounted() {
    setTimeout(() => {
      // 获取左侧页面位置及高度，使地图控制按钮高度与左侧页面底部对齐
      let line = this.$refs.line;
      let height =
        document.body.clientHeight - line.getBoundingClientRect().top;
      this.changeMapIconHeight(height);
    }, 1000);
    this.getEchartsData1();
    this.getEchartsData2();
    this.timer = setInterval(() => {
      this.getEchartsData1();
      this.getEchartsData2();
    }, this.interval);
  },
  // activated() {
  //   setTimeout(() => {
  //     let line = this.$refs.line;
  //     let height =
  //       document.body.clientHeight - line.getBoundingClientRect().top;
  //     this.changeMapIconHeight(height);
  //   }, 1000);
  //   this.getEchartsData1();
  //   this.getEchartsData2();
  //   this.timer = setInterval(() => {
  //     this.getEchartsData1();
  //     this.getEchartsData2();
  //   }, this.interval);
  // },
  // deactivated() {
  //   clearInterval(this.timer);
  //   this.timer = null;
  // },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

<style lang="stylus" scoped></style>
