<template id="layout">
  <el-container class="layout">
    <!-- <el-header class="headerTop"> -->
      <!-- <div>
        <img
          src="./imgs/logo.png"
          alt=""
          class="layoutLogo"
        >
      </div> -->
      <!-- <div class="setting">
        <el-dropdown @command="handleCommand">
          <i class="el-icon-s-tools"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div> -->
    <!-- </el-header> -->
    <el-container>
      <el-aside :width="isCollapse?'80px':'200px'" class="asideMenu">
        <div class="adminInfo">
          <i class="el-icon-user-solid"></i>
					<p class="adminName">{{userName}}</p>
				</div>
        <Aside class="asideMenuList"></Aside>
        <el-button type="primary" :icon="`el-icon-${isCollapse?'d-arrow-right':'d-arrow-left'}`" class="isShow" @click="changeShadow"></el-button>
      </el-aside>
      <el-main class="mainBox">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from '@/view/layout/components/aside/index.vue'
export default {
  name: 'layout',
  components: {
    Aside
  },
  data () {
    return {
      isCollapse: false,
      userName: '',
      upUserName: 'xxx'
    }
  },
  mounted () {
    const screenWidth = document.body.clientWidth
    if (screenWidth < 1200) {
      this.isCollapse = true
    } else {
      this.isCollapse = false
    }
    this.bus.$emit('collapse', this.isCollapse)
    window.onresize = () => {
      return (() => {
        const screenWidth = document.body.clientWidth
        if (screenWidth < 1200) {
          this.isCollapse = true
        } else {
          this.isCollapse = false
        }
        this.bus.$emit('collapse', this.isCollapse)
      })()
    }
  },
  methods: {
      open2() {
        const _this = this;
        this.$notify({
          title: '审核提醒',
          dangerouslyUseHTMLString: true,
          message: `
            <div>
              <div>
                <span>${this.upUserName}<span>提交了新的待审批工单
              </div>
            <div>
          `,
          position: 'bottom-right',
          offset: 10,
          duration: 0,
          onClick () {
            console.log(333123);
            _this.pushSub()
          }
        });
      },
      pushSub () {
        console.log(123);
        this.$router.push('/patientList')            
      },
      changeShadow () {
        this.isCollapse = !this.isCollapse
        this.bus.$emit('collapse', this.isCollapse)
      }
  }
}
</script>
<style lang="less" scoped>
.el-header{
  background-color: #ebebeb;
  color: #333;
  text-align: center;
  height: 60px;
  line-height: 60px;
}

.el-aside {
  background-color: #ebebeb;
  color: #333;
  text-align: center;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100vh;
}
.layout {
  .headerTop {
    display: flex;
    justify-content: space-between;
    .layoutLogo {
      width: 160px;
      vertical-align: middle;
    }
    .topmenu {
      width: calc(100% - 350px);
      height: 60px;
      padding: 0 20px;
      background-color: #ebebeb;
    }
    .setting {
      padding: 0 20px;
      i {
        font-size: 36px;
        margin-top: 12px;
      }
    }
  }
  .asideMenu {
    max-width: 200px;
    position: relative;
    .adminInfo {
      padding: 20px;
      display: flex;
      justify-content: space-around;
      i {
        font-size: 40px;
      }
      .adminName {
        line-height: 40px;
      }
    }
    .asideMenuList {
      overflow-y: auto;
      display: inline-block;
      height: calc(100vh - 90px);
      background-color: #ebebeb;
    }
    .isShow {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      right: 0px;
      z-index: 999;
      padding: 0
    }
  }
  .mainBox {
    background-color: #fff;
    border: 15px solid #dad9d9;
  }
}
</style>