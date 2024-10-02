const express = require('express')
const router = express.Router()
const {
  genDatas,
  getSystemFunctions
  // padStartWithZero
} = require('../utils/responseHelper')
const faker = require('faker')

// 角色頭貼與名稱。
router.get('/api/Role/getUser', function (req, res) {
  const data = genDatas(faker.random.number(20), (index) => {
    return {
      username: faker.name.lastName(), avatar: faker.image.avatar(), age: faker.random.number({ min: 0, max: 116 }), location: { latitude: faker.address.latitude(), longitude: faker.address.longitude() }, intro: faker.lorem.paragraph()
    }
  })

  res.json({
    success: true,
    message: '成功',
    total: data.length,
    data
  })
})

router.post('/api/Role/Match', function (req, res) {
  const reqData = req.body
  const { userId, matchId } = reqData
  res.json({
    success: true,
    message: '成功',
    total: 0,
    userId: userId,
    matchId: matchId,
    data: true
  })
})

// 修改該筆用戶權限內容。
router.post('/api/Role/EditAuthority', function (req, res) {
  const reqData = req.body
  console.log('reqData=>', reqData)
  const { roleNo } = reqData
  res.json({
    success: true,
    message: '成功',
    total: 0,
    roleNo: roleNo,
    data: null
  })
})
// 從資料庫刪除該筆用戶角色。
router.delete('/api/Role/Delete/:roleNo', function (req, res) {
  const reqData = req.body
  console.log('reqData=>', reqData)
  const { roleNo } = reqData
  res.json({
    success: true,
    message: '成功',
    total: 0,
    roleNo: roleNo,
    data: null
  })
})

// 新增成員至用戶角色。
router.post('/api/Role/Add', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: null
  })
})

// 新增成員至用戶角色。
router.post('/api/Role/AddMember', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: null
  })
})

// 修改該筆用戶權限內容。
router.post('/api/Role/Edit', function (req, res) {
  const reqData = req.body
  console.log('reqData=>', reqData)
  const { roleNo, pageid, functionid, isactive } = reqData
  res.json({
    success: true,
    message: '成功',
    total: 0,
    roleNo: roleNo,
    data: {
      pageid: pageid,
      functionid: functionid,
      isactive: isactive
    }
  })
  req.json({
    roleNo: '20200722030801A00001',
    data: [
      {
        pageid: 'repair001',
        functionid: 'add',
        isactive: 'Y'
      },
      {
        pageid: 'repair001',
        functionid: 'edit',
        isactive: 'Y'
      },
      {
        pageid: 'repair001',
        functionid: 'del',
        isactive: 'N'
      },
      {
        pageid: 'repair001',
        functionid: 'view',
        isactive: 'Y'
      },
      {
        pageid: 'repair002',
        functionid: 'view',
        isactive: 'Y'
      },
      {
        pageid: 'repair003',
        functionid: 'del',
        isactive: 'Y'
      },
      {
        pageid: 'repair003',
        functionid: 'change',
        isactive: 'N'
      },
      {
        pageid: 'repair004',
        functionid: 'view',
        isactive: 'Y'
      }
    ]
  })
})

// 取得用戶角色列表及各角色的用戶數量。
router.get('/api/Role', function (req, res) {
  // const data = [
  //   ...genDatas(faker.random.number({ min: 1, max: 3 }), (index) => {
  //     return {
  //       roleNo: `R${padStartWithZero(index + 1, 6)}`,
  //       roleName: `R${padStartWithZero(index + 1, 6)}-Name`,
  //       fixed: faker.random.arrayElement(['Y', 'N']),
  //       roleCount: faker.random.number({ min: 1, max: 350 })
  //     }
  //   }),
  //   {
  //     roleNo: 'A00003',
  //     roleName: '一般用戶',
  //     fixed: 'Y',
  //     roleCount: faker.random.number({ min: 1, max: 350 })
  //   }
  // ]

  res.json({
    success: true,
    message: '成功',
    total: 5,
    data: [
      {
        roleNo: '1',
        roleName: '公司管理員',
        fixed: 'Y',
        roleCount: 23
      },
      {
        roleNo: '2',
        roleName: '處長',
        fixed: 'N',
        roleCount: 2
      },
      {
        roleNo: '20201007175614',
        roleName: 'SD',
        fixed: 'N',
        roleCount: 0
      },
      {
        roleNo: '20201007182738',
        roleName: 'SA',
        fixed: 'N',
        roleCount: 0
      },
      {
        roleNo: '99',
        roleName: '一般用戶',
        fixed: 'Y',
        roleCount: 367
      }
    ]
  })
})

// 依據角色編號取得該用戶角色下的權限內容。
router.get('/api/Role/RoleAuth/:roleNo', function (req, res) {
  const data = getSystemFunctions().map((item) => {
    return { ...item, isactive: faker.random.arrayElement(['Y', 'N']) }
  })
  res.json({
    success: true,
    message: '成功',
    total: data.length,
    data
  })
})

// 取得該用戶角色下的成員列表。
router.get('/api/Role/Memberlist/:roleNo', function (req, res) {
  const data = genDatas(faker.random.number({ min: 1, max: 30 }), (index) => {
    return {
      staffsNo: faker.random.uuid(),
      staffsName: faker.name.firstName(),
      staffsNnname: faker.name.findName(),
      organizationNo: faker.name.jobTitle(),
      suborganizationNo: faker.name.jobTitle(),
      flag: faker.random.arrayElement(['Y', 'N'])
    }
  })
  res.json({
    success: true,
    message: '成功',
    total: data.length,
    data
  })
})
module.exports = router
