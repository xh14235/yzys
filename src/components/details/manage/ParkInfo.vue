<template>
  <div class="common-box">
    <div class="common-title">园区配置</div>
    <div class="info-list">
      <div class="info-item" v-for="item of parkInfoList" :key="item.id">
        <div class="info-icon"></div>
        <div class="info-msg">
          <div class="info-title">{{ item.title }}</div>
          <div class="info-num">{{ item.num }}</div>
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
          icon: "",
          title: "园区面积",
          num: "500㎡"
        },
        {
          id: "02",
          icon: "",
          title: "公共设施",
          num: "10个"
        },
        {
          id: "03",
          icon: "",
          title: "区域人数",
          num: "20人"
        },
        {
          id: "04",
          icon: "",
          title: "能源设备",
          num: "7个"
        },
        {
          id: "05",
          icon: "",
          title: "安防监控",
          num: "1个"
        },
        {
          id: "06",
          icon: "",
          title: "环境检测",
          num: "2个"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.info-list
  display: flex
  flex-wrap: wrap
  justify-content: flex-start
  .info-item
    flex: 0 0 50%
    width: 50%
    display: flex
    align-items: center
    .info-icon
      width: 2vh
      height: 2vh
      background: #aaa
</style>
