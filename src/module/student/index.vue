<template>
  <div>
    <div
      class="detail-header">
      <b style="font-size:24px;">
        学生
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
        prop="name"
        label="姓名"
        width="120" />
      <el-table-column
        prop="studentNo"
        label="学号"
        width="150" />
      <el-table-column
        prop="birthday"
        label="出生日期"
        width="120" />
      <el-table-column
        prop="nation"
        label="民族"
        width="120" />
      <el-table-column
        prop="sex"
        label="性别"
        width="120" />
      <el-table-column
        prop="contactPhone"
        label="联系电话"
        width="120" />
      <el-table-column
        prop="contacts"
        label="联系人"
        width="120" />
      <el-table-column
        prop="address"
        label="地址"
        width="300" />
      <el-table-column
        prop="householdRegister"
        label="户籍地址"
        width="auto" />
      <el-table-column
        prop="remark"
        label="备注"
        width="200" />
      <el-table-column
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
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          studentNo: 1
        }]
      }
    },
    methods: {
      add () {

      },
      goDetail () {
        this.$router.push({ name: 'studentDetail' })
      }
    }
  }
</script>
