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


export {
  URL,
  _get,
  _post,
  _delete,
  _put
}
