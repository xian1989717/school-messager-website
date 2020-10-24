import Vue from 'vue'
import Vuex from 'vuex'
import teacher from './teacher/store/index'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    teacher
  }
})
