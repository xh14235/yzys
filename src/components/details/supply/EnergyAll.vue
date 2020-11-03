<template>
  <div class="common-box">
    <div class="common-title">累计供能</div>
    <div class="energy-list">
      <div class="energy-item" v-for="(item, index) of energyList" :key="index">
        <div class="energy-icon"></div>
        <div class="energy-info">
          <div class="energy-title">{{ item.title }}</div>
          <div class="energy-num">{{ item.num }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EnergyAll",
  data() {
    return {
      energyList: []
    };
  },
  methods: {
    getList() {
      this.energyList = [
        {
          title: "供电",
          icon: "",
          num: "50kWh"
        },
        {
          title: "供热水",
          icon: "",
          num: "50kWh"
        },
        {
          title: "供冷",
          icon: "",
          num: "50kWh"
        },
        {
          title: "供热",
          icon: "",
          num: "50kWh"
        }
      ];
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style lang="stylus" scoped>
.energy-list
  display: flex
  flex-wrap: wrap
  justify-content: flex-start
  .energy-item
    flex: 0 0 50%
    width: 50%
    display: flex
    align-items: center
    .energy-icon
      width: 2vh
      height: 2vh
      background: #aaa
</style>
