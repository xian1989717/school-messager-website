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
        prop="positionalTitles"
        label="职称"
        width="120"
        :formatter="positionalTitlesFormatter">
      </el-table-column>
      <el-table-column
        prop="personId"
        label="身份证号码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="graduateSchool"
        label="毕业学校"
        width="120">
      </el-table-column>
      <el-table-column
        prop="speciality"
        label="专业"
        width="120" />
      <el-table-column
        prop="studiesTime"
        label="进修时间"
        width="120"
        :formatter="formatTime" />
      <el-table-column
        prop="workStartTime"
        label="工作时间"
        width="120"
        :formatter="formatTime" />
      <el-table-column
        prop="gender"
        label="性别"
        width="120"
        :formatter="formatGender" />
      <el-table-column
        prop="graduationTime"
        label="毕业时间"
        width="120"
        :formatter="formatTime" />
      <el-table-column
        prop="obtainPositionalTitlesTime"
        label="取得职称时间"
        width="120"
        :formatter="formatTime" />
      <el-table-column
        prop="administrativePosition"
        label="行政职务"
        width="120" />
      <el-table-column
        prop="address"
        label="联系地址"
        width="250">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系电话"
        width="300">
      </el-table-column>
      <el-table-column
        prop="sosPerson"
        label="紧急联络人"
        width="300">
      </el-table-column>
      <el-table-column
        prop="sosPersonPhone"
        label="紧急联络人电话"
        width="300">
      </el-table-column>
      <el-table-column
        prop="isClassTeacher"
        label="是否班主任"
        width="120"
        :formatter="formatBoolean">
      </el-table-column>
      <el-table-column
        prop="subjectName"
        label="所任学科"
        width="120">
      </el-table-column>
      <el-table-column
        prop="isPartyMember"
        label="是否党员"
        width="120"
        :formatter="formatBoolean">
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
            @click="deleteItem(scope.row)"
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
  import {
    formatTime,
    transferBoolean,
    transferGender,
    transferPositionalTitles
  } from '../../unit/format.js'
  import DlgAdd from './dialog/dlg-add.vue'

  export default {
    components: {
      DlgAdd
    },
    data () {
      return {
        dlgState: false,
        tableData: [],
        teachSubjectOptions: Object.freeze([
          {
            value: '1',
            label: '语文'
          },
          {
            value: '2',
            label: '数学'
          },
          {
            value: '3',
            label: '英语'
          },
          {
            value: '4',
            label: '思想品德'
          },
          {
            value: '5',
            label: '美术'
          },
          {
            value: '6',
            label: '音乐'
          },
          {
            value: '7',
            label: '体育'
          }
        ])
      }
    },
    async mounted () {
      this.getTeacherList()
    },
    methods: {
      async deleteItem (rows) {
        const res = await this.$store.dispatch('deleteTeacher', rows.id)
        if (res) {
          this.getTeacherList()
        }
      },
      closeDlg () {
        this.dlgState = false
        this.getTeacherList()
      },
      add () {
        this.dlgState = true
      },
      goDetail (row) {
        this.$router.push(
          {
            name: 'teacherDetail',
            params: Object.assign(
              row,
              {
                teachSubjectId: `${row.teachSubjectId}`
              }
            )
          })
      },
      positionalTitlesFormatter (row) {
        return transferPositionalTitles(row.positionalTitles)
      },
      formatTime (row, column, cellValue) {
        return formatTime(cellValue)
      },
      formatBoolean (row, column, cellValue) {
        return transferBoolean(cellValue)
      },
      formatGender (row, column, cellValue) {
        return transferGender(cellValue)
      },
      async getTeacherList () {
        this.tableData = await this.$store.dispatch('getTeacherAll')
      }
    }
  }
</script>