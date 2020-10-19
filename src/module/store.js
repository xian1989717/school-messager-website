import vue from 'vue'
import vuex from 'vuex'
import teacher from './teacher/store/index'
// import mod2 from './mod2.js'
vue.use(vuex)
export default new vuex.Store({
  modules: {
    teacher
  }
})
