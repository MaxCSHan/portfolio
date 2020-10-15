const express = require('express')
const router = express.Router()

router.post('/api/Item/Add', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: {}
  })
})

router.get('/api/Item', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 20,
    data: [
      {
        itemId: 1,
        catId: 1,
        itemName: '冷氣',
        itemStatus: 'N'
      },
      {
        itemId: 2,
        catId: 1,
        itemName: '桌子',
        itemStatus: 'Y'
      },
      {
        itemId: 3,
        catId: 1,
        itemName: '椅子',
        itemStatus: 'N'
      },
      {
        itemId: 4,
        catId: 1,
        itemName: '影印機',
        itemStatus: 'Y'
      },
      {
        itemId: 5,
        catId: 1,
        itemName: '櫃子',
        itemStatus: 'N'
      },
      {
        itemId: 6,
        catId: 1,
        itemName: '燈管/燈泡',
        itemStatus: 'Y'
      },
      {
        itemId: 7,
        catId: 1,
        itemName: '咖啡機',
        itemStatus: 'Y'
      },
      {
        itemId: 8,
        catId: 1,
        itemName: '冰箱',
        itemStatus: 'Y'
      },
      {
        itemId: 9,
        catId: 1,
        itemName: '碎紙機',
        itemStatus: 'Y'
      },
      {
        itemId: 10,
        catId: 1,
        itemName: '門',
        itemStatus: 'Y'
      },
      {
        itemId: 11,
        catId: 2,
        itemName: '電腦',
        itemStatus: 'Y'
      },
      {
        itemId: 12,
        catId: 2,
        itemName: '滑鼠',
        itemStatus: 'Y'
      },
      {
        itemId: 13,
        catId: 2,
        itemName: '螢幕',
        itemStatus: 'Y'
      },
      {
        itemId: 14,
        catId: 2,
        itemName: '硬碟',
        itemStatus: 'N'
      },
      {
        itemId: 15,
        catId: 3,
        itemName: '電話',
        itemStatus: 'Y'
      },
      {
        itemId: 16,
        catId: 4,
        itemName: '網路分享器',
        itemStatus: 'Y'
      },
      {
        itemId: 17,
        catId: 4,
        itemName: '手機',
        itemStatus: 'Y'
      },
      {
        itemId: 18,
        catId: 4,
        itemName: '投影設備',
        itemStatus: 'N'
      }
    ]
  })
})

router.get('/api/Item/GetOne/:itemId', function (req, res) {
  const items = [
    {
      itemId: 1,
      catId: 1,
      itemName: '冷氣',
      itemStatus: 'Y'
    },
    {
      itemId: 2,
      catId: 1,
      itemName: '桌子',
      itemStatus: 'Y'
    },
    {
      itemId: 3,
      catId: 1,
      itemName: '椅子',
      itemStatus: 'N'
    },
    {
      itemId: 4,
      catId: 1,
      itemName: '影印機',
      itemStatus: 'Y'
    },
    {
      itemId: 5,
      catId: 1,
      itemName: '櫃子',
      itemStatus: 'N'
    },
    {
      itemId: 6,
      catId: 1,
      itemName: '燈管/燈泡',
      itemStatus: 'Y'
    },
    {
      itemId: 7,
      catId: 1,
      itemName: '咖啡機',
      itemStatus: 'Y'
    },
    {
      itemId: 8,
      catId: 1,
      itemName: '冰箱',
      itemStatus: 'Y'
    },
    {
      itemId: 9,
      catId: 1,
      itemName: '碎紙機',
      itemStatus: 'Y'
    },
    {
      itemId: 10,
      catId: 1,
      itemName: '門',
      itemStatus: 'Y'
    },
    {
      itemId: 11,
      catId: 2,
      itemName: '電腦',
      itemStatus: 'Y'
    },
    {
      itemId: 12,
      catId: 2,
      itemName: '滑鼠',
      itemStatus: 'Y'
    },
    {
      itemId: 13,
      catId: 2,
      itemName: '螢幕',
      itemStatus: 'Y'
    },
    {
      itemId: 14,
      catId: 2,
      itemName: '硬碟',
      itemStatus: 'N'
    },
    {
      itemId: 15,
      catId: 3,
      itemName: '電話',
      itemStatus: 'Y'
    },
    {
      itemId: 16,
      catId: 4,
      itemName: '網路分享器',
      itemStatus: 'Y'
    },
    {
      itemId: 17,
      catId: 4,
      itemName: '手機',
      itemStatus: 'Y'
    },
    {
      itemId: 18,
      catId: 4,
      itemName: '投影設備',
      itemStatus: 'N'
    }
  ]
  const getOneItems = items.find(
    (item) => item.itemId.toString() === req.params.itemId
  )
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: getOneItems
  })
})

router.post('/api/Item/Edit', function (req, res) {
  const reqData = req.body
  console.log('reqData=>', reqData)
  const { itemId, catId, itemName, itemStatus } = reqData
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: {
      itemId: itemId,
      catId: catId,
      itemName: itemName,
      itemStatus: itemStatus
    }
  })
})

router.post('/api/Item/EditStatus', function (req, res) {
  const reqData = req.body
  console.log('reqData=>', reqData)
  const { itemId, itemStatus } = reqData
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: {
      itemId: itemId,
      itemStatus: itemStatus
    }
  })
})

router.delete('/api/Item/Delete/:itemId', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: null
  })
})

module.exports = router
