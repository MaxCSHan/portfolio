import { get, post } from '@/utils/apiHelper'

const getRolelist = function () {
  return get('/api/Role')
}

const getMemberList = function () {
  return get('/api/Staffs')
}

const getMember = function (staffsNo) {
  return get('/api/Staffs/GetOne/' + staffsNo)
}

const editMemberStatus = function (req) {
  return post('/api/Staffs/EditStatus', req)
}

const deleteMember = function (req) {
  console.log(req)
  return post('/api/Role/DeleteMember', req)
}
const addOrg = function (req) {
  return post('/api/Staffs/AddOrganization', req)
}

const getOrg = function (type) {
  return get('/api/Utility/Organization/' + type)
}
export {
  getMemberList, getRolelist, getMember, editMemberStatus, deleteMember, addOrg, getOrg
}
