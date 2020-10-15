import { encode, decode } from 'js-base64'
const key = {
  loginState: 'loginState'
}

const saveLoginState = function ({ token, staffData }) {
  if (token && staffData && Object.keys(staffData).length > 0) {
    sessionStorage.setItem(key.loginState, encode(JSON.stringify({ token, staffData })))
  }
}

const getLoginState = function () {
  const state = sessionStorage.getItem(key.loginState)
  if (state) {
    return JSON.parse(decode(state))
  } else {
    return null
  }
}

const clearLoginState = function () {
  sessionStorage.removeItem(key.loginState)
}

export {
  saveLoginState,
  getLoginState,
  clearLoginState
}
