<template>
  <div class="map-controller" ref="controller">
    <div
      class="controller-item"
      v-for="item of list"
      :key="item.id"
      @click="itemClick(item)"
      @mouseenter="itemIconEnter(item)"
      @mouseleave="itemIconLeave(item)"
    >
      <div class="item-icon" :class="{ 'item-icon-active': item.active }"></div>
      <div class="item-title" v-show="item.titleShow">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MapController",
  data() {
    return {
      list: [
        {
          id: "001",
          title: "图标信息",
          active: false,
          titleShow: false
        },
        {
          id: "002",
          title: "报警演示",
          active: false,
          titleShow: false
        },
        {
          id: "003",
          title: "线路展示",
          active: false,
          titleShow: false
        },
        {
          id: "004",
          title: "行走模式",
          active: false,
          titleShow: false
        }
      ]
    };
  },
  computed: {
    ...mapState(["mapIconHeight"])
  },
  methods: {
    itemClick(item) {
      item.active = !item.active;
      // 地图方法
      // switch (item.id) {
      //   case value:

      //     break;

      //   default:
      //     break;
      // }
    },
    itemIconEnter(item) {
      item.titleShow = true;
    },
    itemIconLeave(item) {
      item.titleShow = false;
    }
  },
  watch: {
    mapIconHeight() {
      let controller = this.$refs.controller;
      controller.style.bottom = this.mapIconHeight + "px";
    }
  }
};
</script>

<style scoped lang="stylus">
.map-controller
  position: absolute
  left: 23vw
  transition: all 0.3s
  z-index: 1
  .controller-item
    cursor: pointer
    display: flex
    justify-content: space-between
    align-items: flex-end
    .item-icon
      width: 1.875vw
      height: 1.875vw
      background-size: 100% 100%
      margin-top: 1.852vh
      z-index: 1
    &:nth-child(1)
      .item-icon
        background-image: url("../assets/img/map-icon11.png")
      .item-icon-active
        background-image: url("../assets/img/map-icon12.png")
    &:nth-child(2)
      .item-icon
        background-image: url("../assets/img/map-icon21.png")
      .item-icon-active
        background-image: url("../assets/img/map-icon22.png")
    &:nth-child(3)
      .item-icon
        background-image: url("../assets/img/map-icon31.png")
      .item-icon-active
        background-image: url("../assets/img/map-icon32.png")
    &:nth-child(4)
      .item-icon
        background-image: url("../assets/img/map-icon41.png")
      .item-icon-active
        background-image: url("../assets/img/map-icon42.png")
    .item-title
      width: 5.208vw
      padding-left: 0.729vw
      height: 1.875vw
      line-height: 1.875vw
      background-image: url("../assets/img/controller-bg.png")
      background-size: 100% 100%
</style>
