import axios from 'axios'

export function getClient() {
  return axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
}
