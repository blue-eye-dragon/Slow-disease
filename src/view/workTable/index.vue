<template>
  <div>
    <div class="typeCardList">
      <div class="typeCard">
        待审核：<span> 10 </span>人
      </div>
      <div class="typeCard">
        已审核：<span> 10 </span>人
      </div>
      <div class="typeCard">
        全部：<span> 10 </span>人
      </div>
      <div class="typeCard">
        马上到期：<span> 10 </span>人
      </div>
    </div>
    <el-row class="content1">
        <el-col :span="18" style="backgroundColor:red">

        </el-col>
        <el-col :span="6" style="backgroundColor:red">

        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'workTable',
  data() {
    return {
      
    }
  },
}
</script>

<style lang="less">
  .typeCardList {
    display: flex;
    border-bottom: 10px solid #dad9d9;
    .typeCard {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 120px;
      margin: 20px;
      background-color: aquamarine;
    }
  }
  .content1 {
    height: calc(100vh - 300px);
    .el-col {
      height: 100%;
      padding: 0 10px;
    }
  }
</style>