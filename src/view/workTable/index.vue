<template>
  <div>
    <cardType :cardList="cardList"></cardType>
    <el-row class="content1">
        <el-col :span="16">
          <el-table :data="tableData"
                    stripe
                    border
                    max-height="500"
                    style="width: 100%">
            <el-table-column prop="department"
                             fixed
                             label="科室">
            </el-table-column>
            <el-table-column prop="toReported"
                             label="待上报"
                             sortable
                             width="120">
            </el-table-column>
            <el-table-column prop="exclude"
                             label="排除"
                             sortable
                             width="120">
            </el-table-column>
            <el-table-column prop="pending"
                             label="待审批"
                             sortable
                             width="120">
            </el-table-column>
            <el-table-column prop="approval"
                             label="已审批"
                             sortable
                             width="120">
            </el-table-column>
            <el-table-column prop="Back"
                             label="退回"
                             sortable
                             width="120">
            </el-table-column>
            <el-table-column prop="all"
                             label="全部"
                             sortable
                             width="120">
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="8" style="backgroundColor:red">

        </el-col>
    </el-row>
  </div>
</template>

<script>
import cardType from '@/components/cardType/index'
export default {
  name: 'workTable',
  components: {
    cardType
  },
  data() {
    return {
      cardList: [
        {
          title: '传染病',
          toAudit: '144',
          audited: '155',
          willExpire: '1423'
        },
        {
          title: '传染病',
          toAudit: '144',
          audited: '155',
          willExpire: '1423'
        },
        {
          title: '传染病',
          toAudit: '144',
          audited: '155',
          willExpire: '1423'
        },
        {
          title: '传染病',
          toAudit: '144',
          audited: '155',
          willExpire: '1423'
        },
        {
          title: '传染病',
          toAudit: '144',
          audited: '155',
          willExpire: '1423'
        }
      ],
      tableData: [
        {
          department: '神经内科',
          toReported: '12',
          exclude: '5',
          pending: '13',
          approval: '51',
          Back: '14',
          all: '233'
        },
        {
          department: '消化科',
          toReported: '12',
          exclude: '5',
          pending: '13',
          approval: '51',
          Back: '14',
          all: '233'
        },
        {
          department: '血液科',
          toReported: '12',
          exclude: '5',
          pending: '13',
          approval: '51',
          Back: '14',
          all: '233'
        },
        {
          department: '肾内科',
          toReported: '12',
          exclude: '5',
          pending: '13',
          approval: '51',
          Back: '14',
          all: '233'
        },
        {
          department: '内分泌科',
          toReported: '12',
          exclude: '5',
          pending: '13',
          approval: '51',
          Back: '14',
          all: '233'
        },
        {
          department: '神经外科',
          toReported: '12',
          exclude: '5',
          pending: '13',
          approval: '51',
          Back: '14',
          all: '233'
        }
      ]
    }
  },
}
</script>

<style lang="less">
  .content1 {
    height: calc(100vh - 185px);
    padding-top: 10px;
    .el-col {
      height: 100%;
      padding: 0 10px;
    }
  }
</style>