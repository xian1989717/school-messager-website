<template>
  <div>
    <el-upload
      :show-file-list="false"
      :action="urlVal"
      :on-success="uploadFile"
      style="margin-bottom:15px;">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <el-table
      :data="tableDate"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="350" />
      <el-table-column
        prop="size"
        label="大小"
        width="180" />
      <el-table-column
        prop="uploadTime"
        label="上传时间"
        width="180"
        :formatter="formatTime">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注" />
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template
          slot-scope="scope">
          <el-button
            @click="downLoad(scope.row)"
            type="text"
            size="small">
            下载
          </el-button>
          <el-button
            @click="editItem(scope.row)"
            type="text"
            size="small">
            编辑
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
    <dlg-edit-attachment
      :is-show="isShow"
      :data="rowData" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { formatTime } from '../../../unit/format.js'
  import { _downloadImg } from '../../../unit/http.js'

  import DlgEditAttachment from '../dialog/dlg-edit-attachment.vue'

  export default {
    components: {
      DlgEditAttachment
    },
    data () {
      return {
        tableDate: [],
        isShow: false,
        rowData: Object.freeze({
          name: '',
          remark: ''
        })
        // fileList: []
      }
    },
    computed: {
      ...mapState({
        activeItem: state => state.teacher.activeItem
      }),
      urlVal () {
        const { id } = this.activeItem
        return `http://localhost:3000/teacher/attachment/${id}`
      }
    },
    mounted () {
      this.getAttachments()
    },
    methods: {
      editItem (row) {
        this.isShow = true
        console.log(row)
        this.rowData = row
      },
      uploadFile (response) {
        if (response) {
          this.getAttachments()
        }
      },
      async downLoad (row) {
        const { id: teacherId } = this.activeItem
        const { id } = row
        const url = `http://localhost:3000/teacher/${teacherId}/attachment/${id}/download`
        _downloadImg(url)
      },
      async deleteItem (row) {
        const { id: teacherId } = this.activeItem
        const { id, attachmentKey } = row
        const { dispatch } = this.$store
        const res = await dispatch('teacher/deleteTeacherAttachment', { teacherId, id, attachmentKey })
        if (res) {
          this.getAttachments()
        }
      },
      formatTime (row, column, cellValue) {
        return formatTime(cellValue)
      },
      async getAttachments () {
        const { dispatch } = this.$store
        const { id } = this.activeItem
        this.tableDate = await dispatch('teacher/getTeacherAttachment', id)
      }
    }
  }
</script>
