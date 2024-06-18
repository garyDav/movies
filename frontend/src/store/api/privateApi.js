import axios from 'axios'

const baseURL = import.meta.env.VITE_SERVER_API ?? 'http://localhost:3000'

export const privateApi = axios.create({ baseURL: `${baseURL}/api` })