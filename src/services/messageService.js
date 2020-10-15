import { get, postWithFormData } from '@/utils/apiHelper'

const getMessages = function (caseId) {
  return get(`/api/Message/${caseId}`)
}
const postMessage = function ({ caseId, message, imageFile, staffsNo, staffsName }) {
  const formData = new FormData()
  formData.append('caseId', caseId)
  formData.append('message', message)
  formData.append('staffsNo', staffsNo)
  formData.append('staffsName', staffsName)
  if (imageFile) {
    formData.append('imageFile', imageFile)
  }

  return postWithFormData('/api/Message/Add', formData)
}
export {
  getMessages,
  postMessage
}
