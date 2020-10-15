import { postWithFormData } from '@/utils/apiHelper'

const sendMail = function ({ subject, content, sendTo, userEmail, userName, file }) {
  const formData = new FormData()
  formData.append('subject', subject)
  formData.append('content', content)
  formData.append('sendTo', sendTo)
  formData.append('userEmail', userEmail)
  formData.append('userName', userName)
  if (file) {
    formData.append('file', file)
  }
  return postWithFormData('/api/Utility/SendMail', formData)
}
export {
  sendMail
}
