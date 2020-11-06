<template>
  <div class="common-box">
    <div class="common-title">费用节省</div>
    <div class="charge-wrapper">
      <div class="charge-all">
        <div class="charge-icon"></div>
        <div class="charge-detail">
          <div class="charge-title">本月节省费用</div>
          <div class="charge-num">{{ allCharge }}元</div>
        </div>
      </div>
      <div class="charge-list">
        <div
          class="charge-item"
          v-for="(item, index) of chargeList"
          :key="index"
        >
          <div class="charge-icon"></div>
          <div class="charge-detail">
            <div class="charge-title">{{ item.title }}</div>
            <div class="charge-num">{{ item.num }}元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChargeSave",
  data() {
    return {
      chargeList: [],
      allCharge: 0
    };
  },
  methods: {
    getChargeNum() {
      this.allCharge = 2000;
      this.chargeList = [
        {
          icon: "",
          title: "电",
          num: 500
        },
        {
          icon: "",
          title: "热水",
          num: 500
        },
        {
          icon: "",
          title: "冷",
          num: 500
        },
        {
          icon: "",
          title: "热",
          num: 500
        }
      ];
    }
  },
  mounted() {
    this.getChargeNum();
  }
};
</script>

<style lang="stylus" scoped>
.charge-wrapper >>> .charge-all, .charge-wrapper >>> .charge-item
  display flex
  align-items: center
  .charge-icon
    width: 2vh
    height: 2vh
    background: #ddd
.charge-wrapper
  .charge-all
    .charge-icon
      width: 3vh
      height: 3vh
  .charge-list
    display flex
    align-items: center
    flex-wrap wrap
    .charge-item
      flex: 0 0 50%
      width: 50%
</style>
