<template>
  <div class="wrap">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <el-menu-item
        :index="item.id"
        v-for="item in asideList"
        :key="item.id"
        @click="selectAsideList(item)"
      >
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
// import { store } from '@/store'
export default {
  name: 'Aside',
  data () {
    return {
      isCollapse: true,
      // asideList: store.getters['asideList']
      // menuList: store.getters['asideList'],
      asideList: [
        // { id: '1', title: '检测预警页面', path: '/detecteWarning' },
        { id: '2', title: '工作台', path: '/workTable', icon: 'location' },
        { id: '4', title: '疾病患者管理', path: '/patientList', icon: 'menu' },
        { id: '3', title: '统计报表', path: '/statisticalReports', icon: 'document' },
      ],
      activeIndex: '1',
    }
  },
  created () {
    this.bus.$on('collapse', item => {
      this.isCollapse = item
    })
  },
  mounted () {
    // this.getAsideList()
    document.getElementsByClassName('el-menu-item ')[0].click()
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    async getAsideList () {
      const res = await this.$post('/index/getMenu')
      this.asideList = res.data.data.menu
      console.log(this.asideList);
      console.log(res);
    },
    selectAsideList (item) {

      this.$router.push(item.path)
      // store.commit('setmenuList', item.children)
      // if (item.route) {
      //   this.$router.push(item.route)
      // } else {
      //   this.$router.push(item.children[0].route)
      //   store.commit('setcurrenMenu', item.children[0].route)
      // }
    }
  }
}
</script>
<style lang="less" scoped>
.wrap {
  width: 100%;
  .el-menu-item.is-active {
    background-color: #409eff;
    color: #ffffff;
  }
  .el-menu-item:hover {
    background-color: #409eff;
    color: #ffffff;
  }
  .el-menu-vertical-demo {
    background-color: #ebebeb;
    text-align: left;
  }
  .el-menu--collapse {
    width: 79px;
    text-align: center;
  }
}
</style>
