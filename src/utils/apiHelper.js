import axios from 'axios'
import constant from '@/constant/development'

axios.defaults.baseURL = constant.apiUrl

const errorHandler = function (error) {
  console.group(`[${error.config.method}] ${error.config.url}\n`)
  let message = '發生異常狀況，請稍後再試。'
  if (error.response) {
    const mapStatusError = errorCodes.find(item => item.statusCode === error.response.status)
    if (mapStatusError) {
      message = mapStatusError.message
    }
    console.log('error status => ', error.response.status)
  } else {
    if (error.message) {
      message = error.message
    }
  }
  console.log('error message => ', message)
  console.groupEnd()

  return Promise.resolve({
    success: false,
    message
  })
}

const successHandler = function (response, reqData) {
  const { data, config: { url, method } } = response
  console.group(`[${method}] ${url}\n`)
  if (reqData.entries) {
    const paramsObject = {}
    for (var pair of reqData.entries()) {
      paramsObject[pair[0]] = pair[1]
    }
    console.log('request FormData => ', paramsObject)
  } else {
    console.log('request data => ', reqData)
  }
  console.log('response data => ', data)
  console.groupEnd()
  console.log('\n')
  return data
}

const errorCodes = [
  { statusCode: 400, message: '無法解讀 Request' },
  { statusCode: 401, message: 'API Token 過期、無法解讀、或其他 Access Token 不合法' },
  { statusCode: 403, message: '尚未提供 Bearer Token，即資源服務器(Resource server)找無資訊' },
  { statusCode: 500, message: '發生異常狀況' },
  { statusCode: 520, message: '找不到資料' },
  { statusCode: 521, message: '資料已存在' },
  { statusCode: 522, message: '傳入參數異常' },
  { statusCode: 523, message: '登入失敗' }
]



/** @description 使用 axios post 方法呼叫 api
 * @param {String} url api 路徑
 * @param {Object} data request 參數(非必填)，預設值為空物件
 * @return {Object} Promise 物件
 */
const post = function (url, data = {}) {
  const config = {}
  return axios
    .post(url, data, config)
    .then(res => successHandler(res, data))
    .catch(errorHandler)
}

/** @description 使用 axios post 方法呼叫 api,且 content type 為 multipart/form-data
 * @param {String} url api 路徑
 * @param {Object} formData request 參數(非必填)，預設值為空物件
 * @return {Object} Promise 物件
 */
const postWithFormData = function (url, formData = {}) {
  const config = {
    'Content-Type': 'multipart/form-data'
  }

  return axios
    .post(url, formData, config)
    .then(res => successHandler(res, formData))
    .catch(errorHandler)
}

/** @description 使用 axios get 方法呼叫 api
 * @param {String} url api 路徑
 * @return {Object} Promise 物件
 */
const get = function (url) {
  const config = {}
  
  return axios
    .get(url, config)
    .then(res => successHandler(res, {}))
    .catch(errorHandler)
}

/** @description 使用 axios delete 方法呼叫 api
 * @param {String} url api 路徑
 * @return {Object} Promise 物件
 */
const del = function (url) {
  const config = {}

  return axios
    .delete(url, config)
    .then(res => successHandler(res, {}))
    .catch(errorHandler)
}

export {
  post,
  get,
  postWithFormData,
  del,
  errorCodes
}
