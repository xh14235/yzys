<template>
  <div class="common-box">
    <div class="common-title">
      <img src="../../../assets/img/manage-title2.png" alt="" />
    </div>
    <div class="abnormal-list common-table">
      <div class="table-head">
        <span>报警时间</span>
        <span>报警类型</span>
        <span>区域</span>
      </div>
      <div class="table-body">
        <p v-for="item of list" :key="item.id">
          <span>{{ item.warnTime }}</span>
          <span>{{ item.warnTypeName }}</span>
          <span>{{ item.areaName }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbnormalMonitoring",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.table-head span:nth-child(1), .table-body p span:nth-child(1)
  flex: 0 0 50%
  width: 50%
.table-head span:nth-child(2), .table-body p span:nth-child(2)
  flex: 0 0 25%
  width: 25%
.table-head span:nth-child(3), .table-body p span:nth-child(3)
  flex: 0 0 25%
  width: 25%
.table-body
  height: 20vh
</style>
