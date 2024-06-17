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
      const { headers, data: response } = await privateApi.post('/auth/signin', {
        username,
        password,
      })
      const { message, data } = response

      if (data['roles']) {
        if (
          (data['roles'].filter(el => el === 'estudiante').length &&
            password === 'donbosco24') ||
          (data['roles'].filter(el => el === 'profesor').length &&
            password === 'DonBosco.2024')
        ) {
          dispatch(setAuthorization(headers.authorization))
          return
        }
      }

      dispatch(resetAuthorization())
      dispatch(setNivel(response.data.niveles.find(el => el)))
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