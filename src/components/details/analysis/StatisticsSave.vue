<template>
  <div class="common-box">
    <div class="common-title">省钱统计</div>
    <div class="date-controller">
      <div class="controller-item date-wrapper">
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
        </div>
        <div class="tab-box" v-show="curDate === 1">
          <el-date-picker v-model="day" type="date" placeholder="选择日期">
          </el-date-picker>
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
    ...mapState(["monthList"])
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
        legendShow: true,
        legendData: ["外来电"],
        color: ["yellow"],
        areaColor: false,
        smooth: true,
        xData: [1, 2, 3, 4, 5],
        yName: "(kW) ",
        data: [[11, 32, 23, 42, 35]]
      };
      this.echarts2 = {
        id: "echarts2",
        title: "",
        legendShow: true,
        legendData: ["外来电"],
        color: ["yellow"],
        areaColor: false,
        smooth: true,
        xData: [1, 2, 3, 4, 5],
        yName: "(kW) ",
        data: [[11, 32, 23, 42, 35]]
      };
      this.echarts3 = {
        id: "echarts3",
        title: "",
        legendShow: true,
        legendData: ["外来电"],
        color: ["yellow"],
        areaColor: false,
        smooth: true,
        xData: [1, 2, 3, 4, 5],
        yName: "(kW) ",
        data: [[11, 32, 23, 42, 35]]
      };
      this.echarts4 = {
        id: "echarts4",
        title: "",
        legendShow: true,
        legendData: ["外来电"],
        color: ["yellow"],
        areaColor: false,
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
.common-echarts-box
  height: 15vh
.date-controller
  display: flex
  justify-content: space-between
  align-items: center
  .controller-item
    flex: 0 0 50%
    width: 50%
    &.date-wrapper
      display: flex
      align-items: center
      .date-item
        cursor: pointer
        &.active
          color: yellow
    .tab-box
      position: relative
</style>
