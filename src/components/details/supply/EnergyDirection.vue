<template>
  <div class="common-box common-box-bottom">
    <div class="common-title">
      <img src="../../../assets/img/supply-title4.png" alt="" />
    </div>
    <div class="common-echarts-box">
      <Epie :pieData="echarts"></Epie>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "EnergyDirection",
  data() {
    return {
      echarts: {}
    };
  },
  computed: {
    ...mapState({
      green: state => state.color.green,
      blue: state => state.color.blue,
      yellow: state => state.color.yellow,
      red: state => state.color.red,
      white: state => state.color.white
    })
  },
  components: {
    Epie: () => import("@/components/echarts/Epie")
  },
  methods: {
    getEchartsData() {
      this.echarts = {
        id: "consumption_head2",
        name: "供能比例",
        title: "供能比例",
        titleTop: "40%",
        titleLeft: "28%",
        legendShow: true,
        borderWidth: false,
        labelShow: false,
        radius: ["60%", "70%"],
        center: ["30%", "50%"],
        color: [this.green, this.yellow, this.blue, this.red],
        data: [
          { value: 11, name: "电" },
          { value: 22, name: "热水" },
          { value: 14, name: "冷" },
          { value: 25, name: "热" }
        ]
      };
    }
  },
  mounted() {
    this.getEchartsData();
  }
};
</script>

<style lang="stylus" scoped>
.common-echarts-box
  height: 20vh
</style>
