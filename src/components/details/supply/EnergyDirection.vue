<template>
  <div class="common-box">
    <div class="common-title">能源方向</div>
    <div class="common-echarts-box">
      <Eradar :radarData="echarts"></Eradar>
    </div>
  </div>
</template>

<script>
export default {
  name: "EnergyDirection",
  data() {
    return {
      echarts: {
        id: "anahead1",
        name: "电",
        color: "green",
        data: [
          {
            value: [454.71, 279.21, 357.78, 587.59, 294.28],
            name: "电"
          }
        ]
      }
    };
  },
  components: {
    Eradar: () => import("@/components/echarts/Eradar")
  }
};
</script>

<style lang="stylus" scoped></style>
