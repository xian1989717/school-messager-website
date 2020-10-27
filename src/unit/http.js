import axios from 'axios'

const URL = 'http://localhost:3000'

const _get = (url, data = null) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: data }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const _post = (url, data = null) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const _delete = (url, data = null) => {
  return new Promise((resolve, reject) => {
    axios.delete(url, data).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const _put = (url, data = null) => {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const _downloadImg = (src) => {
  var x = new XMLHttpRequest()
  x.open("GET", src, true)
  x.responseType = 'blob'
  x.onload = function () {
    var url = window.URL.createObjectURL(x.response)
    var a = document.createElement('a')
    a.href = url
    a.download = ''
    a.click()
  }
  x.send()
}

export {
  URL,
  _get,
  _post,
  _delete,
  _put,
  _downloadImg
}
