<template>
  <div id="login">
    <!-- 底部背景图片 -->
    <div class="login-back">
      <img
        src="http://localhost:9091/admin/img/admin_woyaoyou_bg_login@2x.fafb2e1b.png"
        alt=""
      />
    </div>
    <!-- 布局 -->
    <div class="login-content">
      <div class="login-tit">欢迎登录</div>
      <!-- 表单部分 -->
      <div class="form-ul">
        <div class="form-li">
          <a-form-model ref="ruleForm" :model="form" :rules="rules">
            <div class="form-li-left">租户编码</div>
            <a-input v-model="form.zuUser" placeholder="input placeholder" />
          </a-form-model>
        </div>
        <div class="form-li">
          <a-form-model ref="ruleForm" :model="form" :rules="rules">
            <div class="form-li-left">用户名</div>
            <a-input v-model="form.user" placeholder="input placeholder" />
          </a-form-model>
        </div>
        <div class="form-li">
          <a-form-model ref="ruleForm" :model="form" :rules="rules">
            <div class="form-li-left">密码</div>
            <a-input v-model="form.password" placeholder="input placeholder" />
          </a-form-model>
        </div>
        <!-- 登录按钮 -->
        <a-button type="primary" block @click="onSubmit"> 立即登录 </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeileihoutaiLogin",

  data() {
    return {
      form: {
        zuUser: "horizontal",
        user: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
          },
        ],
      },
    };
  },

  mounted() {},

  methods: {
    onSubmit() {
      this.$router.push({ name: "layOut" });
      console.log("登录成功");
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  background: #4772ff;
  display: flex;
  flex-direction: column;
  position: relative;
}
.login-back {
  height: 65px;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.login-back img {
  width: 100%;
  height: 100%;
}
.login-content {
  width: 100%;
  height: 67%;
  margin-top: 33%;
  background: #fff;
}
.login-tit {
  color: #232529;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-top: 12%;
  margin-bottom: 10%;
}
.form-ul {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.form-li {
  width: 90%;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #dcdfe6;
  padding: 0 24px;
  display: flex;
  align-items: center;
  margin-bottom: 9%;
}
.form-li-left {
  width: 38%;
  color: #a6aec2;
}
.form-li .ant-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-ul .ant-btn {
  background: #4772ff;
  width: 90%;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #dcdfe6;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>