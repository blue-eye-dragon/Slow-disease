<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="传染病页一" name="first">
        <h3>中华人民共和国传染病报告卡</h3>
        <el-row>
            <el-col :span="12">
              卡片编号：
              <el-input v-model="cardId" placeholder="请输入内容" style="width:200px"></el-input>
            </el-col>
            <el-col :span="12">
              报卡类别：
              <el-select v-model="cardType" placeholder="请选择" style="width:200px">
                <el-option label="初次报告" :value="1"></el-option>
                <el-option label="订正报告" :value="2"></el-option>
              </el-select>
            </el-col>
        </el-row>
        <div style="padding:20px"> 
          <el-form ref="form" :model="form" label-width="85px">
              <el-row>
                  <el-col :span="6">
                    <el-form-item label="患者姓名：">
                      <el-input v-model="form.name" placeholder="请输入患者姓名"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="( 患儿家长姓名 )：" label-width="130px">
                      <el-input v-model="form.name" placeholder="请输入患儿家长姓名"></el-input>
                    </el-form-item>
                  </el-col>
              </el-row>
              <el-row>
                  <el-col :span="8">
                    <el-form-item label="有效证件号：" label-width="100px">
                      <el-input v-model="form.name" placeholder="请输入有效证件号"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item label="性别：">
                      <el-radio-group v-model="form.sex">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="2">女</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
              </el-row>
              <el-row>
                  <el-col :span="6">
                    <el-form-item label="出生日期：">
                      <el-date-picker
                        v-model="form.birthday"
                        type="date"
                        placeholder="选择日期">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="*如出生日期不详，实足年龄：" label-width="210px">
                      <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item label="年龄单位：">
                      <template>
                        <el-select v-model="form.ageType" placeholder="请选择">
                          <el-option
                            v-for="item in option"
                            :label="item.label"
                            :value="item.value"
                            :key="item.value">
                          </el-option>
                        </el-select>
                      </template>
                    </el-form-item>
                  </el-col>
              </el-row>
              <el-row>
                  <el-col :span="16">
                    <el-form-item label="工作单位（幼儿园、学校或单位）：" label-width="240px">
                      <el-input
                        type="textarea"
                        autosize
                        placeholder="请输入内容"
                        v-model="form.textarea1">
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="联系电话：">
                      <el-input v-model="form.iphone" placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-col>
              </el-row>
              <el-row>
                <el-col :span="14">
                  <el-form-item label="病人属于：">
                    <el-radio-group v-model="form.home">
                      <el-radio :label="1">本县区</el-radio>
                      <el-radio :label="2">本市其它县区</el-radio>
                      <el-radio :label="3">本省其他城市</el-radio>
                      <el-radio :label="4">其它省</el-radio>
                      <el-radio :label="5">港澳台</el-radio>
                      <el-radio :label="6">外籍</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <el-form-item label="详细地址：">
                    <el-cascader
                      v-model="form.adress"
                      :options="options1"
                      @change="handleChange">
                    </el-cascader>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="精确到门牌号：" label-width="130px">
                    <el-input v-model="form.doorId" placeholder="请输入门牌号"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                  <el-col :span="24">
                    <el-form-item label="人群分类：">
                      <el-radio-group v-model="form.peopleType" class="peopleType">
                        <el-radio v-for="item in peopleType" :label="item.value" :key="item.value">{{item.label}}</el-radio> 
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
              </el-row>
                <el-row>
                    <el-col :span="10">
                      <el-form-item label="发病日期（病原携带者填写诊断日期）：" label-width="270px">
                        <el-date-picker
                          v-model="form.data1"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="诊断日期：">
                        <el-date-picker
                          v-model="form.data2"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="死亡日期：">
                        <el-date-picker
                          v-model="form.data3"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                </el-row>
              <el-row>
                  <el-col :span="24">
                    <el-form-item label="病历分类：">
                      <el-radio-group v-model="form.medicalList" class="peopleType">
                        <el-radio v-for="item in peopleType" :label="item.value" :key="item.value">{{item.label}}</el-radio> 
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
              </el-row>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="传染病页二" name="second">传染病页二</el-tab-pane>
      <el-tab-pane label="性病页一" name="third">
        <h3>中华人民共和国性病报告卡</h3>

      </el-tab-pane>
      <el-tab-pane label="性病页二" name="fourth">性病页二</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'cardInformation',
  data() {
    return {
      activeName: 'first',
      cardId: '',
      cardType: '',
      options1: [],
      peopleType: [
        {
          label: '幼托儿童',
          value: 1
        },
        {
          label: '散居儿童',
          value: 2
        },
        {
          label: '学生（大、中、小学）',
          value: 3
        },
        {
          label: '教师',
          value: 4
        },
        {
          label: '保育员及保姆',
          value: 5
        },
        {
          label: '餐饮食品业',
          value: 6
        },
        {
          label: '公共场所服务员',
          value: 7
        },
        {
          label: '商务服务',
          value: 8
        },
        {
          label: '医务人员',
          value: 9
        },
        {
          label: '工人',
          value: 10
        },
        {
          label: '农名',
          value: 11
        },
        {
          label: '牧民',
          value: 12
        },
        {
          label: '渔（船）民',
          value: 13
        },
        {
          label: '海员及长途驾驶员',
          value: 14
        },
        {
          label: '干部职员',
          value: 15
        },
        {
          label: '离退人员',
          value: 16
        },
        {
          label: '家务及待业',
          value: 17
        },
        {
          label: '不详',
          value: 18
        },
        {
          label: '其他',
          value: 19
        }
      ],
      medicalList: [
        {
          
        }
      ],
      option: [
        {label: '岁', value: 1},
        {label: '月', value: 2},
        {label: '天', value: 3},
      ],
      form: {
        type: []
      }
    }
  },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleChange(){}
    }
}
</script>

<style>
.el-tabs__item.is-active {

}
.el-col {
  padding: 0 20px;
}
.peopleType {
  display: flex;
  flex-wrap: wrap;
  height: 60px;
  flex-direction: row;
  align-content: stretch;
  align-items: center;
}
</style>