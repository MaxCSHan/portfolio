const express = require('express')
const router = express.Router()
/* const faker = require('faker') */

router.get('/api/Location', function (req, res) {
  res.json({
    /* success: faker.random.arrayElement[true, false] */
    success: true,
    message: '成功',
    total: 20,
    data: [
      {
        locId: 1,
        locName: '台中辦公室',
        locStatus: 'Y'
      },
      {
        locId: 2,
        locName: '台北辦公室',
        locStatus: 'N'
      },
      {
        locId: 3,
        locName: '新竹辦公室',
        locStatus: 'Y'
      },
      {
        locId: 4,
        locName: '台南辦公室',
        locStatus: 'N'
      },
      {
        locId: 5,
        locName: '高雄辦公室',
        locStatus: 'Y'
      },
      {
        locId: 6,
        locName: 'AI辦公室',
        locStatus: 'Y'
      },
      {
        locId: 7,
        locName: '達爾文辦公室',
        locStatus: 'Y'
      },
      {
        locId: 8,
        locName: '伽利略辦公室',
        locStatus: 'Y'
      },
      {
        locId: 9,
        locName: '愛迪生辦公室',
        locStatus: 'Y'
      }
    ]
  })
})

router.get('/api/Location/GetOne/:locId', function (req, res) {
  const locs = [
    {
      locId: 1,
      locName: '台中辦公室',
      locStatus: 'Y'
    },
    {
      locId: 2,
      locName: '台北辦公室',
      locStatus: 'N'
    },
    {
      locId: 3,
      locName: '新竹辦公室',
      locStatus: 'Y'
    },
    {
      locId: 4,
      locName: '台南辦公室',
      locStatus: 'Y'
    },
    {
      locId: 5,
      locName: '高雄辦公室',
      locStatus: 'Y'
    },
    {
      locId: 6,
      locName: 'AI辦公室',
      locStatus: 'Y'
    },
    {
      locId: 7,
      locName: '達爾文辦公室',
      locStatus: 'Y'
    },
    {
      locId: 8,
      locName: '伽利略辦公室',
      locStatus: 'Y'
    },
    {
      locId: 9,
      locName: '愛迪生辦公室',
      locStatus: 'Y'
    }
  ]
  const getOneLocs = locs.find(
    (loc) => loc.locId.toString() === req.params.locId
  )
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: getOneLocs
  })
})

router.post('/api/Location/Add', function (req, res) {
  const reqData = req.body
  console.log('reqData=>', reqData)
  const { locName, locStatus } = reqData
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: {
      locName: locName,
      locStatus: locStatus
    }
  })
})

router.post('/api/Location/Edit', function (req, res) {
  const reqData = req.body
  console.log('reqData=>', reqData)
  const { locId, locName, locStatus } = reqData
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: {
      locId: locId,
      locName: locName,
      locStatus: locStatus
    }
  })
})

router.post('/api/Location/EditStatus', function (req, res) {
  const reqData = req.body
  console.log('reqData=>', reqData)
  const { locId, locStatus } = reqData
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: {
      locId: locId,
      locStatus: locStatus
    }
  })
})

router.delete('/api/Location/Delete/:locId', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: null
  })
})

module.exports = router
