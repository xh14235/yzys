<template>
  <div class="common-box">
    <div class="common-title">
      <img src="../../../assets/img/supply-title6.png" alt="" />
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts" v-if="echarts.id"></Eline>
    </div>
  </div>
</template>

<script>
import { getSingleEnergyNum } from "@/http/api";
import { mapState } from "vuex";
export default {
  name: "StatisticsElectric",
  data() {
    return {
      echarts: {}
    };
  },
  computed: {
    ...mapState({
      red: state => state.color.red
    })
  },
  components: {
    Eline: () => import("@/components/echarts/Eline")
  },
  methods: {
    getEchartsData() {
      getSingleEnergyNum({
        type: "HOT"
      }).then(res => {
        let data = res.data.data.slice(-24);
        let xData = data.map(item => {
          return item.hourValue - 1;
        });
        let yData = data.map(item => {
          return item.value;
        });
        this.echarts = {
          id: "statisticsHot",
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
  mounted() {
    this.getEchartsData();
  }
};
</script>

<style lang="stylus" scoped></style>
