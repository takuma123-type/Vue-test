import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://numbersapi.com/random?json',
  withCredentials: false,
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getNumberAPI(){
    return apiClient.get('')
  },
}