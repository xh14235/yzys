<template>
  <div class="common-box common-box-bottom">
    <div class="common-title">
      <img src="../../../assets/img/analysis-title1.png" alt="" />
    </div>
    <div class="charge-wrapper">
      <div class="charge-all">
        <div class="charge-all-icon">
          <img
            src="../../../assets/img/circle.png"
            alt=""
            class="outer rotate"
          />
          <img src="../../../assets/img/money.png" alt="" class="inner" />
        </div>
        <div class="charge-all-detail">
          <div class="charge-all-title">本月节省费用</div>
          <span class="charge-all-num num">{{
            parseInt(allCharge).toLocaleString()
          }}</span
          >元
        </div>
      </div>
      <div class="charge-list">
        <div
          class="charge-item"
          v-for="(item, index) of chargeList"
          :key="index"
        >
          <div class="charge-icon">
            <img :src="item.icon" alt="" />
          </div>
          <div class="charge-detail">
            <div class="charge-title">{{ item.title }}</div>
            <div class="charge-num">
              <span class="num">{{ parseInt(item.num).toLocaleString() }}</span
              >元
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 节省费用数据,数据从vuex中取得,接口在Home.vue中调用
// import { getSavings } from "@/http/api";
import { mapState } from "vuex";
export default {
  name: "ChargeSave",
  // data() {
  //   return {
  //     chargeList: [],
  //     allCharge: 0
  //     // timer: null,
  //     // interval: 60000
  //   };
  // },
  computed: {
    ...mapState({
      allCharge: state => state.allCharge,
      chargeList: state => state.chargeList
    })
  },
  methods: {
    // getChargeNum() {
    //   getSavings().then(res => {
    //     let data = res.data;
    //     this.allCharge = Math.round(data.Total);
    //     this.chargeList = [
    //       {
    //         title: "电",
    //         icon: require("../../../assets/img/analysis-electric.png"),
    //         num: Math.round(data.Electricity)
    //       },
    //       {
    //         title: "热水",
    //         icon: require("../../../assets/img/analysis-hotwater.png"),
    //         num: Math.round(data.HotWater)
    //       },
    //       {
    //         title: "冷",
    //         icon: require("../../../assets/img/analysis-cold.png"),
    //         num: Math.round(data.Cold)
    //       },
    //       {
    //         title: "热",
    //         icon: require("../../../assets/img/analysis-hot.png"),
    //         num: Math.round(data.Hot)
    //       }
    //     ];
    //   });
    // }
  },
  mounted() {
    // this.getChargeNum();
    // setInterval(() => {
    //   this.getChargeNum();
    // }, 10000);
    // this.timer = setInterval(() => {
    //   this.getChargeNum();
    // }, this.interval);
  }
  // activated() {
  //   this.getChargeNum();
  //   this.timer = setInterval(() => {
  //     this.getChargeNum();
  //   }, this.interval);
  // },
  // deactivated() {
  //   clearInterval(this.timer);
  //   this.timer = null;
  // }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.charge-wrapper
  min-height: 26.5784vh
  .charge-all
    margin-top: 1.388889vh
    display: flex
    align-items: center
    .charge-all-icon
      width: 10vh
      height: 10vh
      position: relative
      margin-right: 1vw
      .outer
        width: 100%
        height: 100%
        vertical-align: top
        position: absolute
        top: 0
        left: 0
      .inner
        width: 2.08333vw
        height: 3.148vh
        vertical-align: top
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-1.041667vw, -1.574vh)
    .charge-all-detail
      .charge-all-num
        font-size: 48px
        color: $green
  .charge-list
    display: flex
    align-items: center
    flex-wrap: wrap
    .charge-item
      flex: 0 0 50%
      width: 50%
      display: flex
      align-items: center
      // margin-top: 2vh
      // padding-left: 2vw
      padding: 1vh 0 1vh 2vw
      &:nth-child(odd)
        border-right: 1px solid rgba(255, 255, 255, 0.5)
      .charge-icon
        width: 2.4074vh
        height: 2.4074vh
        margin-right: 0.667vw
        img
          width: 100%
          height: 100%
      .charge-detail
        .charge-num
          .num
            color: $green
            font-size: $font32
</style>
