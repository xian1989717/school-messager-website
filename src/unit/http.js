import axios from 'axios'

export default {
  URL: 'http://localhost:3000',
  get (url, data = null) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params: data }).then(res => {
        resolve(res.data)
      }).catch(res => {
        reject(res)
      })
    })
  }
}
