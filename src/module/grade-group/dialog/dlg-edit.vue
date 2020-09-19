<template>
  <el-dialog
    title="编辑"
    :visible.sync="isShow"
    :modal-append-to-body='false'
    :close-on-click-modal='false'
    width="30%"
    :before-close="handleClose">
    <el-form
      label-width="80px">
      <el-form-item
        label="评分">
        <el-input
          v-model.number="formLabelAlign.score" />
      </el-form-item>
      <el-form-item
        label="评价">
        <el-input
          v-model="formLabelAlign.appraise" />
      </el-form-item>
      <el-form-item
        label="备注">
        <el-input
          v-model="formLabelAlign.remark" />
      </el-form-item>
    </el-form>
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
        formLabelAlign: {
          score: 100,
          appraise: '',
          remark: ''
        }
      }
    },
    methods: {
      handleClose () {
        this.cancel()
      },
      cancel () {
        this.$emit('close')
      },
      save () {
        this.$emit('close')
      }
    }
  }
</script>
