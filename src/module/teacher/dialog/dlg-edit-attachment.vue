<template>
  <el-dialog
    title="添加"
    :visible.sync="isShow"
    :modal-append-to-body='false'
    :close-on-click-modal='false'
    width="1020px"
    :before-close="handleClose">
    <el-form
      :inline="true"
      :rules="rules"
      :model="formLabelAlign"
      ref="formLabelAlign"
      size="medium"
      label-width="110px">

      <el-form-item
        label="进修时间">
        <el-date-picker
          v-model="formLabelAlign.studiesTime"
          style="width:202px;"
          type="date"
          placeholder="选择日期" />
      </el-form-item>

      <el-form-item
        label="备注">
        <el-input
          v-model="formLabelAlign.remark" />
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