<template>
  <el-dialog
    title="提示"
    :visible.sync="isShow"
    width="30%"
    :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    props: ['isShow'],
    data () {
      return {
      }
    },
    methods: {
      handleClose (done) {
        this.$confirm('确认关闭？')
          // eslint-disable-next-line no-unused-vars
          .then(_ => {
            done();
          })
          // eslint-disable-next-line no-unused-vars
          .catch(_ => { });
      },
      cancel () {
        this.$emit('close', true)
      },
      save () {
        this.$emit('close', true)
      }
    }
  }
</script>
