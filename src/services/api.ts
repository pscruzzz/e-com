import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-VTEX-API-AppKey': process.env.API_KEY,
    'X-VTEX-API-AppToken': process.env.API_TOKEN
  }
})

export const apiPrice = axios.create({
  baseURL: process.env.API_BASE_URL_PRICE,
  headers: {
    Accept: 'application/vnd.vtex.pricing.v3+json',
    'Content-Type': 'application/json',
    'X-VTEX-API-AppKey': process.env.API_KEY,
    'X-VTEX-API-AppToken': process.env.API_TOKEN
  }
})

export default api
