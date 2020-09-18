<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">详情</a></el-breadcrumb-item>
    </el-breadcrumb>

    <div
      class="detail-header">
      <b style="font-size:24px;">
        罗老师
      </b>
      <div>
        <el-button @click="edit">编辑</el-button>
        <el-button>删除</el-button>
      </div>
    </div>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">姓名：</label>
          <span>罗老师</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">年龄：</label>
          <span>18</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">职称：</label>
          <span>18</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">联系地址：</label>
          <span>18</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">姓名：</label>
          <span>罗老师</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">年龄：</label>
          <span>18</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">职称：</label>
          <span>18</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">联系地址：</label>
          <span>18</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">姓名：</label>
          <span>罗老师</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">年龄：</label>
          <span>18</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">职称：</label>
          <span>18</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">联系地址：</label>
          <span>18</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">姓名：</label>
          <span>罗老师</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">年龄：</label>
          <span>18</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">职称：</label>
          <span>18</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">联系地址：</label>
          <span>18</span>
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
    <dlg-edit
      :isShow="dlgState"
      @close="closeDlg" />
  </div>
</template>

<script>
  import Imgs from './components/v-imgs.vue'
  import Attachments from './components/v-atttachments.vue'
  import DlgEdit from './dialog/dlg-edit.vue'

  export default {
    components: {
      Imgs,
      Attachments,
      DlgEdit
    },
    data () {
      return {
        activeName: 'attachment',
        dlgState: false
      }
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
  .detail-header {
    display: flex;
    justify-content: space-between;
    margin: 16px 0px;
    height: 40px;
    line-height: 40px;
  }
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