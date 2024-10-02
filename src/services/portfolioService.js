import { get ,getIns } from '@/utils/apiHelper'

const getUser = function () {
  return get('/api/Role/getUser')
}

const getInsUser = function (keyword) {
  return getIns('/'+keyword+'/?__a=1')
}

export {
    getUser,
    getInsUser
}
