import { postWithFormData, get, post, del } from '@/utils/apiHelper'

const getCases = function () {
  return post('/api/Setup/Edit', {})
}
const getCase = function (user) {
  return post('/api/Case', user)
}
const addCase = function ({
  locId,
  catId,
  itemId,
  staffsNo,
  staffsName,
  applyingDate,
  remark,
  imageFile
}) {
  const formData = new FormData()
  formData.append('locId', locId)
  formData.append('catId', catId)
  formData.append('itemId', itemId)
  formData.append('staffsNo', staffsNo)
  formData.append('staffsName', staffsName)
  formData.append('applyingDate', applyingDate)
  formData.append('remark', remark)
  if (imageFile) {
    formData.append('imageFile', imageFile)
  }
  return postWithFormData('/api/Case/Add', formData)
}

const editCase = function ({
  caseId,
  locId,
  catId,
  itemId,
  applyingDate,
  remark,
  imageFile
}) {
  const formData = new FormData()
  formData.append('caseId', caseId)
  formData.append('locId', locId)
  formData.append('catId', catId)
  formData.append('itemId', itemId)
  formData.append('applyingDate', applyingDate)
  formData.append('remark', remark)
  if (imageFile) {
    formData.append('imageFile', imageFile)
  }

  return postWithFormData('/api/Case/Edit', formData)
}

const getOneCase = function (caseId) {
  return get(`/api/Case/GetOne/${caseId}`)
}

const sendDeleteCase = function (caseId) {
  console.log(caseId)
  return del(`/api/Case/Delete/${caseId}`)
}

const getMyOwnCase = function (id) {
  return get(`/api/Case/GetUserCase/${id}`)
}
const sendStatus = function (nowId, status) {
  const statusData = {}
  statusData.caseId = nowId
  statusData.status = status
  console.log(nowId, status, typeof (status), statusData)
  return post('/api/Case/EditStatus', statusData)
}

const sendEvaluation = function (nowCaseId, eva) {
  const evaluationData = {}
  evaluationData.caseId = nowCaseId
  evaluationData.evaluation = eva
  console.log(evaluationData)
  return post('/api/Case/GiveEvaluation', evaluationData)
}
const reportCase = function (userInput) {
  console.log(userInput)
  return post('/api/Case/Report', userInput)
}
export { addCase, editCase, getCases, getOneCase, sendEvaluation, sendDeleteCase, getMyOwnCase, sendStatus, getCase, reportCase }
