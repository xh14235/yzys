<template>
  <div class="common-wrapper">
    <EnergyDirection v-if="shows.includes('right01')"></EnergyDirection>
    <StatisticsCold
      v-if="shows.includes('right02')"
      :echarts="echarts1"
    ></StatisticsCold>
    <StatisticsHot
      v-if="shows.includes('right03')"
      :echarts="echarts2"
    ></StatisticsHot>
  </div>
</template>

<script>
import { getConsumerEnergyNum } from "@/http/api";
import { mapState } from "vuex";
export default {
  name: "Consume",
  data() {
    return {
      echarts1: {},
      echarts2: {},
      timer: null,
      interval: 60000
    };
  },
  components: {
    EnergyDirection: () =>
      import("@/components/details/consume/EnergyDirection"),
    StatisticsCold: () => import("@/components/details/consume/StatisticsCold"),
    StatisticsHot: () => import("@/components/details/consume/StatisticsHot")
  },
  computed: {
    ...mapState({
      dispose: state => state.dispose,
      blue: state => state.color.blue,
      red: state => state.color.red
    }),
    shows() {
      return this.dispose.Consume;
    }
  },
  methods: {
    getEchartsData1() {
      getConsumerEnergyNum({
        type: "COLD"
      }).then(res => {
        let data = res.data.slice(-24);
        let xData = data.map(item => {
          return item.hourValue - 1;
        });
        let yData = data.map(item => {
          return item.value;
        });
        this.echarts1 = {
          id: "statisticsCold2",
          title: "",
          legendShow: false,
          legendData: ["供冷统计"],
          color: [this.blue],
          areaColor: true,
          smooth: true,
          xData: xData,
          yName: "(kWh) ",
          data: [yData]
        };
      });
    },
    getEchartsData2() {
      getConsumerEnergyNum({
        type: "HOT"
      }).then(res => {
        let data = res.data.slice(-24);
        let xData = data.map(item => {
          return item.hourValue - 1;
        });
        let yData = data.map(item => {
          return item.value;
        });
        this.echarts2 = {
          id: "statisticsHot2",
          title: "",
          legendShow: false,
          legendData: ["供热统计"],
          color: [this.red],
          areaColor: true,
          smooth: true,
          xData: xData,
          yName: "(kWh) ",
          data: [yData]
        };
      });
    }
  },
  activated() {
    this.getEchartsData1();
    this.getEchartsData2();
    this.timer = setInterval(() => {
      this.getEchartsData1();
      this.getEchartsData2();
    }, this.interval);
  },
  deactivated() {
    clearInterval(this.timer);
    this.timer = null;
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

<style lang="stylus" scoped></style>
