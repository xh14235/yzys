<template>
  <div class="common-box">
    <div class="common-title">
      <img src="../../../assets/img/manage-title4.png" alt="" />
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts" v-if="echarts.id"></Eline>
    </div>
    <div class="info-wrapper">
      <div class="info-box">
        <img class="info-img" src="../../../assets/img/ph.png" alt="" />
        <div class="info-detail">
          PH值
          <div><span class="num">7.1</span></div>
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
          <div><span class="num">12</span><span>℃</span></div>
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
          <div><span class="num">3.1</span><span>m</span></div>
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
    // 获取水质数据
    getEchartsData() {
      let date = new Date();
      let hour = date.getHours();
      let xData = [];
      let data = [];
      for (let i = 1; i <= hour; i++) {
        xData.push(i);
        data.push(Math.floor(Math.random() * 30));
      }
      this.echarts = {
        id: "shuizhi",
        title: "水质分析COD",
        legendShow: false,
        legendData: ["外来电 0kW"],
        color: ["white"],
        areaColor: true,
        smooth: true,
        xData: xData,
        yName: "(mg/L) ",
        data: [data]
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
  height: 20vh
.info-wrapper
  display: flex
  justify-content: space-between
  align-items: center
  .short-line
    height: 7.13vh
    width: 1px
  .info-box
    flex: 0 0 25%
    width: 25%
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
        font-size: $font30
</style>
