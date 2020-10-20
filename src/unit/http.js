import axios from 'axios'

export default {
  URL: 'http://localhost:3000',
  get (url, data = null) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params: data }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post (url, data = null) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  delete (url, data = null) {
    return new Promise((resolve, reject) => {
      axios.delete(url, data).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
