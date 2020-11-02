<template>
  <div>
    <el-dialog
      title="添加"
      :visible.sync="isShow"
      :modal-append-to-body='false'
      :close-on-click-modal='false'
      width="700px"
      :before-close="handleClose">
      <el-form
        :inline="true"
        :rules="rules"
        :model="formScores"
        ref="formScores"
        size="medium"
        label-width="110px">
        <el-form-item
          label="年级"
          prop="name">
          <el-input
            v-model="formScores.grade" />
        </el-form-item>

        <el-form-item
          label="学期"
          prop="age">
          <el-input
            v-model.number="formScores.semester" />
        </el-form-item>

        <el-form-item
          label="是否测试">
          <el-select
            v-model="formScores.isTest"
            placeholder="请选择"
            style="width:202px;">
            <el-option
              v-for="item in formScores"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="语文">
          <el-input
            v-model.number="formScores.chinese" />
        </el-form-item>

        <el-form-item
          label="数学">
          <el-input
            v-model="formScores.mathematics" />
        </el-form-item>

        <el-form-item
          label="英语">
          <el-input
            v-model="formScores.english" />
        </el-form-item>

        <el-form-item
          label="备注">
          <el-input
            v-model="formScores.remark" />
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer">
        <el-button
          size="small"
          @click="cancel">
          取 消
        </el-button>
        <el-button
          size="small"
          type="primary"
          @click="save('formScores')">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    props: [
      'isShow'
    ],
    data () {
      return {
        rules: [

        ],
        formScores: {

        }
      }
    },
    methods: {
      save () {

      },
      cancel () {
        this.$emit('close')
      },
      handleClose () {
        this.cancel()
      }
    }
  }
</script>