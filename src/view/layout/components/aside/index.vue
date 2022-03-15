<template>
  <div class="wrap">
    <el-menu :default-active="activeIndex"
             class="el-menu-vertical-demo">
      <el-menu-item :index="item.id"
                    v-for="item in asideList"
                    :key="item.id"
                    @click="selectAsideList(item)">
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
      // asideList: store.getters['asideList']
      // menuList: store.getters['asideList'],
      asideList: [
        // { id: '1', title: '检测预警页面', path: '/detecteWarning' },
        { id: '2', title: '工作台', path: '/workTable' },
        { id: '4', title: '疾病患者管理', path: '/patientList' },
        { id: '3', title: '统计报表', path: '/statisticalReports' },
      ],
      activeIndex: '1',
    }
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
    async getAsideList(){
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
<style lang="less">
.el-menu-item.is-active {
  background-color: #669acc;
  color: #ffffff;
}
.el-menu-item:hover {
  background-color: #669acc;
  color: #ffffff;
}
.el-menu-vertical-demo {
  background-color: #ebebeb;
  text-align: left;
}
</style>
