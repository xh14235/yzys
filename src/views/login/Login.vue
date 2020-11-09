<template>
  <div class="login-wrapper">
    <img class="login-img" src="../../assets/img/login-energy.png" alt="" />
    <div class="login-box">
      <img class="login-title" src="../../assets/img/login-title.png" alt="" />
      <div class="login-form">
        <div class="login-form-title">账号登录</div>
        <div class="login-input">
          <input
            type="text"
            v-model="username"
            class="login-username"
            placeholder="请输入账号"
          />
          <img
            src="../../assets/img/login-username.png"
            alt=""
            class="login-icon"
          />
        </div>
        <div class="login-input">
          <input
            v-model="password"
            type="password"
            class="login-password"
            placeholder="请输入密码"
          />
          <img
            src="../../assets/img/login-password.png"
            alt=""
            class="login-icon"
          />
        </div>
        <el-button @click="login()">登 录</el-button>
      </div>
    </div>
    <div class="copyright">版权所有@上海昱章电气成套设备有限公司</div>
  </div>
</template>

<script>
import { login } from "../../http/api";
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapMutations(["mutLogin"]),
    login() {
      login({
        username: this.username,
        password: this.$getRsaCode(this.password)
      }).then(res => {
        let data = res.data;
        if (data.code === 200) {
          let token = data.data.tokenHead + data.data.token;
          this.mutLogin(token);
          this.$router.push("/home");
        } else {
          alert("账号或者密码错误！");
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.login-wrapper
  width: 100vw
  height: 100vh
  background-image: url('../../assets/img/login-bg.jpg')
  background-size: 100% 100%
  position: relative
  .login-img
    width: 44vw
    height: 58.52vh
    position: absolute
    top: 17.13vh
    left: 11.51vw
  .login-box
    width: 26.25vw
    height: 20vh
    position: absolute
    top: 19.63vh
    right: 16vw
    .login-title
      width: 100%
      margin-bottom: 1.76vh
    .login-form
      width: 100%
      height: 45.556vh
      background: #ffffff
      padding: 5.5556vh 2.0833vw
      .login-form-title
        color: #000000
        font-weight: 400
        font-size: $font22
        margin-bottom: 4vh
      .login-input
        position: relative
        margin-bottom: 2.5vh
        input
          width: 100%
          height: 5.741vh
          line-height: 5.741vh
          padding: 0
          border: 1px solid $green
          color: #878F9A
          font-size: $font22
          text-indent: 3.75vw
          &:focus
            outline: none
        .login-icon
          width: 2.963vh
          height: 2.963vh
          position: absolute
          left: 1.042vw
          top: 1.389vh
      .el-button
        width: 100%
        height: 5.741vh
        font-size: $font20
        background: $green
        border-radius: 0
        margin-top: 4.5vh
  .copyright
    width: 100%
    text-align: center
    position: absolute
    left: 0
    bottom: 10vh
    font-size: $font20
</style>
