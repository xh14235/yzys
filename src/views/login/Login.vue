<template>
  <div class="login-wrapper">
    <el-button @click="login()">登录</el-button>
  </div>
</template>

<script>
import { login } from "../../http/api";
export default {
  name: "Login",
  methods: {
    login() {
      login({
        username: "portal",
        password: this.$getRsaCode("admin123")
      }).then(res => {
        // console.log(res);
        if (res.code) {
          this.$router.push("/home");
        }
      });
    }
  }
};
</script>
