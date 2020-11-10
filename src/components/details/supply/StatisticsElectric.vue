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
import { getElectricNum } from "@/http/api";
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
      green: state => state.color.green
    })
  },
  components: {
    Eline: () => import("@/components/echarts/Eline")
  },
  methods: {
    getEchartsData() {
      getElectricNum().then(res => {
        let data = res.data.data.DISTRIBUTED.slice(-24);
        let xData = data.map(item => {
          return item.hourValue - 1;
        });
        let yData = data.map(item => {
          return item.value;
        });
        this.echarts = {
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
    }
  },
  mounted() {
    this.getEchartsData();
  }
};
</script>

<style lang="stylus" scoped></style>
