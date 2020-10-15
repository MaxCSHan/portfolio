import { get } from '@/utils/apiHelper'

const getUser = function () {
  return get('/api/Role/getUser')
}

export {
    getUser
}
