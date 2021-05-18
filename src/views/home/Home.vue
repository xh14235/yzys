<template>
  <div class="home-wrapper">
    <!-- <div class="home-header-wrapper">
      <CommonHeader></CommonHeader>
    </div> -->
    <div class="home-main-wrapper">
      <HomeLeft></HomeLeft>
      <Map></Map>
      <MapController></MapController>
      <Monitor v-show="monitorShow"></Monitor>
      <Floor v-show="floorShow"></Floor>
      <HomeRight></HomeRight>
      <CubeLeft></CubeLeft>
      <CubeRight></CubeRight>
      <CubeTop></CubeTop>
    </div>
    <div class="home-footer-wrapper" v-show="!cubeShow">
      <HomeTab></HomeTab>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import {
  getAllEnergyNum,
  getConsumerAllEnergyNum,
  getSavings,
  login
} from "@/http/api";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState({
      monitorShow: state => state.map.monitorShow,
      floorShow: state => state.map.floorShow,
      cubeShow: state => state.map.cubeShow
    })
  },
  components: {
    HomeLeft: () => import("./components/HomeLeft"),
    HomeRight: () => import("./components/HomeRight"),
    HomeTab: () => import("./components/HomeTab"),
    MapController: () => import("@/components/MapController"),
    Monitor: () => import("@/components/Monitor"),
    Floor: () => import("@/components/Floor"),
    Map: () => import("@/components/three/Map"),
    CubeLeft: () => import("@/components/CubeLeft"),
    CubeRight: () => import("@/components/CubeRight"),
    CubeTop: () => import("@/components/CubeTop")
  },
  data() {
    return {
      timer1: null,
      interval1: 61023,
      timer2: null,
      interval2: 10000
    };
  },
  methods: {
    ...mapMutations([
      "mutSupplyData",
      "mutConsumeData",
      "mutLogin",
      "changeLineArray",
      "mutChargeNum"
    ]),
    // 获取能源供给页面冷热水点数据，储存，然后左右两侧使用，避免请求两次接口
    getSupplyList() {
      getAllEnergyNum().then(res => {
        this.mutSupplyData(res.data);
      });
      // axios
      //   .get("http://116.236.30.222:9020/energy/api/supply/accumulative")
      //   .then(res => {
      //     console.log(res);
      //   });
    },
    // 获取能源供给消费冷热水点数据，储存，然后左右两侧使用，避免请求两次接口
    getConsumeList() {
      getConsumerAllEnergyNum().then(res => {
        this.mutConsumeData(res.data);
      });
    },
    // 获取能源分析页面费用节省数据
    getChargeNum() {
      getSavings().then(res => {
        let data = res.data;
        this.mutChargeNum({
          allCharge: Math.round(data.Total),
          chargeList: [
            {
              title: "电",
              icon: require("../../assets/img/analysis-electric.png"),
              num: Math.round(data.Electricity)
            },
            {
              title: "热水",
              icon: require("../../assets/img/analysis-hotwater.png"),
              num: Math.round(data.HotWater)
            },
            {
              title: "冷",
              icon: require("../../assets/img/analysis-cold.png"),
              num: Math.round(data.Cold)
            },
            {
              title: "热",
              icon: require("../../assets/img/analysis-hot.png"),
              num: Math.round(data.Hot)
            }
          ]
        });
        // this.allCharge = Math.round(data.Total);
        // this.chargeList = [
        //   {
        //     title: "电",
        //     icon: require("../../../assets/img/analysis-electric.png"),
        //     num: Math.round(data.Electricity)
        //   },
        //   {
        //     title: "热水",
        //     icon: require("../../../assets/img/analysis-hotwater.png"),
        //     num: Math.round(data.HotWater)
        //   },
        //   {
        //     title: "冷",
        //     icon: require("../../../assets/img/analysis-cold.png"),
        //     num: Math.round(data.Cold)
        //   },
        //   {
        //     title: "热",
        //     icon: require("../../../assets/img/analysis-hot.png"),
        //     num: Math.round(data.Hot)
        //   }
        // ];
      });
    },
    // 登录方法，主要是刷新token用，可不调用
    login() {
      login({
        username: "portal",
        password: this.$getRsaCode("admin123")
      }).then(data => {
        if (data.code === 200) {
          let token = data.data.tokenHead + data.data.token;
          this.mutLogin(token);
          sessionStorage.token = token;
        } else {
          alert("账号或者密码错误！");
        }
      });
    }
  },
  mounted() {
    this.getSupplyList();
    this.getConsumeList();
    this.changeLineArray();
    this.getChargeNum();
    this.timer1 = setInterval(() => {
      // this.login();
      this.getSupplyList();
      this.getConsumeList();
      this.getChargeNum();
    }, this.interval1);
    this.timer2 = setInterval(() => {
      this.changeLineArray();
    }, this.interval2);
  },
  beforeDestroy() {
    clearInterval(this.timer1);
    this.timer1 = null;
    clearInterval(this.timer2);
    this.timer2 = null;
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.home-wrapper
  width: 100vw
  height: 100vh
  overflow: hidden
  // background-image: url('../../assets/img/bg.jpg')
  // background-size: cover
  display: flex
  flex-direction: column
  .home-footer-wrapper
    width: 100%
    height: $commonHeight
  .home-main-wrapper
    width: 100%
    height: 'calc(100vh  - %s)' % $commonHeight
    // display: flex
    // align-items: center
    // justify-content: space-between
    position: relative
</style>
