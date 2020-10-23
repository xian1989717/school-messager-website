import dayjs from 'dayjs'

const transferBooleanVal = Object.freeze({
  true: '是',
  false: '否'
})

const transferGenderVal = Object.freeze({
  male: '男性',
  feMale: '女性'
})

const positionalTitles = Object.freeze({
  primary: '初级',
  intermediate: '中级',
  senior: '高级'
})

const formatTime = value => dayjs(value).format('YYYY-MM-DD')

const transferBoolean = value => transferBooleanVal[value]

const transferGender = value => transferGenderVal[value]

const transferPositionalTitles = value => positionalTitles[value]
export {
  formatTime,
  transferBoolean,
  transferGender,
  transferPositionalTitles
}
