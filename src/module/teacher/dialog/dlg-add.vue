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
        label="姓名"
        prop="name">
        <el-input
          v-model="formLabelAlign.name" />
      </el-form-item>

      <el-form-item
        label="年龄"
        prop="age">
        <el-input
          v-model.number="formLabelAlign.age" />
      </el-form-item>

      <el-form-item
        label="职称">
        <el-input
          v-model="formLabelAlign.positionalTitles" />
      </el-form-item>

      <el-form-item
        label="获取职称时间">
        <el-date-picker
          v-model="formLabelAlign.obtainPositionalTitlesTime"
          style="width:202px;"
          type="date"
          placeholder="选择日期" />
      </el-form-item>

      <el-form-item
        label="身份证号码"
        prop="personId">
        <el-input
          v-model="formLabelAlign.personId" />
      </el-form-item>

      <el-form-item
        label="毕业院校"
        prop="graduateSchool">
        <el-input
          v-model="formLabelAlign.graduateSchool" />
      </el-form-item>

      <el-form-item
        label="毕业时间"
        prop="graduationTime">
        <el-date-picker
          v-model="formLabelAlign.graduationTime"
          style="width:202px;"
          type="date"
          placeholder="选择日期" />
      </el-form-item>

      <el-form-item
        label="工作时间"
        prop="workStartTime">
        <el-date-picker
          v-model="formLabelAlign.workStartTime"
          style="width:202px;"
          type="date"
          placeholder="选择日期" />
      </el-form-item>

      <el-form-item
        label="专业"
        prop="speciality">
        <el-input
          v-model="formLabelAlign.speciality" />
      </el-form-item>

      <el-form-item
        label="行政职务">
        <el-input
          v-model="formLabelAlign.administrativePosition" />
      </el-form-item>
      <el-form-item
        label="联系地址"
        prop="address">
        <el-input
          v-model="formLabelAlign.address" />
      </el-form-item>
      <el-form-item
        label="联系电话"
        prop="phone">
        <el-input
          v-model="formLabelAlign.phone" />
      </el-form-item>
      <el-form-item
        label="紧急联系人">
        <el-input
          v-model="formLabelAlign.sosPerson" />
      </el-form-item>
      <el-form-item
        label="紧急联系人电话">
        <el-input
          v-model="formLabelAlign.sosPersonPhone" />
      </el-form-item>
      <el-form-item
        label="所任学科"
        prop="teachSubject">
        <el-input
          v-model="formLabelAlign.teachSubject" />
      </el-form-item>
      <el-form-item
        label="性别">
        <el-radio-group
          v-model="formLabelAlign.sex"
          style="width:202px;">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="是否班主任">
        <el-radio-group
          v-model="formLabelAlign.isClassTeacher"
          style="width:202px;">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="是否党员">
        <el-radio-group
          v-model="formLabelAlign.isPartyMember"
          style="width:202px;">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>

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

<script>
  export default {
    props: ['isShow'],
    data () {
      return {
        formLabelAlign: {
          name: '',
          age: null,
          positionalTitles: '',
          personId: null,
          graduateSchool: '',
          speciality: '',
          studiesTime: new Date(),
          workStartTime: new Date(),
          sex: '男',
          graduationTime: new Date(),
          obtainPositionalTitlesTime: new Date(),
          administrativePosition: '',
          address: '',
          phone: null,
          sosPerson: '',
          sosPersonPhone: null,
          isClassTeacher: false,
          teachSubject: '',
          isPartyMember: false,
          remark: ''
        },
        rules: Object.freeze({
          name: [
            { required: true, message: '名称不能为空', trigger: 'blur' }
          ],
          age: [
            { required: true, message: '年龄不能为空', trigger: 'blur' }
          ],
          personId: [
            { required: true, message: '身份证号码不能为空', trigger: 'blur' }
          ],
          graduateSchool: [
            { required: true, message: '毕业院校不能为空', trigger: 'blur' }
          ],
          graduationTime: [
            { required: true, message: '毕业时间不能为空', trigger: 'blur' }
          ],
          workStartTime: [
            { required: true, message: '工作时间不能为空', trigger: 'blur' }
          ],
          speciality: [
            { required: true, message: '专业不能为空', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '名称不能为空', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '联系电话不能为空', trigger: 'blur' }
          ],
          teachSubject: [
            { required: true, message: '所任学科不能为空', trigeer: 'blur' }
          ]
        })
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
        this.$refs.formLabelAlign.validate((valid) => {
          if (valid) {
            alert('submit!')
            this.$emit('close')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>