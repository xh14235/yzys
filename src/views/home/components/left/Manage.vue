<template>
  <div class="common-wrapper">
    <ParkInfo v-if="shows.includes('left01')"></ParkInfo>
    <AbnormalMonitoring
      v-if="shows.includes('left02')"
      :list="abnormalMonitoringList"
    ></AbnormalMonitoring>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
import { getAbnormalMonitoring } from "@/http/api";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Manage",
  components: {
    ParkInfo: () => import("@/components/details/manage/ParkInfo"),
    AbnormalMonitoring: () =>
      import("@/components/details/manage/AbnormalMonitoring")
  },
  data() {
    return {
      abnormalMonitoringList: [],
      timer: null,
      interval: 60000
    };
  },
  computed: {
    ...mapState(["dispose"]),
    shows() {
      return this.dispose.Manage;
    }
  },
  methods: {
    ...mapMutations(["changeMapIconHeight"]),
    getList() {
      getAbnormalMonitoring().then(res => {
        this.abnormalMonitoringList = res.data.map(item => {
          item.warnTime = item.warnTime.slice(0, 16);
          return item;
        });
      });
    }
  },
  activated() {
    setTimeout(() => {
      // let defaultHeight = document.body.scrollHeight * 0.78;
      let line = this.$refs.line;
      let height =
        document.body.clientHeight - line.getBoundingClientRect().top;
      // height = height === 0 ? defaultHeight : height;
      this.changeMapIconHeight(height);
    }, 1000);
    this.getList();
    this.timer = setInterval(() => {
      this.getList();
    }, this.interval);
  },
  deactivated() {
    clearInterval(this.timer);
    this.timer = null;
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

<style lang="stylus" scoped></style>
