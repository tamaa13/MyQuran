import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://localhost:3000'

export const useMainStore = defineStore('main', {
  state: () => ({

  }),
  actions: {
    async login(input) {
      try {
        const { data } = await axios.post(`${baseUrl}/user/login`, input)

        localStorage.access_token = data.access_token
        this.isLogin = true
        this.router.push('/')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`
        })
      }
    },
    async register(input) {
      try {
        await axios.post(`${baseUrl}/user/register`, input)

        this.router.push('/login')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Register Success',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`
        })
      }
    },
  }
})
