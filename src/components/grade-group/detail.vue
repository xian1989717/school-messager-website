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
        <el-button>编辑</el-button>
        <el-button>删除</el-button>
      </div>
    </div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">1234</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">1234</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">134</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">1234</div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .detail-header {
    display: flex;
    justify-content: space-between;
    margin: 16px 0px;
    height: 40px;
    line-height: 40px;
  }
</style>