import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/gradeGroup'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/home.vue'], resolve),
      children: [
        {
          path: '/gradeGroup',
          component: resolve => require(['../components/grade-group/index.vue'], resolve)
        },
        {
          path: '/detail',
          component: resolve => require(['../components/grade-group/detail.vue'], resolve)
        }
      ]
    }
  ]
})
