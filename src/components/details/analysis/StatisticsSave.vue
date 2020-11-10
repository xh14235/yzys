<template>
  <div class="common-box">
    <div class="common-title">
      <img src="../../../assets/img/analysis-title3.png" alt="" />
    </div>
    <div class="date-controller">
      <div class="date-wrapper">
        <div
          class="date-item"
          :class="{ active: curDate === item.val }"
          v-for="(item, index) of dateList"
          :key="index"
          @click="changeTab(index)"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="controller-item">
        <div class="tab-box" v-show="curDate === 0">
          <el-date-picker v-model="month1" type="month" placeholder="选择月">
          </el-date-picker>
          <div class="triangle"></div>
        </div>
        <div class="tab-box" v-show="curDate === 1">
          <el-date-picker v-model="day" type="date" placeholder="选择日期">
          </el-date-picker>
          <div class="triangle"></div>
        </div>
      </div>
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts1"></Eline>
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts2"></Eline>
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts3"></Eline>
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts4"></Eline>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "StatisticsSave",
  data() {
    return {
      echarts1: {},
      echarts2: {},
      echarts3: {},
      echarts4: {},
      dateList: [
        {
          title: "按月",
          val: 0
        },
        {
          title: "按天",
          val: 1
        }
      ],
      curDate: 0,
      month1: new Date(),
      day: new Date()
    };
  },
  computed: {
    ...mapState({
      monthList: state => state.monthList,
      white: state => state.color.white
    })
  },
  components: {
    Eline: () => import("@/components/echarts/Eline")
  },
  methods: {
    getEchartsData(month) {
      console.log(month);
      this.echarts1 = {
        id: "echarts1",
        title: "",
        legendShow: false,
        legendData: ["外来电"],
        color: [this.white],
        areaColor: true,
        smooth: true,
        xData: [1, 2, 3, 4, 5],
        yName: "(kW) ",
        data: [[11, 32, 23, 42, 35]]
      };
      this.echarts2 = {
        id: "echarts2",
        title: "",
        legendShow: false,
        legendData: ["外来电"],
        color: [this.white],
        areaColor: true,
        smooth: true,
        xData: [1, 2, 3, 4, 5],
        yName: "(kW) ",
        data: [[11, 32, 23, 42, 35]]
      };
      this.echarts3 = {
        id: "echarts3",
        title: "",
        legendShow: false,
        legendData: ["外来电"],
        color: [this.white],
        areaColor: true,
        smooth: true,
        xData: [1, 2, 3, 4, 5],
        yName: "(kW) ",
        data: [[11, 32, 23, 42, 35]]
      };
      this.echarts4 = {
        id: "echarts4",
        title: "",
        legendShow: false,
        legendData: ["外来电"],
        color: [this.white],
        areaColor: true,
        smooth: true,
        xData: [1, 2, 3, 4, 5],
        yName: "(kW) ",
        data: [[11, 32, 23, 42, 35]]
      };
    },
    changeTab(index) {
      this.curDate = index;
      this.getEchartsData(this.month);
    },
    // 获取当前月
    getNowMonth() {
      let date = new Date();
      this.month = date.getMonth() + 1;
    }
  },
  watch: {
    month1() {
      this.getEchartsData(this.month1);
    },
    day() {
      this.getEchartsData(this.day);
    }
  },
  mounted() {
    this.getNowMonth();
    this.getEchartsData(this.month);
  }
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/css/common.styl"
.date-controller >>> .el-input__inner
  padding-left: 0.5vw!important
  padding-right: 0!important
  background-color: transparent!important
  border: 1px solid transparent!important
  color: #fff
  height: 2.77778vh
  line-height: 2.77778vh
  background: rgba(255, 255, 255, 0.15)!important
.date-controller >>> .el-input__prefix, .date-controller >>> .el-input__suffix
  display: none
.date-controller
  margin-top: 1.388889vh
  display: flex
  justify-content: space-between
  align-items: center
  .controller-item
    flex: 0 0 40%
    width: 40%
    .tab-box
      width: 100%
      position: relative
      .el-date-editor
        width: 100%
        z-index: 1
      .triangle
        width: 2.77778vh
        height: 2.77778vh
        background-image: url("../../../assets/img/triangle.png")
        background-size: 100% 100%
        position: absolute
        right: 0
        top: 0
  .date-wrapper
    display: flex
    align-items: center
    .date-item
      width: 4.16667vw
      height: 2.77778vh
      line-height: 2.77778vh
      text-align: center
      cursor: pointer
      font-size: $font16
      background-image: url("../../../assets/img/date-tab1.png")
      background-size: 100% 100%
      &.active
        background-image: url("../../../assets/img/date-tab2.png")
.common-echarts-box
  height: 16vh
</style>
