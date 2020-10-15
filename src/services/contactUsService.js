import { get, post } from '@/utils/apiHelper'
const getConnectUs = function () {
  return get('/api/Setup/ConnectUs')
}
const setUpEdit = function (data) {
  return post('/api/Setup/Edit', data)
}
export {
  setUpEdit,
  getConnectUs
}
