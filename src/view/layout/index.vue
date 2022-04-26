<template id="layout">
  <el-container class="layout">
    <el-header class="headerTop">
      <div class="title">慢病管理系统</div>
      <el-button type="primary" :icon="`el-icon-${isCollapse?'s-unfold':'s-fold'}`" class="isShow" @click="changeShadow"></el-button>
      <Topmenu></Topmenu>
      <div class="setting">
        <el-dropdown @command="handleCommand">
          <i class="el-icon-s-tools" style="color:#fff"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside :width="media?(isCollapse?'0px':'200px'):(isCollapse?'80px':'200px')" class="asideMenu">
        <div class="adminInfo">
          <i class="el-icon-user-solid"></i>
					<p class="adminName">{{userName}}</p>
				</div>
        <Aside class="asideMenuList"></Aside>
      </el-aside>
      <el-main class="mainBox">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from '@/view/layout/components/aside/index.vue'
import Topmenu from '@/view/layout/components/topmenu/index.vue'
export default {
  name: 'layout',
  components: {
    Aside,
    Topmenu
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
      this.media = true
    } else {
      this.isCollapse = false
      this.media = false
    }
    this.bus.$emit('collapse', this.isCollapse)
    window.onresize = () => {
      return (() => {
        const screenWidth = document.body.clientWidth
        if (screenWidth < 1200) {
          this.isCollapse = true
          this.media = true
        } else {
          this.isCollapse = false
          this.media = false
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
      pushSub () {cd
        this.$router.push('/patientList')            
      },
      changeShadow () {
        this.isCollapse = !this.isCollapse
        this.bus.$emit('collapse', this.isCollapse)
      },
      handleCommand () {}
  }
}
</script>
<style lang="less" scoped>
.el-header{
  color: #333;
  text-align: center;
  height: 60px;
  line-height: 60px;
}

.el-aside {
  // background-color: #ebebeb;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
}
.layout {
  .headerTop {
    position: relative;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(45deg, #0176db, #00a3f4);
    .title {
      padding: 0 20px;
      color: #ebebeb;
      font-size: 27px;
      font-weight: 550;
    }
    .layoutLogo {
      width: 160px;
      vertical-align: middle;
    }
    .topmenu {
      width: calc(100% - 350px);
      height: 60px;
      padding: 0 20px;
    }
    .setting {
      padding: 0 20px;
      i {
        font-size: 36px;
        margin-top: 12px;
      }
    }
    .isShow {
      position: absolute;
      width: 35px;
      height: 25px;
      top: 30%;
      left: 220px;
      z-index: 999;
      padding: 0;
    }
  }
  .asideMenu {
    max-width: 200px;
    position: relative;
    background-color: #daedfe;
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
      height: calc(100vh - 150px);
      // background-color: #ebebeb;
    }
    .asideMenuList::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }

  }
  .mainBox {
    padding: 10px;
    background-color: #fff;
    border: 10px solid #dad9d9;
  }
  .el-button--primary {
    color: black;
    background-color: #ebebeb;
    border-color: #ebebeb;
  }
}
@media screen and (max-width:1200px) {
  .layout {
    .headerTop {
      display: flex;
      justify-content: flex-end;
      .title {
        display: none;
      }
      .isShow {
        position: absolute;
        width: 35px;
        height: 25px;
        top: 30%;
        left: 20px;
        z-index: 999;
        padding: 0;
      }
    }
  }
} 
</style>