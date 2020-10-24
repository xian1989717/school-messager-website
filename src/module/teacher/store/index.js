/* eslint-disable no-unused-vars */
import { _get, _post, _delete, _put, URL } from '../../../unit/http'

const state = {
  activeItem: {}
}

const mutations = {
  setActiveItem (state, item) {
    state.activeItem = item
  }
}

const actions = {
  async getTeacherAll () {
    return await _get(URL + '/teacher')
  },
  async addTeacher ({ commit }, data) {
    return await _post(URL + '/teacher', data)
  },
  async deleteTeacher ({ commit }, id) {
    return await _delete(URL + '/teacher/' + id)
  },
  async updateTeacher ({ commit }, params) {
    const { id } = params
    delete params.id
    delete params.subjectName
    return await _put(URL + '/teacher/' + id, params)
  },
  async getTeacherById ({ commit }, id) {
    return await _get(URL + '/teacher/' + id)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
