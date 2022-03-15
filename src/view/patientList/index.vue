<template>
  <div>
    <el-row class="searchForm">
      <el-col :span="18">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="患者姓名">
            <el-input v-model="formInline.user" placeholder="患者姓名" style="width:220px"></el-input>
          </el-form-item>
          <el-form-item label="证件号">
            <el-input v-model="formInline.id" placeholder="证件号"></el-input>
          </el-form-item>
          <el-form-item label="科室">
            <el-select v-model="formInline.department" placeholder="请选择">
              <el-option
                v-for="item in departmentList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <transition
            :duration="{ enter: 800, leave: 100 }"
            mode="out-in"
            name="el-fade-in-linear"
          >
            <div
              class="selectMode"
              v-if="!isUpDown"
            >
              <el-form-item label="当前状态">
                <el-select v-model="formInline.state" placeholder="请选择">
                  <el-option
                    v-for="item in stateList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="申报时间">
                <el-date-picker
                  v-model="formInline.time"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </div>
          </transition>
        </el-form>
      </el-col>
      <el-col :span="6">
          <el-button size="medium" type="primary" @click="onSubmit">查询</el-button>
          <el-button size="medium" type="primary" @click="onSubmit">重置</el-button>
          <el-button size="medium" type="primary" :icon="isUpDown?'el-icon-arrow-up':'el-icon-arrow-down'" @click="onUpDown" class="highSearch">高级查询</el-button>
      </el-col>
    </el-row>
    <div>
      <div style="textAlign:left;marginBottom:10px">
        <el-button type="primary" @click="add">新增</el-button>
      </div>
      <el-table :data="formData"
                stripe
                border
                style="width: 100%">
        <el-table-column
          prop="name1"
          label="登记号"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="name2"
          label="姓名"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="name3"
          label="性别"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="name4"
          label="证件号"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="name5"
          label="录入日期"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="name6"
          label="科室"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="name7"
          label="状态"
          width="120"
        >
        </el-table-column>
        <el-table-column
          label="操作"
        >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)"
          >审核</el-button>
          <el-button
            size="mini"
            style="margin-right:10px"
            @click="handleEdit(scope.row)"
          >编辑</el-button>
          <el-popconfirm
            title="是否删除"
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
      isUpDown: true,
      pager: {
        page: 1,
        limit: 10
      },
      stateList: [
        {
          value: '待报',
          label: '待报'
        },
        {
          value: '已报',
          label: '已报'
        },
        {
          value: '被审',
          label: '被审'
        },
        {
          value: '被退',
          label: '被退'
        },
        {
          value: '全部',
          label: '全部'
        }
      ],
      departmentList: [
        {
          value: '1',
          label: '神经内科'
        },
        {
          value: '2',
          label: '骨科'
        },
        {
          value: '3',
          label: '内分泌科'
        },
        {
          value: '4',
          label: '肿瘤科'
        },
      ],
      formData: [
        {
          name1: '1212121',
          name2: '里斯',
          name3: '男',
          name4: '123111199412080075',
          name5: '202-01-03',
          name6: '神经内科',
          name7: '待录入',
        },
        {
          name1: '1212121',
          name2: '里斯',
          name3: '男',
          name4: '123111199412080075',
          name5: '202-01-03',
          name6: '神经内科',
          name7: '待录入',
        },
        {
          name1: '1212121',
          name2: '里斯',
          name3: '男',
          name4: '123111199412080075',
          name5: '202-01-03',
          name6: '神经内科',
          name7: '待录入',
        },
        {
          name1: '1212121',
          name2: '里斯',
          name3: '男',
          name4: '123111199412080075',
          name5: '202-01-03',
          name6: '神经内科',
          name7: '待录入',
        }
      ],
      formInline: {},
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
    } 
  },
  methods: {
    add () {
      this.$router.push('/cardInformation')
    },
    handleEdit () {
      this.$router.push('/cardInformation')
    },
    onUpDown () {
      this.isUpDown = !this.isUpDown
    },
  }
}
</script>

<style lang="less">
.searchForm {
  margin-bottom: 20px;
  border-bottom: 1px solid;
}
</style>