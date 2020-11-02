<template>
  <el-container
    id="about"
    class="container">
    <el-header
      style="background:#409EFF;color:white;">
      西安新筑中心小学管理系统
      <span style="float:right;">XXX</span>
    </el-header>

    <el-container>
      <el-aside
        width="200px"
        style="line-height:20px;">
        <p
          v-for="item in moduleName"
          :key="item.id">
          <router-link
            :to="item.path">
            {{item.name}}
          </router-link>
        </p>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        moduleName: [
          { id: 1, name: '年级组', path: '/gradeGroup' },
          { id: 2, name: '教师', path: '/teacher' },
          { id: 3, name: '学生', path: '/student' }
        ]
      }
    }
  }
</script>

<style scoped>
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>