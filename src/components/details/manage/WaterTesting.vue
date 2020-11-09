<template>
  <div class="common-box">
    <div class="common-title">
      <img src="../../../assets/img/manage-title4.png" alt="" />
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts"></Eline>
    </div>
    <div class="info-wrapper">
      <div class="info-box">
        <img class="info-img" src="../../../assets/img/ph.png" alt="" />
        <div class="info-detail">
          PH值
          <div><span class="num">7</span></div>
        </div>
      </div>
      <img class="short-line" src="../../../assets/img/short-line.png" alt="" />
      <div class="info-box">
        <img
          class="info-img"
          src="../../../assets/img/water-temperature.png"
          alt=""
        />
        <div class="info-detail">
          水温
          <div><span class="num">7</span><span>℃</span></div>
        </div>
      </div>
      <img class="short-line" src="../../../assets/img/short-line.png" alt="" />
      <div class="info-box">
        <img
          class="info-img"
          src="../../../assets/img/water-level.png"
          alt=""
        />
        <div class="info-detail">
          水位
          <div><span class="num">7</span><span>m</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WaterTesting",
  components: {
    Eline: () => import("@/components/echarts/Eline")
  },
  data() {
    return {
      echarts: {}
    };
  },
  methods: {
    getEchartsData() {
      this.echarts = {
        id: "shuizhi",
        title: "水质分析COD",
        legendShow: false,
        legendData: ["外来电 0kW"],
        color: ["white"],
        areaColor: true,
        smooth: true,
        xData: [1, 2, 3, 4, 5],
        yName: "(mg/L) ",
        data: [[11, 32, 23, 42, 35]]
      };
    }
  },
  mounted() {
    this.getEchartsData();
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.common-echarts-box
  margin-top: 2.3148vh
.info-wrapper
  display: flex
  justify-content: space-between
  align-items: center
  .short-line
    height: 7.13vh
    width: 1px
  .info-box
    flex: 0 0 20%
    width: 20%
    display: flex
    align-items: center
    justify-content: space-between
    .info-img
      flex: 0 0 1.771vw
      width: 1.77vw
      height: 1.771vw
    .info-detail
      .num
        color: $green
        font-size: $font32
</style>
