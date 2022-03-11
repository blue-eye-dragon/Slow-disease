<template>
  <div>
    <div class="searchForm">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="onSubmit">重置</el-button>
      </div>
    </div>
    <div>
      <el-table :data="formData"
                :stripe="true"
                :border="true"
                style="width: 100%">
        <el-table-column
          prop="name"
          label="等级号"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="性别"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="证件号"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="录入日期"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="状态"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="操作"
        >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)"
          >审核</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.row)"
          >编辑</el-button>
          <el-popconfirm
            title="是否删除该社区"
            @confirm="handleDelete(scope.row)"
          >
            <el-button size="mini" slot="reference" type="danger">删除</el-button>
          </el-popconfirm>
        </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="com-pagination"
        @size-change="search"
        @current-change="search"
        :page-sizes="[10, 20, 30, 40, 50, 100]"
        :current-page.sync="pager.page"
        :page-size.sync="pager.limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'memberlist',
  data() {
    return {
      total: 0,
      pager: {
        page: 1,
        limit: 10
      },
      formData: [],
      formInline: {}
    } 
  },
}
</script>

<style>

</style>