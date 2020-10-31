<template>
  <el-dialog
    title="更改"
    :visible.sync="isShow"
    :modal-append-to-body='false'
    :close-on-click-modal='false'
    width="400px"
    :before-close="handleClose">
    <el-form
      :inline="true"
      :rules="rules"
      :model="data"
      ref="attachment"
      size="medium"
      label-width="110px">

      <el-form-item
        label="名称">
        <el-input
          v-model="data.name" />
      </el-form-item>

      <el-form-item
        label="备注">
        <el-input
          v-model="data.remark" />
      </el-form-item>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button
        size="small"
        @click="cancel">
        取 消
      </el-button>
      <el-button
        size="small"
        type="primary"
        @click="save('formLabelAlign')">
        确 定
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: [
      'data',
      'isShow'
    ],
    data () {
      return {
        rules: Object.freeze({})
      }
    },
    computed: {
      ...mapState({
        activeItem: state => state.teacher.activeItem
      })
    },
    methods: {
      handleClose () {
        this.cancel()
      },
      save () {
        this.$refs.attachment.validate(async (valid) => {
          if (valid) {
            const { dispatch } = this.$store
            this.data.teacherId = this.activeItem.id
            const res = await dispatch(
              'teacher/updateAttachment',
              this.data
            )
            if (res) {
              this.$emit('success')
            }
          }
        })
      },
      cancel () {
        this.$emit('close')
      }
    }
  }
</script>