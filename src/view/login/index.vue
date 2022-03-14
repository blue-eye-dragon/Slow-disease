<template>
  <div id="userLayout">
    <div class="loginform">
      <h2 class="topTitle">慢病平台</h2>
      <el-form
        ref="loginForm"
        label-position="left"
        label-width="60px"
        :model="loginForm"
        :rules="rules"
        @keyup.enter.native="submitForm"
      >
        <el-form-item
          label="账号"
          prop="username"
        >
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
          >
            <i
              slot="suffix"
              class="el-input__icon el-icon-user"
            />
          </el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            v-model="loginForm.password"
            :type="lock === 'lock' ? 'password' : 'text'"
            placeholder="请输入密码"
          >
            <i
              slot="suffix"
              :class="'el-input__icon el-icon-' + lock"
            />
          </el-input>
        </el-form-item>
        <!-- <el-form-item style="position: relative">
          <el-input
            v-model="loginForm.captcha"
            name="logVerify"
            placeholder="请输入验证码"
            style="width: 60%"
          />
          <div class="vPic">
            <img
              v-if="picPath"
              :src="picPath"
              width="100%"
              height="100%"
              alt="请输入验证码"
              @click="loginVerify()"
            >
          </div>
        </el-form-item> -->
        <div style="textAlign:center;width:100%;marginTop:30px  ">
          <el-button
            type="primary"
            style="width:50%"
            @click="submitForm"
          >登 录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      lock: 'lock',
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        // username: [
        //   { required: true, message: '请输入账号', trigger: 'blur' },
        // ],
        // password: [
        //   { required: true, message: '请输入密码', trigger: 'blur' }
        // ]
      }
    }
  },
  created () {
  },
  methods: {
    submitForm () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          // alert('submit!');
          console.log(this.$router);
          this.$router.push('/workTable')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
}
</script>

<style lang="less">
#userLayout {
  width: 100%;
  height: 100vh;
  background: url(../../assets/login_background.svg);
  background-size: cover;
  position: relative;
  .topTitle {
    text-align: center;
    line-height: 60px;
  }
  .loginform {
    position: absolute;
    top: 30vh;
    right: 16vw;
    width: 350px;
    background-color: #fff;
    padding: 40px 40px 40px 40px;
    border-radius: 10px;
    box-shadow: 2px 3px 7px rgba(0, 0, 0, 0.2);
  }
}
@media (max-width: 750px) {
  #userLayout {
    width: 100%;
    height: 100vh;
    background: url(../../assets/login_background.svg);
    background-size: cover;
    position: relative;
    .topTitle {
      text-align: center;
      line-height: 60px;
    }
    .loginform {
      position: absolute;
      top: 30vh;
      right: 16vw;
      width: 50vw;
      background-color: #fff;
      padding: 40px 40px 40px 40px;
      border-radius: 10px;
      box-shadow: 2px 3px 7px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>