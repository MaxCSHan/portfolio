import { get, post, del } from '../utils/apiHelper.js'
const getCat = function () {
  return get('/api/Category')
}
const addCat = function (req) {
  return post('/api/Category/Add', req)
}

const editCat = function (req) {
  return post('/api/Category/Edit', req)
}

const editCatStatus = function (req) {
  return post('/api/Category/EditStatus', req)
}

const delCat = function (catId) {
  return del(`/api/Category/Delete/${catId}`)
}

const getOneCat = function (catId) {
  return get(`/api/Category/GetOne/${catId}`)
}

const getSubCat = function () {
  return get('/api/Item')
}

export {
  getCat,
  addCat,
  editCat,
  delCat,
  editCatStatus,
  getOneCat,
  getSubCat
}
