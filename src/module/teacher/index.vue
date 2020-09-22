<template>
  <div>
    <div
      class="detail-header">
      <b style="font-size:24px;">
        教师
      </b>
      <div>
        <el-button
          size="small"
          type="primary"
          @click="add">
          添加
        </el-button>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="name"
        label="姓名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="120">
      </el-table-column>
      <el-table-column
        prop="rank"
        label="职称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="rank"
        label="身份证号码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="rank"
        label="毕业学校"
        width="120">
      </el-table-column>
      <el-table-column
        prop="rank"
        label="专业"
        width="120" />
      <el-table-column
        prop="rank"
        label="进修时间"
        width="120" />
      <el-table-column
        prop="rank"
        label="工作时间"
        width="120" />
      <el-table-column
        prop="rank"
        label="性别"
        width="120" />
      <el-table-column
        prop="rank"
        label="毕业时间"
        width="120" />
      <el-table-column
        prop="rank"
        label="取得职称时间"
        width="120" />
      <el-table-column
        prop="rank"
        label="行政职务"
        width="120" />
      <el-table-column
        prop="address"
        label="联系地址"
        width="250">
      </el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="联系电话"
        width="300">
      </el-table-column>
      <el-table-column
        prop="emergencyConPerson"
        label="紧急联络人"
        width="300">
      </el-table-column>
      <el-table-column
        prop="isHeadmaster"
        label="是否班主任"
        width="120">
      </el-table-column>
      <el-table-column
        prop="subject"
        label="所任学科"
        width="120">
      </el-table-column>
      <el-table-column
        prop="partyMember"
        label="是否党员"
        width="120">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template
          slot-scope="scope">
          <el-button
            @click="goDetail(scope.row)"
            type="text"
            size="small">
            查看
          </el-button>
          <el-button
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <dlg-add
      :isShow="dlgState"
      @close="closeDlg" />
  </div>
</template>

<script>
  import DlgAdd from './dialog/dlg-add.vue'

  export default {
    components: {
      DlgAdd
    },
    data () {
      return {
        dlgState: false,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    methods: {
      deleteRow (index, rows) {
        rows.splice(index, 1);
      },
      closeDlg () {
        this.dlgState = false
      },
      add () {
        this.dlgState = true
      },
      goDetail (row) {
        this.$router.push({ path: '/teacherDetail', params: row })
      }
    }
  }
</script>