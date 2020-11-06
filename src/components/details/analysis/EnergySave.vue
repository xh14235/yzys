<template>
  <div class="common-box">
    <div class="common-title">能耗对比</div>
    <div class="month-box">
      <div class="month-item">
        <span>月份一</span>
        <el-date-picker v-model="month1" type="month" placeholder="选择月">
        </el-date-picker>
      </div>
      <div class="month-item">
        <span>月份二</span>
        <el-date-picker v-model="month2" type="month" placeholder="选择月">
        </el-date-picker>
      </div>
    </div>
    <div class="common-echarts-box">
      <Ebar :barData="echarts"></Ebar>
    </div>
  </div>
</template>

<script>
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
    ...mapState(["monthList"])
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
        color: ["red", "blue"],
        xData: ["电", "热水", "冷", "热"],
        data: [this.list1, this.list2]
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
    getMonthData(e, month) {
      let yearNum = new Date(month).getFullYear();
      let monthNum = new Date(month).getMonth() + 1;
      // axios,传入month请求数据
      let list = [];
      for (let i = 0; i < 4; i++) {
        list.push(Math.floor(Math.random() * 100));
      }
      if (e) {
        this.list2 = list;
        this.legend2 = yearNum + "-" + monthNum;
      } else {
        this.list1 = list;
        this.legend1 = yearNum + "-" + monthNum;
      }
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
.month-box
  display: flex
  align-items: center
  .month-item
    flex: 0 0 50%
    width: 50%
    display: flex
    align-items: center
    .el-date-editor
      flex: 0 0 60%
      width: 60%
</style>
