<template>
  <div>
    <el-upload
      :show-file-list="false"
      :action="urlVal">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <el-table
      :data="tableData"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="180" />
      <el-table-column
        prop="size"
        label="大小"
        width="180" />
      <el-table-column
        prop="date"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注" />
    </el-table>
  </div>
</template>

<script>
  export default {
    props: [
      'id'
    ],
    data () {
      return {
        tableData: [],
        // fileList: []
      }
    },
    computed: {
      urlVal () {
        console.log(this.id)
        return `http://localhost:3000/teacher/attachment/${this.id}`
      }
    },
    methods: {
      // handleChange (file, fileList) {
      //   this.fileList = fileList.slice(-3)
      // }
    }
  }
</script>