<template>
  <div class="common-box">
    <div class="common-title">
      <img src="../../../assets/img/consume-title3.png" alt="" />
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts" v-if="echarts.id"></Eline>
    </div>
  </div>
</template>

<script>
import { getConsumerEnergyNum } from "@/http/api";
import { mapState } from "vuex";
export default {
  name: "StatisticsHotWater",
  data() {
    return {
      echarts: {}
    };
  },
  computed: {
    ...mapState({
      yellow: state => state.color.yellow
    })
  },
  components: {
    Eline: () => import("@/components/echarts/Eline")
  },
  methods: {
    getEchartsData() {
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
        this.echarts = {
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
  mounted() {
    this.getEchartsData();
  }
};
</script>

<style lang="stylus" scoped></style>
