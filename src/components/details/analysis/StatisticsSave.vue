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
          <el-date-picker
            v-model="month1"
            type="month"
            placeholder="选择月"
            :picker-options="pickerOptions1"
          >
          </el-date-picker>
          <div class="triangle"></div>
        </div>
        <div class="tab-box" v-show="curDate === 1">
          <el-date-picker
            v-model="day"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions2"
          >
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
      curDate: 1,
      month1: new Date(),
      day: new Date(),
      pickerOptions1: {
        disabledDate: time => {
          return time.getTime() > Date.now() - 8.64e6;
        }
      },
      pickerOptions2: {
        disabledDate: time => {
          return time.getTime() > Date.now() - 8.64e6;
        }
      }
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
    // 获取echarts图数据
    getEchartsData(dateType, date, type) {
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      month = month > 9 ? month : "0" + month;
      let day = date.getDate();
      day = day > 9 ? day : "0" + day;
      date = year + "-" + month + "-" + day;
      getEnergySavingTrend({
        date,
        dateType,
        type
      }).then(res => {
        let data = res.data;
        let len = data.length;
        let month30 = [4, 6, 9, 11];
        let month31 = [1, 3, 5, 7, 8, 10, 12];
        let forNum = 0;
        let xData = [];
        let yData = [];
        if (!len) {
          if (dateType === "day") {
            forNum = 24;
          } else {
            if (month30.includes(Number(month))) {
              forNum = 30;
            } else if (month31.includes(Number(month))) {
              forNum = 31;
            } else {
              if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                forNum = 29;
              } else {
                forNum = 28;
              }
            }
          }
          for (let i = 1; i <= forNum; i++) {
            xData.push(i);
            yData.push(0);
          }
        } else {
          let first = data[0].commonValue;
          let last = data[data.length - 1].commonValue;
          yData = data.map(item => {
            return item.value;
          });
          if (dateType === "day") {
            for (let i = 1; i < 25; i++) {
              xData.push(i);
            }
            for (let i = last + 1; i < 25; i++) {
              yData.push(0);
            }
          } else {
            if (month30.includes(Number(month))) {
              forNum = 30;
            } else if (month31.includes(Number(month))) {
              forNum = 31;
            } else {
              if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                forNum = 29;
              } else {
                forNum = 28;
              }
            }
            for (let i = 1; i <= forNum; i++) {
              xData.push(i);
            }
            for (let i = last + 1; i <= forNum; i++) {
              yData.push(0);
            }
            for (let i = first - 1; i > 0; i--) {
              yData.unshift(0);
            }
          }
        }
        switch (type) {
          case "ELECTRICITY":
            this.echarts1 = {
              id: "echarts1",
              title: "节约电",
              legendShow: false,
              legendData: ["节约电"],
              color: [this.white],
              areaColor: true,
              smooth: true,
              xData: xData,
              yName: "(kWh)",
              data: [yData]
            };
            break;
          case "HOT_WATER":
            this.echarts2 = {
              id: "echarts2",
              title: "节约热水",
              legendShow: false,
              legendData: ["节约热水"],
              color: [this.white],
              areaColor: true,
              smooth: true,
              xData: xData,
              yName: "(kWh)",
              data: [yData]
            };
            break;
          case "COLD":
            this.echarts3 = {
              id: "echarts3",
              title: "节约冷",
              legendShow: false,
              legendData: ["节约冷"],
              color: [this.white],
              areaColor: true,
              smooth: true,
              xData: xData,
              yName: "(kWh)",
              data: [yData]
            };
            break;
          case "HOT":
            this.echarts4 = {
              id: "echarts5",
              title: "节约热",
              legendShow: false,
              legendData: ["节约热"],
              color: [this.white],
              areaColor: true,
              smooth: true,
              xData: xData,
              yName: "(kWh)",
              data: [yData]
            };
            break;
          default:
            break;
        }
      });
    },
    // 改变日期类型,按月或者按天,获取数据
    changeTab(index) {
      this.curDate = index;
      if (this.curDate === 0) {
        this.getEchartsData("month", this.month1, "COLD");
        this.getEchartsData("month", this.month1, "ELECTRICITY");
        this.getEchartsData("month", this.month1, "HOT");
        this.getEchartsData("month", this.month1, "HOT_WATER");
      } else {
        this.getEchartsData("day", this.day, "COLD");
        this.getEchartsData("day", this.day, "ELECTRICITY");
        this.getEchartsData("day", this.day, "HOT");
        this.getEchartsData("day", this.day, "HOT_WATER");
      }
    }
  },
  watch: {
    month1() {
      this.getEchartsData("month", this.month1, "COLD");
      this.getEchartsData("month", this.month1, "ELECTRICITY");
      this.getEchartsData("month", this.month1, "HOT");
      this.getEchartsData("month", this.month1, "HOT_WATER");
    },
    day() {
      this.getEchartsData("day", this.day, "COLD");
      this.getEchartsData("day", this.day, "ELECTRICITY");
      this.getEchartsData("day", this.day, "HOT");
      this.getEchartsData("day", this.day, "HOT_WATER");
    }
  },
  mounted() {
    // this.getNowMonth();
    this.getEchartsData("day", this.day, "COLD");
    this.getEchartsData("day", this.day, "ELECTRICITY");
    this.getEchartsData("day", this.day, "HOT");
    this.getEchartsData("day", this.day, "HOT_WATER");
    // setInterval(() => {
    //   this.getEchartsData("month", this.month1, "COLD");
    //   this.getEchartsData("month", this.month1, "ELECTRICITY");
    //   this.getEchartsData("month", this.month1, "HOT");
    //   this.getEchartsData("month", this.month1, "HOT_WATER");
    // }, 10000);
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
