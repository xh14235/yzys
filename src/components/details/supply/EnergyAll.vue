<template>
  <div class="common-box common-box-bottom">
    <div class="common-title">
      <img src="../../../assets/img/supply-title1.png" alt="" />
    </div>
    <div class="energy-list">
      <div class="energy-item" v-for="(item, index) of energyList" :key="index">
        <div class="energy-icon">
          <img :src="item.icon" alt="" />
        </div>
        <div class="energy-info">
          <div class="energy-title">{{ item.title }}</div>
          <div class="energy-num">
            <span class="num">{{ parseInt(item.num).toLocaleString() }}</span
            >kWh
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "EnergyAll",
  data() {
    return {
      energyList: []
    };
  },
  computed: {
    ...mapState(["supplyData"])
  },
  methods: {
    // 获取左上累计功能数据
    getList() {
      this.energyList = [
        {
          title: "供电",
          icon: require("../../../assets/img/supply-electric.png"),
          num: Math.floor(this.supplyData.electricity) || 0
        },
        {
          title: "供热水",
          icon: require("../../../assets/img/supply-hotwater.png"),
          num: Math.floor(this.supplyData.hotWater) || 0
        },
        {
          title: "供冷",
          icon: require("../../../assets/img/supply-cold.png"),
          num: Math.floor(this.supplyData.cold) || 0
        },
        {
          title: "供热",
          icon: require("../../../assets/img/supply-hot.png"),
          num: Math.floor(this.supplyData.hot) || 0
        }
      ];
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.energy-list
  display: flex
  flex-wrap: wrap
  justify-content: flex-start
  min-height: 16vh
  .energy-item
    flex: 0 0 50%
    width: 50%
    display: flex
    align-items: center
    margin-top: 2.685vh
    .energy-icon
      width: 3.125vw
      height: 3.125vw
      margin-right: 0.667vw
      img
        width: 100%
        height: 100%
    .energy-info
      .energy-num
        .num
          font-size: $font22
          color: $green
</style>
