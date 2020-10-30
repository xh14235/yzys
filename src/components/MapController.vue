<template>
  <div class="map-controller">
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
  }
};
</script>

<style scoped lang="stylus">
.map-controller
  margin-right: auto
  .controller-item
    cursor: pointer
    display: flex
    justify-content: space-between
    align-items: center
    .item-icon
      width: 2vh
      height: 2vh
      background: #aaa
      &.item-icon-active
        background: #111
</style>
