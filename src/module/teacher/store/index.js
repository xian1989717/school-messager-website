/* eslint-disable no-unused-vars */
import http from '../../../unit/http'

const actions = {
  async getTeacherAll () {
    return await http.get(http.URL + '/teacher')
  },
  async addTeacher ({ commit }, data) {
    return await http.post(http.URL + '/teacher', data)
  },
  async deleteTeacher ({ commit }, id) {
    return await http.delete(http.URL + '/teacher/' + id)
  }
}
export default {
  actions
}
