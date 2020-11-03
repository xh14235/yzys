<template>
  <div class="home-wrapper">
    <div class="home-header-wrapper">
      <CommonHeader></CommonHeader>
    </div>
    <div class="home-main-wrapper">
      <HomeLeft></HomeLeft>
      <MapController></MapController>
      <HomeRight></HomeRight>
    </div>
    <div class="home-footer-wrapper">
      <HomeTab></HomeTab>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    CommonHeader: () => import("@/components/CommonHeader"),
    HomeLeft: () => import("./components/HomeLeft"),
    HomeRight: () => import("./components/HomeRight"),
    HomeTab: () => import("./components/HomeTab"),
    MapController: () => import("@/components/MapController")
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.home-wrapper
  width: 100vw
  height: 100vh
  padding 0 1.5625vw
  overflow: hidden
  background-image: url('../../assets/img/bg.jpg')
  background-size: cover
  display: flex
  flex-direction: column
  .home-header-wrapper, .home-footer-wrapper
    width: 100vw
    height: $commonHeight
  .home-main-wrapper
    width: 100vw
    height: 'calc(100vh  - 2 * %s)' % $commonHeight
    display: flex
    align-items: center
    justify-content: flex-start
</style>
