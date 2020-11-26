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
    </div>
    <div class="home-footer-wrapper">
      <HomeTab></HomeTab>
    </div>
  </div>
</template>

<script>
import { getAllEnergyNum, getConsumerAllEnergyNum, login } from "@/http/api";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState({
      monitorShow: state => state.map.monitorShow,
      floorShow: state => state.map.floorShow
    })
  },
  components: {
    HomeLeft: () => import("./components/HomeLeft"),
    HomeRight: () => import("./components/HomeRight"),
    HomeTab: () => import("./components/HomeTab"),
    MapController: () => import("@/components/MapController"),
    Monitor: () => import("@/components/Monitor"),
    Floor: () => import("@/components/Floor"),
    Map: () => import("@/components/three/Map")
  },
  data() {
    return {
      timer: null,
      interval: 60107
    };
  },
  methods: {
    ...mapMutations(["mutSupplyData", "mutConsumeData", "mutLogin"]),
    getSupplyList() {
      getAllEnergyNum().then(res => {
        this.mutSupplyData(res.data);
      });
    },
    getConsumeList() {
      getConsumerAllEnergyNum().then(res => {
        this.mutConsumeData(res.data);
      });
    },
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
    this.timer = setInterval(() => {
      this.login();
      this.getSupplyList();
      this.getConsumeList();
    }, this.interval);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
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
