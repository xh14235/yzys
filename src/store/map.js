const map = {
  state: {
    // 点标注
    taggingShow: false,
    // 报警演示
    alarmShow: false,
    // 线路展示
    pipingShow: false,
    // 行走漫步
    walkShow: false,
    // 播放监控
    monitorShow: false,
    // 楼层控制按钮
    floorShow: false
  },
  mutations: {
    // 点标注
    changeTagging(state) {
      state.taggingShow = !state.taggingShow;
      console.log(state.taggingShow);
    },
    // 报警演示
    changeAlarm(state) {
      state.alarmShow = !state.alarmShow;
    },
    // 线路展示
    changePiping(state) {
      state.pipingShow = !state.pipingShow;
    },
    // 行走漫步
    changeWalk(state) {
      state.walkShow = !state.walkShow;
    },
    // 播放监控
    changeMonitor(state) {
      state.monitorShow = !state.monitorShow;
    },
    // 关闭监控窗口
    closeMonitor(state) {
      state.monitorShow = false;
    },
    // 控制楼层显示与隐藏
    ShowFloor(state) {
      state.floorShow = true;
    },
    hideFloor(state) {
      state.floorShow = false;
    }
  }
};

export default map;
