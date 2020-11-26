<template>
  <div class="floor-wrapper">
    <div class="floor-box">
      <div
        class="floor-item"
        :class="{ 'floor-active': curIndex === index }"
        v-for="(item, index) of list"
        :key="index"
        @click="changeFloor(index)"
      >
        {{ item }}
      </div>
    </div>
    <img src="@/assets/img/floor-line.png" alt="" class="floor-line" />
  </div>
</template>

<script>
export default {
  name: "Floor",
  data() {
    return {
      curIndex: 0,
      list: ["All", "3F", "2F", "1F"]
    };
  },
  methods: {
    changeFloor(index) {
      this.curIndex = index;
      console.log(index);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.floor-wrapper
  height: 36vh
  position: absolute
  top: 32vh
  left: 35vw
  z-index: 1
  display: flex
  .floor-line
    height: 100%
  .floor-box
    height: 100%
    padding: 6.9vh 0
    display: flex
    flex-direction: column
    justify-content: space-between
    .floor-item
      width: 5.26vw
      text-align: center
      height: 3.42vh
      line-height: 3.42vh
      font-size: $font24
      background-size: 100% 100%
      background-image: url('../assets/img/floor-item.png')
      cursor: pointer
      &.floor-active
        background-image: url('../assets/img/floor-active.png')
</style>
