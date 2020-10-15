import { get, post, del } from '@/utils/apiHelper'
const getItem = function () {
  return get('/api/Item')
}

const addItem = function (req) {
  return post('/api/Item/Add', req)
}

const editItem = function (req) {
  return post('/api/Item/Edit', req)
}

const editItemStatus = function (req) {
  return post('/api/Item/EditStatus', req)
}

const delItem = function (itemId) {
  return del(`/api/Item/Delete/${itemId}`)
}

const getOneItem = function (itemId) {
  return get(`/api/Item/GetOne/${itemId}`)
}

export {
  getItem, addItem, editItem, editItemStatus, delItem, getOneItem
}
