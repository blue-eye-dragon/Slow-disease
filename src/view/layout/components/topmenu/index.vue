<template>
  <div id="topmenu">
    <el-menu
      :default-active="currenMenu"
      :active="currenMenu" 
      class="el-menu-demo" 
      mode="horizontal"
      text-color="#ffffff"
      active-text-color="#f1f3f4">
      <el-menu-item
         v-for="item in menuList"
        :key="item.id"
        :index="item.id"
        @click="selectAsideList(item)">{{item.title}}</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
// import { store } from '@/store'
import { mapGetters} from 'vuex'
export default {
  name: 'topmenu',
  data() {
    return {
      currenMenu1: ''
    }
  },
  computed: {
    ...mapGetters(['menuList','currenMenu']),
    // currenMenu1 () {
    //   return this.currenMenu
    // }
  },
  mounted () {
    
  },
  methods: {
    selectAsideList(item) {
      this.$router.push(item.path)
    },
  },
}
</script>
<style lang="less" scoped>
  #topmenu {
    position: absolute;
    left: 300px;
    color:#ffffff
  }
  .el-menu {
    background-color: transparent;
  }
  .el-menu-item.is-active {
    background-color: #0062a1;
  }
  .el-menu-item:hover {
    background-color: #0062a1;
  }
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus {
    background-color: #0062a1;
  }
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover {
    background-color: #0062a1;
  }
</style>