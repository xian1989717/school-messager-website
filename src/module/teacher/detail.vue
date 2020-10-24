<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/teacher' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">详情</a></el-breadcrumb-item>
    </el-breadcrumb>

    <div
      class="detail-header">
      <b style="font-size:24px;">
        {{detailDate.name}}
      </b>
      <div>
        <el-button
          size="small"
          type="primary"
          @click="edit">
          编辑
        </el-button>
        <el-button
          size="small">
          删除
        </el-button>
      </div>
    </div>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">姓名：</label>
          <span>{{detailDate.name}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">年龄：</label>
          <span>{{detailDate.age}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">职称：</label>
          <span>{{detailDate.positionalTitles | transferPositionalTitles}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">身份证号码：</label>
          <span>{{detailDate.personId}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">毕业学校：</label>
          <span>{{detailDate.graduateSchool}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">专业：</label>
          <span>{{detailDate.speciality}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">进修时间：</label>
          <span>{{detailDate.studiesTime | formatTime}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">工作时间：</label>
          <span>{{detailDate.workStartTime | formatTime}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">性别：</label>
          <span>{{detailDate.gender | transferGender}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">毕业时间：</label>
          <span>{{detailDate.graduationTime | formatTime}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">取得职称时间：</label>
          <span>{{detailDate.obtainPositionalTitlesTime | formatTime}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">行政职务：</label>
          <span>{{detailDate.administrativePosition}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">联系地址：</label>
          <span>{{detailDate.address}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">联系电话：</label>
          <span>{{detailDate.phone}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">紧急联络人：</label>
          <span>{{detailDate.sosPerson}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">紧急联络人电话：</label>
          <span>{{detailDate.sosPersonPhone}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">是否班主任：</label>
          <span>{{detailDate.isClassTeacher | transferBoolean}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">所任学科：</label>
          <span>{{detailDate.subjectName}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">是否党员：</label>
          <span>{{detailDate.isPartyMember | transferBoolean}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">备注：</label>
          <span>{{detailDate.remark}}</span>
        </div>
      </el-col>
    </el-row>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="附件" name="attachment" />
      <el-tab-pane label="图片" name="img" />
    </el-tabs>
    <imgs
      v-if="activeName === 'img'" />
    <attachments
      v-if="activeName === 'attachment'"
      :id="detailDate.id" />
    <dlg-edit
      :formLabelAlign="copyDetailDate"
      :isShow="dlgState"
      @close="closeDlg" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import DlgEdit from './dialog/dlg-edit.vue'
  import Imgs from './components/v-imgs.vue'
  import Attachments from './components/v-atttachments.vue'

  export default {
    components: {
      Imgs,
      Attachments,
      DlgEdit
    },
    data () {
      return {
        activeName: 'attachment',
        dlgState: false,
        detailDate: {},
        copyDetailDate: {}
      }
    },
    computed: {
      ...mapState({
        activeItem: state => state.teacher.activeItem
      })
    },
    mounted () {
      this.detailDate = this.activeItem
    },
    methods: {
      handleClick (tab) {
        this.activeName = tab.name
      },
      edit () {
        this.copyDetailDate = this._.cloneDeep(this.detailDate)
        this.dlgState = true
      },
      async closeDlg (val) {
        if (val) {
          const { dispatch } = this.$store
          const res = await dispatch('teacher/getTeacherById', this.detailDate.id)
          this.detailDate = Object.assign(res, { teachSubjectId: `${res.teachSubjectId}` })
        }
        this.dlgState = false
      }
    }
  }
</script>

<style scoped>
  .detail-label {
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding-left: 5px;
  }
  .el-row {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 24px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
