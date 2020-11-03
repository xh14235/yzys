<template>
  <div class="common-box">
    <div class="common-title">异常监控</div>
    <div class="abnormal-list common-table">
      <div class="table-head">
        <span>报警时间</span>
        <span>报警类型</span>
        <span>报警区域</span>
      </div>
      <div class="table-body">
        <p v-for="item of abnormalMonitoringList" :key="item.id">
          <span>{{ item.time }}</span>
          <span>{{ item.type }}</span>
          <span>{{ item.area }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbnormalMonitoring",
  data() {
    return {
      abnormalMonitoringList: []
    };
  },
  methods: {
    getList() {
      this.abnormalMonitoringList = [
        {
          id: "001",
          time: "10/23 12:00",
          type: "入侵报警",
          area: "能源区"
        },
        {
          id: "002",
          time: "10/23 12:00",
          type: "入侵报警",
          area: "能源区"
        },
        {
          id: "003",
          time: "10/23 12:00",
          type: "入侵报警",
          area: "能源区"
        },
        {
          id: "004",
          time: "10/23 12:00",
          type: "入侵报警",
          area: "能源区"
        }
      ];
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
