/* eslint-disable no-undef */

import Vue from 'vue'
import {
  formatTime,
  transferBoolean,
  transferGender,
  transferPositionalTitles
} from './format.js'


Vue.filter('formatTime', val => {
  return formatTime(val)
})

Vue.filter('transferBoolean', val => {
  return transferBoolean(val)
})

Vue.filter('transferGender', val => {
  return transferGender(val)
})

Vue.filter('transferPositionalTitles', val => {
  return transferPositionalTitles(val)
})