import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authorization: null,
    checking: true,
    id: null,
    username: null,
    email: null,
    carnet: null,
    token: null,
    tokenInitDate: null,
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id
      state.username = action.payload.username
      state.email = action.payload.email
      state.carnet = action.payload.carnet
      state.roles = action.payload.roles
      state.niveles = action.payload.niveles
      state.estudiante = action.payload.estudiante
      state.token = action.payload.token
      state.tokenInitDate = action.payload.tokenInitDate

      state.checking = false
    },
    logout: state => {
      state.id = null
      state.username = null
      state.email = null
      state.carnet = null
      state.token = null
      state.tokenInitDate = null

      state.checking = false
    },
    checkingFinish: state => {
      state.checking = false

      state.id = null
      state.username = null
      state.email = null
      state.carnet = null
      state.token = null
      state.tokenInitDate = null
    },
    setAuthorization: (state, action) => {
      state.authorization = action.payload
    },
    resetAuthorization: state => {
      state.authorization = null
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  login,
  logout,
  checkingFinish,
  setAuthorization,
  resetAuthorization,
} = authSlice.actions