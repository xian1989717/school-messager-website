<template>
  <div>

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/student' }">首页</el-breadcrumb-item>
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
          <label class="detail-label">学号：</label>
          <span>{{detailDate.studentNo}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">出生日期：</label>
          <span>{{detailDate.birthday}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">民族：</label>
          <span>{{detailDate.nation}}</span>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">性别：</label>
          <span>{{detailDate.sex}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">联系电话：</label>
          <span>{{detailDate.contactPhone}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">联系人：</label>
          <span>{{detailDate.contacts}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">地址：</label>
          <span>{{detailDate.address}}</span>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <label class="detail-label">户籍地址：</label>
          <span>{{detailDate.householdRegister}}</span>
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
      <el-tab-pane label="成绩" name="scores" />
      <el-tab-pane label="图表" name="chart" />
      <el-tab-pane label="附件" name="attachment" />
    </el-tabs>
    <scores v-if="activeName === 'scores'" />
    <chart v-if="activeName === 'chart'" />
    <attachment v-if="activeName === 'attachment'" />
  </div>
</template>

<script>
  import Scores from './components/scores.vue'
  import Chart from './components/chart.vue'
  import Attachment from './components/attachment.vue'

  export default {
    components: {
      Scores,
      Chart,
      Attachment
    },
    data () {
      return {
        detailDate: {
          name: '1234'
        },
        activeName: 'scores'
      }
    },
    methods: {
      edit () {

      },
      handleClick (tab) {
        this.activeName = tab.name
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
