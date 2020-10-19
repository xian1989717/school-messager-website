import http from '../../../unit/http'

const actions = {
  async getTeacherAll () {
    return await http.get(http.URL + '/teacher')
  }
}
export default {
  actions
}
