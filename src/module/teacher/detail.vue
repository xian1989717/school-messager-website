<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/teacher' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">详情</a></el-breadcrumb-item>
    </el-breadcrumb>

    <div
      class="detail-header">
      <b style="font-size:24px;">
        {{detailData.name}}
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
          <span>{{detailData.name}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">年龄：</label>
          <span>{{detailData.age}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">职称：</label>
          <span>{{detailData.positionalTitles}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">身份证号码：</label>
          <span>{{detailData.personId}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">毕业学校：</label>
          <span>{{detailData.graduateSchool}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">专业：</label>
          <span>{{detailData.speciality}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">进修时间：</label>
          <span>{{detailData.studiesTime}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">工作时间：</label>
          <span>{{detailData.workStartTime}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">性别：</label>
          <span>{{detailData.gender}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">毕业时间：</label>
          <span>{{detailData.graduationTime}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">取得职称时间：</label>
          <span>{{detailData.obtainPositionalTitlesTime}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">行政职务：</label>
          <span>{{detailData.administrativePosition}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">联系地址：</label>
          <span>{{detailData.address}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">联系电话：</label>
          <span>{{detailData.phone}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">紧急联络人：</label>
          <span>{{detailData.sosPerson}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">紧急联络人电话：</label>
          <span>{{detailData.sosPersonPhone}}</span>
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
      v-if="activeName === 'attachment'" />
    <!-- <dlg-edit
      :isShow="dlgState"
      @close="closeDlg" /> -->
  </div>
</template>

<script>
  import Imgs from './components/v-imgs.vue'
  import Attachments from './components/v-atttachments.vue'

  export default {
    components: {
      Imgs,
      Attachments
    },
    data () {
      return {
        activeName: 'attachment',
        dlgState: false,
        detailData: {}
      }
    },
    mounted () {
      this.detailData = this.$route.params
    },
    methods: {
      handleClick (tab) {
        this.activeName = tab.name
      },
      edit () {
        this.dlgState = true
      },
      closeDlg () {
        this.dlgState = false
      }
    }
  };
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
