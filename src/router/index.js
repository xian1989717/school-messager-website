import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/gradeGroup'  // 路由重定向
    },
    {
      path: '/',
      component: resolve => require(['../common/home.vue'], resolve),
      children: [
        {
          path: '/gradeGroup',
          component: resolve => require(['../module/grade-group/index.vue'], resolve)
        },
        {
          path: '/gradeGroupDetail',
          component: resolve => require(['../module/grade-group/detail.vue'], resolve)
        }
      ]
    }
  ]
})
