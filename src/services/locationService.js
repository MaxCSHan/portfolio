import { get, post, del } from '@/utils/apiHelper'

const getLoc = function () {
  return get('/api/Location')
}

const addLoc = function (req) {
  return post('/api/Location/Add', req)
}

const editLoc = function (req) {
  return post('/api/Location/Edit', req)
}

const editLocStatus = function (req) {
  return post('/api/Location/EditStatus', req)
}

const delLoc = function (locId) {
  return del(`/api/Location/Delete/${locId}`)
}

const getOneLoc = function (locId) {
  return get(`/api/Location/GetOne/${locId}`)
}

export {
  getLoc, addLoc, editLoc, editLocStatus, delLoc, getOneLoc
}
