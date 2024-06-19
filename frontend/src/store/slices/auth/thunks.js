import Swal from 'sweetalert2'

import { privateApi } from '../../api/privateApi'
import {
  checkingFinish,
  login,
  setAuthorization,
  resetAuthorization,
} from './authSlice'

export const startLogin = (username, password) => {
  return async dispatch => {
    try {
      const { headers, data: response } = await privateApi.post('/signin', {
        username,
        password,
      })
      console.log(headers, response)
      const { message, data } = response

      dispatch(resetAuthorization())
      dispatch(
        login({
          id: response.data._id,
          username: response.data.username,
          role: response.data.role,
          token: headers.authorization,
          tokenInitDate: new Date().getTime(),
        }),
      )
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `${response.message}`,
        text: `¡Bienvenido al Sistema: ${response.data.username}!`,
        showConfirmButton: false,
        timer: 1500,
      })
    } catch (error) {
      console.error('Error: ', error)
      dispatch(resetAuthorization())
      dispatch(checkingFinish())
      if (error.response) {
        const { data } = error.response
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: `${data.statusCode}: ${data.error}`,
          html: `<u>${data.message}</u><br>${data.stack ? data.stack : ''}`,
          showConfirmButton: false,
          timer: 3500,
        })
      } else {
        Swal.fire('Error', JSON.stringify(error.message), 'error')
      }
    }
  }
}

export const startChecking = () => {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().authState

      if (!token) {
        dispatch(checkingFinish())
        return
      }

      const { headers, data: response } = await privateApi.get('/auth/jwt', {
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        },
      })

      if (response.error) dispatch(checkingFinish())

      dispatch(
        login({
          id: response.data._id,
          username: response.data.username,
          email: response.data.email,
          carnet: response.data.carnet,
          roles: response.data.roles,
          niveles: response.data.niveles,
          estudiante: response.data.estudiante,
          token: headers.authorization,
          tokenInitDate: new Date().getTime(),
        }),
      )
    } catch (error) {
      console.error(error)
      dispatch(checkingFinish())
    }
  }
}

export const startRegister = formValues => {
  return async (dispatch, getState) => {
    try {
      const { headers, data: response } = await privateApi.post('/signup', formValues, {
        headers: {
          'Content-type': 'application/json',
        },
      })
      console.log(headers, response)

      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `${response.message}`,
        text: `¡Usuario registrado: ${response.data.username}!`,
        showConfirmButton: false,
        timer: 1500,
      })
    } catch (error) {
      if (error.response) {
        const { data } = error.response
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: `${data.statusCode}: ${data.error}`,
          html: `<u>${data.message}</u><br>${data.stack ? data.stack : ''}`,
          showConfirmButton: false,
          timer: 2500,
        })
      } else {
        Swal.fire('Error', JSON.stringify(error.message), 'error')
      }
    }
  }
}