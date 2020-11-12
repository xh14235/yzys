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
      <Eline :lineData="echarts1" v-if="echarts1.id"></Eline>
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts2" v-if="echarts2.id"></Eline>
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts3" v-if="echarts3.id"></Eline>
    </div>
    <div class="common-echarts-box">
      <Eline :lineData="echarts4" v-if="echarts4.id"></Eline>
    </div>
  </div>
</template>

<script>
import { getEnergySavingTrend } from "@/http/api";
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
    getEchartsData(dateType, date) {
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      month = month > 9 ? month : "0" + month;
      let day = date.getDate();
      day = day > 9 ? day : "0" + day;
      date = year + "-" + month + "-" + day;
      getEnergySavingTrend({
        date,
        dateType
      }).then(res => {
        let data = res.data.data;
        let xData = data.Cold.map(item => {
          return item.commonValue;
        });
        let yData1 = data.Electricity.map(item => {
          return item.value;
        });
        let yData2 = data.HotWater.map(item => {
          return item.value;
        });
        let yData3 = data.Cold.map(item => {
          return item.value;
        });
        let yData4 = data.Hot.map(item => {
          return item.value;
        });
        this.echarts1 = {
          id: "echarts1",
          title: "节约电",
          legendShow: false,
          legendData: ["外来电"],
          color: [this.white],
          areaColor: true,
          smooth: true,
          xData: xData,
          yName: "(kWh)",
          data: [yData1]
        };
        this.echarts2 = {
          id: "echarts2",
          title: "节约热水",
          legendShow: false,
          legendData: ["外来电"],
          color: [this.white],
          areaColor: true,
          smooth: true,
          xData: xData,
          yName: "(kWh)",
          data: [yData2]
        };
        this.echarts3 = {
          id: "echarts3",
          title: "节约冷",
          legendShow: false,
          legendData: ["外来电"],
          color: [this.white],
          areaColor: true,
          smooth: true,
          xData: xData,
          yName: "(kWh)",
          data: [yData3]
        };
        this.echarts4 = {
          id: "echarts4",
          title: "节约热",
          legendShow: false,
          legendData: ["外来电"],
          color: [this.white],
          areaColor: true,
          smooth: true,
          xData: xData,
          yName: "(kWh)",
          data: [yData4]
        };
      });
    },
    changeTab(index) {
      this.curDate = index;
      if (this.curDate === 0) {
        this.getEchartsData("month", this.month1);
      } else {
        this.getEchartsData("day", this.day);
      }
    }
    // 获取当前月
    // getNowMonth() {
    //   let date = new Date();
    //   this.month = date.getMonth() + 1;
    // }
  },
  watch: {
    month1() {
      this.getEchartsData("month", this.month1);
    },
    day() {
      this.getEchartsData("day", this.day);
    }
  },
  mounted() {
    // this.getNowMonth();
    this.getEchartsData("month", this.month1);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.date-controller >>> .el-input__inner
  padding-left: 0.5vw !important
  padding-right: 0 !important
  background-color: transparent !important
  border: 1px solid transparent !important
  color: #fff
  height: 2.77778vh
  line-height: 2.77778vh
  background: rgba(255, 255, 255, 0.15) !important
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
        background-image: url('../../../assets/img/triangle.png')
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
      background-image: url('../../../assets/img/date-tab1.png')
      background-size: 100% 100%
      &.active
        background-image: url('../../../assets/img/date-tab2.png')
.common-echarts-box
  height: 16vh
</style>
