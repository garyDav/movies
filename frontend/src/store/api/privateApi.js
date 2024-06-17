import axios from 'axios'

const baseURL = import.meta.env.PROD ?? 'http://localhost:3500'

export const privateApi = axios.create({ baseURL: `${baseURL}/api` })