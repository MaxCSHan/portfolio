import { post } from '@/utils/apiHelper'

const doLogin = function ({ staffsNo, token, accessToken }) {
  return post('/api/Account/Login', { staffsNo: staffsNo, token: token, accessToken: accessToken })
}

export {
  doLogin
}
