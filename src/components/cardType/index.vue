<template>
  
    <div class="typeCardList">
      <div v-for="(item,index) in cardList" :key="item.title" :class="`typeCard color${index}`">
        <p style="margin: 5px 0px;text-align: left;display: flex;align-items: center;">
          <span style="height: 10px;width: 3px;background-color: #fff;margin-right: 10px;"></span>
          {{item.title}}</p>
        <div style="display: flex;marginTop:10px;justify-content: space-around;">
          <div>
            <p style="font-size: 12px;textAlign:right">待审核：<span style="min-width: 40px;display: inline-block;text-align: center;fontSize:14px">{{item.toAudit}}</span>人</p>
            <p style="font-size: 12px;textAlign:right">已审核：<span style="min-width: 40px;display: inline-block;text-align: center;fontSize:14px">{{item.audited}}</span>人</p>
            <p style="font-size: 12px;textAlign:right">马上到期：<span style="min-width: 40px;display: inline-block;text-align: center;fontSize:14px">{{item.willExpire}}</span>人</p>
          </div>
          <div>
            <img src="../../assets/传染科.png" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cardType',
  props: {
    cardList: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="less">
  .typeCardList {
    display: flex;
    color: #ffffff;
    border-bottom: 10px solid #dad9d9;
    .typeCard {
      flex: 1;
      min-height: 100px;
      padding: 0 10px;
      margin: 0 10px 10px;
      border-radius: 10px;
    }
  }
.color0 {
  background-image: linear-gradient(to right, #ff823c , #ff9a1b);
}
.color1 {
  background-image: linear-gradient(to right, #f9bd39 , #f2cc09);
}
.color2 {
  background-image: linear-gradient(to right, #476cea , #519efe);
}
.color3 {
  background-image: linear-gradient(to right, #77ad04 , #79d728);
}
.color4 {
  background-image: linear-gradient(to right, #05aeee , #23b8dd);
}
</style>