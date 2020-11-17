<template>
  <div class="common-box">
    <div class="common-title">
      <img src="../../../assets/img/analysis-title2.png" alt="" />
    </div>
    <div class="month-box">
      <div class="month-item">
        <span>月份一</span>
        <el-date-picker v-model="month1" type="month" placeholder="选择月">
        </el-date-picker>
        <div class="triangle"></div>
      </div>
      <div class="month-item">
        <span>月份二</span>
        <el-date-picker v-model="month2" type="month" placeholder="选择月">
        </el-date-picker>
        <div class="triangle"></div>
      </div>
    </div>
    <div class="common-echarts-box">
      <Ebar :barData="echarts" v-if="echarts.id"></Ebar>
    </div>
  </div>
</template>

<script>
import { getEnergyComparison } from "@/http/api";
import { mapState } from "vuex";
export default {
  name: "EnergySave",
  data() {
    return {
      echarts: {},
      month1: "",
      month2: "",
      list1: [],
      list2: [],
      legend1: "上月",
      legend2: "本月"
    };
  },
  computed: {
    ...mapState({
      yellow: state => state.color.yellow,
      green: state => state.color.green
    })
  },
  components: {
    Ebar: () => import("@/components/echarts/Ebar")
  },
  methods: {
    getEchartsData() {
      this.echarts = {
        id: "energySave",
        title: "",
        legendShow: true,
        legendData: [this.legend1, this.legend2],
        color: [this.yellow, this.green],
        xData: ["电", "热水", "冷", "热"],
        data: [this.list1, this.list2],
        yName: "(kWh)"
      };
    },
    // 获取当前月份及上个月份
    getNowMonth() {
      this.month2 = new Date();
      let year = this.month2.getFullYear();
      let month = this.month2.getMonth();
      if (month === 0) {
        month = 12;
        year = year - 1;
      }
      this.month1 = new Date(year + "-" + month);
    },
    // 获取单个月份的数据，数组
    getMonthData(e, date) {
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      month = month > 9 ? month : "0" + month;
      let day = date.getDate();
      day = day > 9 ? day : "0" + day;
      date = year + "-" + month + "-" + day;
      getEnergyComparison({
        date,
        dateType: "month"
      }).then(res => {
        let data = res.data;
        let list = [data.Electricity, data.HotWater, data.Cold, data.Hot];
        let yearNum = new Date(date).getFullYear();
        let monthNum = new Date(date).getMonth() + 1;
        if (e) {
          this.list2 = list;
          this.legend2 = yearNum + "-" + monthNum;
        } else {
          this.list1 = list;
          this.legend1 = yearNum + "-" + monthNum;
        }
      });
    },
    getYearMonth(d1, d2) {
      let date1 = new Date(d1);
      let year1 = date1.getFullYear();
      let month1 = date1.getMonth();
      let date2 = new Date(d2);
      let month2 = date2.getMonth();
      let year2 = date2.getFullYear();
      return year1 + "" + month1 === year2 + "" + month2;
    }
  },
  watch: {
    month1() {
      if (this.getYearMonth(this.month1, this.month2)) {
        return;
      } else {
        this.getMonthData(0, this.month1);
      }
    },
    month2() {
      if (this.getYearMonth(this.month2, this.month1)) {
        return;
      } else {
        this.getMonthData(1, this.month2);
      }
    },
    list1() {
      this.getEchartsData();
    },
    list2() {
      this.getEchartsData();
    }
  },
  mounted() {
    this.getNowMonth();
  }
};
</script>

<style lang="stylus" scoped>
.month-box >>> .el-input__inner
  padding-left: 0.5vw !important
  padding-right: 0 !important
  background-color: transparent !important
  border: 1px solid transparent !important
  color: #fff
  height: 2.77778vh
  line-height: 2.77778vh
  background: rgba(255, 255, 255, 0.15) !important
.month-box >>> .el-input__prefix, .month-box >>> .el-input__suffix
  display: none
.month-box
  display: flex
  align-items: center
  justify-content: space-between
  margin: 1.388889vh 0
  .month-item
    flex: 0 0 48%
    width: 48%
    display: flex
    align-items: center
    justify-content: space-between
    position: relative
    .el-date-editor
      flex: 0 0 70%
      width: 70%
      z-index: 1
    .triangle
      width: 2.77778vh
      height: 2.77778vh
      background-image: url('../../../assets/img/triangle.png')
      background-size: 100% 100%
      position: absolute
      right: 0
      top: 0
.common-echarts-box
  height: 20vh
</style>
