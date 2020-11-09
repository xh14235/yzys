<template>
  <div class="common-box common-box-bottom">
    <div class="common-title">
      <img src="../../../assets/img/manage-title1.png" alt="" />
    </div>
    <div class="info-list">
      <div class="info-item" v-for="item of parkInfoList" :key="item.id">
        <div class="info-icon">
          <img :src="item.icon" alt="" />
        </div>
        <div class="info-msg">
          <div class="info-title">{{ item.title }}</div>
          <div class="info-num">
            <span class="num">{{ item.num }}</span
            ><span>{{ item.unit }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParkInfo",
  data() {
    return {
      parkInfoList: [
        {
          id: "01",
          icon: require("../../../assets/img/park-area.png"),
          title: "园区面积",
          num: "500",
          unit: "㎡"
        },
        {
          id: "02",
          icon: require("../../../assets/img/park-gong.png"),
          title: "公共设施",
          num: "10",
          unit: "个"
        },
        {
          id: "03",
          icon: require("../../../assets/img/park-person.png"),
          title: "区域人数",
          num: "20",
          unit: "个"
        },
        {
          id: "04",
          icon: require("../../../assets/img/park-equip.png"),
          title: "能源设备",
          num: "7",
          unit: "个"
        },
        {
          id: "05",
          icon: require("../../../assets/img/park-monitor.png"),
          title: "安防监控",
          num: "1",
          unit: "个"
        },
        {
          id: "06",
          icon: require("../../../assets/img/park-environment.png"),
          title: "环境检测",
          num: "2",
          unit: "个"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.info-list
  display: flex
  flex-wrap: wrap
  justify-content: flex-start
  .info-item
    flex: 0 0 50%
    width: 50%
    display: flex
    align-items: center
    margin-top: 2.685vh
    .info-icon
      width: 3.125vw
      height: 3.125vw
      margin-right: 0.667vw
      img
        width: 100%
        height: 100%
    .info-msg
      .info-num
        .num
          font-size: $font22
          color: $green
</style>
