import axios from 'axios'
import md5 from 'crypto-js/md5'

const API_URL = process.env.VUE_APP_API_BASEURL
const PUBLIC_KEY = process.env.VUE_APP_API_PUBLIC_KEY
const PRIVATE_KEY = process.env.VUE_APP_API_PRIVATE_KEY

function getResponse(url, method, payload = {}) {
  const ts = new Date().getTime()
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString()

  return axios({
    baseURL: API_URL,
    url,
    method,
    params: {
      ts,
      hash,
      apikey: PUBLIC_KEY,
      ...payload
    }
  })
}

const getCharacters = (payload = {}) => getResponse('/characters', 'get', payload)
const getSeries = (payload = {}) => getResponse('/series', 'get', payload)
const getComics = (payload = {}) => getResponse('/comics', 'get', payload)

export {
  getResponse,
  getSeries,
  getComics,
  getCharacters
}
