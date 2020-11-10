<template>
  <div class="common-box common-box-bottom">
    <div class="common-title">
      <img src="../../../assets/img/consume-title1.png" alt="" />
    </div>
    <div class="energy-list">
      <div class="energy-item" v-for="(item, index) of energyList" :key="index">
        <div class="energy-icon">
          <img :src="item.icon" alt="" />
        </div>
        <div class="energy-info">
          <div class="energy-title">{{ item.title }}</div>
          <div class="energy-num">
            <span class="num">{{ item.num }}</span
            >kWh
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getConsumerAllEnergyNum } from "@/http/api";
export default {
  name: "EnergyAll",
  data() {
    return {
      energyList: []
    };
  },
  methods: {
    getList() {
      getConsumerAllEnergyNum().then(({ data }) => {
        this.energyList = [
          {
            title: "用电",
            icon: require("../../../assets/img/supply-electric.png"),
            num: Math.floor(data.data.ELECTRICITY)
          },
          {
            title: "用热水",
            icon: require("../../../assets/img/supply-hotwater.png"),
            num: Math.floor(data.data.HOT_WATER)
          },
          {
            title: "用冷",
            icon: require("../../../assets/img/supply-cold.png"),
            num: Math.floor(data.data.COLD)
          },
          {
            title: "用热",
            icon: require("../../../assets/img/supply-hot.png"),
            num: Math.floor(data.data.HOT)
          }
        ];
      });
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
  min-height: 16vh
  display: flex
  flex-wrap: wrap
  justify-content: flex-start
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
