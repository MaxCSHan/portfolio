import { post, get, del } from '@/utils/apiHelper'

const doLogin = function ({ staffNo, ssoToken, staffsEmail }) {
  return post('/api/Account/Login', {
    staffNo, token: ssoToken, staffsEmail
  })
}

const addCha = function (roleName) {
  return post('/api/Role/Add', { roleName: roleName })
}
const addMember = function (roleNo, data) {
  return post('/api/Role/AddMember', { roleNo: roleNo, data: data })
}

const editChaAuthority = function (editData) {
  return post('/api/Role/EditAuthority', editData)
}
const editCha = function (roleData) {
  return post('/api/Role/Edit', roleData)
}
const getChaListNum = function () {
  return get('/api/Role')
}
const getErpList = function (type) {
  return get('/api/Utility/Organization/' + type)
}
const getChaNumcontent = function (roleNo) {
  return get('/api/Role/RoleAuth/' + roleNo)
}
const getChaMenberList = function (roleNo) {
  return get('/api/Role/Memberlist/' + roleNo)
}

const getChaDelete = function (roleNo) {
  return del('/api/Role/Delete/' + roleNo)
}
export {
  doLogin, addCha, editCha, getChaListNum, getErpList, getChaNumcontent, getChaMenberList, getChaDelete, editChaAuthority, addMember
}
