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
    floorShow: false,
    // 显示魔方
    cubeShow: false,
    // 楼层
    floor: 0,
    lineArray: [0.09, 0.14, 0.09, 0.14, 0.09, 0.14, 0.09, 0.14, 0.09, 0.14]
  },
  mutations: {
    // 点标注
    changeTagging(state) {
      state.taggingShow = !state.taggingShow;
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
    // 改变魔方显示与隐藏
    ChangeCubeShow(state) {
      if (!state.cubeShow) {
        setTimeout(() => {
          state.cubeShow = true;
        }, 1500);
      } else {
        state.cubeShow = false;
      }
    },
    // 改变楼层数
    changeFloor(state, floor) {
      state.floor = floor;
    },
    // 改变折线图数据，随机数据
    changeLineArray(state) {
      state.lineArray = [];
      for (let i = 0; i < 10; i++) {
        state.lineArray.push((Math.random() * 0.05 + 0.09).toFixed(2));
      }
    }
  }
};

export default map;
