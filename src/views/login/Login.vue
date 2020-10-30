<template>
  <div class="login-wrapper">
    <el-button @click="login()">登录</el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$router.push("/home");
    }
  }
};
</script>
