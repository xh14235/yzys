<template>
  <div class="common-wrapper" @click="mutddd(abc)">
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
// import {mapMutations} from "vuex"
import { getConsumerEnergyNum } from "@/http/api";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Consume",
  components: {
    EnergyAll: () => import("@/components/details/consume/EnergyAll"),
    StatisticsElectric: () =>
      import("@/components/details/consume/StatisticsElectric"),
    StatisticsHotWater: () =>
      import("@/components/details/consume/StatisticsHotWater")
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
      return this.dispose.Consume;
    }
  },
  methods: {
    ...mapMutations(["changeMapIconHeight", "mutddd"]),
    getEchartsData1() {
      getConsumerEnergyNum({
        type: "ELECTRICITY"
      }).then(res => {
        let data = res.data.slice(-24);
        let xData = data.map(item => {
          return item.hourValue - 1;
        });
        let yData = data.map(item => {
          return item.value;
        });
        this.echarts1 = {
          id: "statisticsElectric2",
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
    getEchartsData2() {
      getConsumerEnergyNum({
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
          id: "statisticsHotWater2",
          title: "",
          legendShow: false,
          legendData: ["供电统计"],
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
  activated() {
    setTimeout(() => {
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
