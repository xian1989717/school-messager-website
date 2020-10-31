/* eslint-disable no-unused-vars */
import { _get, _post, _delete, _put, URL, _patch } from '../../../unit/http'

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
  },
  async getTeacherAttachment ({ commit }, id) {
    return await _get(URL + '/teacher/attachment/' + id)
  },
  async deleteTeacherAttachment ({ commit }, obj) {
    const { teacherId, id, attachmentKey } = obj
    return _delete(`${URL}/teacher/${teacherId}/attachment/${id}?attachmentKey=${attachmentKey}`)
  },
  async downLoadAttachment ({ commit }, obj) {
    const { teacherId, id } = obj
    return _get(`${URL}/teacher/${teacherId}/attachment/${id}/download`)
  },
  async updateAttachment ({ commit }, obj) {
    const { teacherId, id } = obj
    delete obj.teacherId
    delete obj.id
    return _patch(`${URL}/teacher/${teacherId}/attachment/${id}`, obj)
  }

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
