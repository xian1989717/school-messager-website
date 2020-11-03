<template>
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
      :model="student"
      ref="student"
      size="medium"
      label-width="110px">
      <el-form-item
        label="姓名"
        prop="name">
        <el-input
          v-model="student.name" />
      </el-form-item>

      <el-form-item
        label="学号"
        prop="age">
        <el-input
          v-model.number="student.studentNo" />
      </el-form-item>

      <el-form-item
        label="出生日期">
        <el-input
          v-model.number="student.birthday" />
      </el-form-item>

      <el-form-item
        label="民族">
        <el-input
          v-model.number="student.nation" />
      </el-form-item>

      <el-form-item
        label="性别">
        <el-input
          v-model="student.sex" />
      </el-form-item>

      <el-form-item
        label="联系电话">
        <el-input
          v-model="student.contactPhone" />
      </el-form-item>

      <el-form-item
        label="联系人">
        <el-input
          v-model="student.contacts" />
      </el-form-item>
      <!-- <el-form-item
        label="地址">
        <el-input
          v-model="student.remark" />
      </el-form-item>
      <el-form-item
        label="户籍地址">
        <el-input
          v-model="student.remark" />
      </el-form-item> -->
      <el-form-item
        label="备注">
        <el-input
          v-model="student.remark" />
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
        @click="save">
        确 定
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    props: [
      'isShow'
    ],
    data () {
      return {
        student: {
          studentNo: null,
          birthday: new Date(),
          nation: '',
          sex: 'male',
          contactPhone: null,
          contacts: '',
          remark: ''
        },
        rules: []
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