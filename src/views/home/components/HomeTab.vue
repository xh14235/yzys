<template>
  <div class="home-tab">
    <div
      class="home-tab-item"
      :class="{ active: mapTab === index }"
      v-for="(item, index) of tabList"
      @click="changeTab(index)"
      :key="item.id"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "HomeTab",
  data() {
    return {
      tabList: [
        {
          id: "001",
          title: "园区管理"
        },
        {
          id: "002",
          title: "能源供给"
        },
        {
          id: "003",
          title: "能源消费"
        },
        {
          id: "004",
          title: "能源分析"
        }
      ]
    };
  },
  computed: {
    ...mapState(["mapTab"])
  },
  methods: {
    ...mapMutations(["changeMapTab"]),
    // 底部按钮tab切换
    changeTab(index) {
      this.changeMapTab(index);
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~@/assets/css/common.styl'
.home-tab
  width: 100vw
  padding: 0 1.5625vw
  background-image: url('../../../assets/img/bg-bottom.png')
  background-size: 100% 100%
  height: $commonHeight
  display: flex
  justify-content: left
  align-items: center
  position: relative
  z-index: 1
  .home-tab-item
    width: 5.42vw
    height: 3.61vh
    line-height: 3.61vh
    text-align: center
    margin-right: 2.1875vw
    font-size: $font20
    background-image: url('../../../assets/img/bottom-tab-bg.png')
    background-size: 100% 100%
    cursor: pointer
    &.active
      background-image: url('../../../assets/img/bottom-tab-bg-active.png')
</style>
