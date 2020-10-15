const express = require('express')
const router = express.Router()

router.get('/api/Category', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 1,
    data: [
      {
        catId: 1,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 2,
        catName: '文具用品2',
        catStatus: 'Y'
      },
      {
        catId: 3,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 4,
        catName: '文具用品4',
        catStatus: 'N'
      },
      {
        catId: 5,
        catName: 'Test',
        catStatus: 'Y'
      },
      {
        catId: 6,
        catName: '辦公用品3',
        catStatus: 'Y'
      },
      {
        catId: 7,
        catName: '文具用品2',
        catStatus: 'Y'
      },
      {
        catId: 8,
        catName: '辦公用品3',
        catStatus: 'Y'
      },
      {
        catId: 9,
        catName: '文具用品4',
        catStatus: 'N'
      },
      {
        catId: 10,
        catName: 'Test',
        catStatus: 'Y'
      },
      {
        catId: 11,
        catName: '辦公用品2',
        catStatus: 'Y'
      },
      {
        catId: 12,
        catName: '文具用品2',
        catStatus: 'Y'
      },
      {
        catId: 13,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 14,
        catName: '文具用品4',
        catStatus: 'N'
      },
      {
        catId: 15,
        catName: 'Test',
        catStatus: 'Y'
      },
      {
        catId: 16,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 17,
        catName: '文具用品1',
        catStatus: 'Y'
      },
      {
        catId: 18,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 19,
        catName: '文具用品3',
        catStatus: 'N'
      },
      {
        catId: 20,
        catName: 'Test',
        catStatus: 'Y'
      },
      {
        catId: 21,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 22,
        catName: '文具用品2',
        catStatus: 'Y'
      },
      {
        catId: 23,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 24,
        catName: '文具用品4',
        catStatus: 'N'
      },
      {
        catId: 25,
        catName: 'abcd',
        catStatus: 'Y'
      },
      {
        catId: 26,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 27,
        catName: '文具用品2',
        catStatus: 'Y'
      },
      {
        catId: 28,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 29,
        catName: '文具用品4',
        catStatus: 'N'
      },
      {
        catId: 30,
        catName: 'Test',
        catStatus: 'Y'
      },
      {
        catId: 31,
        catName: '辦公用品3',
        catStatus: 'Y'
      },
      {
        catId: 32,
        catName: '文具用品2',
        catStatus: 'Y'
      },
      {
        catId: 33,
        catName: '辦公用品3',
        catStatus: 'Y'
      },
      {
        catId: 34,
        catName: '文具用品4',
        catStatus: 'N'
      },
      {
        catId: 35,
        catName: 'Test',
        catStatus: 'Y'
      },
      {
        catId: 36,
        catName: '辦公用品2',
        catStatus: 'Y'
      },
      {
        catId: 37,
        catName: '文具用品2',
        catStatus: 'Y'
      },
      {
        catId: 38,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 39,
        catName: '文具用品4',
        catStatus: 'N'
      },
      {
        catId: 40,
        catName: 'Test',
        catStatus: 'Y'
      },
      {
        catId: 41,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 42,
        catName: '文具用品1',
        catStatus: 'Y'
      },
      {
        catId: 43,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 44,
        catName: '文具用品3',
        catStatus: 'N'
      },
      {
        catId: 45,
        catName: 'Test',
        catStatus: 'Y'
      },
      {
        catId: 46,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 47,
        catName: '文具用品2',
        catStatus: 'Y'
      },
      {
        catId: 48,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 49,
        catName: '文具用品4',
        catStatus: 'N'
      },
      {
        catId: 50,
        catName: 'abcd',
        catStatus: 'Y'
      },
      {
        catId: 51,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 52,
        catName: '文具用品2',
        catStatus: 'Y'
      },
      {
        catId: 53,
        catName: '辦公用品',
        catStatus: 'Y'
      },
      {
        catId: 54,
        catName: '文具用品4',
        catStatus: 'N'
      },
      {
        catId: 55,
        catName: 'Test',
        catStatus: 'Y'
      },
      {
        catId: 56,
        catName: '辦公用品3',
        catStatus: 'Y'
      },
      {
        catId: 57,
        catName: '文具用品2',
        catStatus: 'Y'
      },
      {
        catId: 58,
        catName: '辦公用品3',
        catStatus: 'Y'
      },
      {
        catId: 59,
        catName: '文具用品4',
        catStatus: 'N'
      },
      {
        catId: 60,
        catName: 'Test',
        catStatus: 'Y'
      }
    ]
  })
})

router.post('/api/Category/Add', function (req, res) {
  const reqData = req.body
  const { catName, catStatus } = reqData
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: {
      catName: catName,
      catStatus: catStatus
    }
  })
})

router.post('/api/Category/EditStatus', function (req, res) {
  const reqData = req.body
  const { catId, catStatus } = reqData
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: {
      catId: catId,
      catStatus: catStatus
    }
  })
})

router.get('/api/Category/GetOne/:catId', function (req, res) {
  const cats = [
    {
      catId: 1,
      catName: '辦公用品',
      catStatus: 'Y'
    },
    {
      catId: 1,
      catName: '辦公用品',
      catStatus: 'Y'
    },
    {
      catId: 2,
      catName: '文具用品2',
      catStatus: 'Y'
    },
    {
      catId: 3,
      catName: '辦公用品',
      catStatus: 'Y'
    },
    {
      catId: 4,
      catName: '文具用品4',
      catStatus: 'N'
    },
    {
      catId: 5,
      catName: 'Test',
      catStatus: 'Y'
    },
    {
      catId: 6,
      catName: '辦公用品3',
      catStatus: 'Y'
    },
    {
      catId: 7,
      catName: '文具用品2',
      catStatus: 'Y'
    },
    {
      catId: 8,
      catName: '辦公用品3',
      catStatus: 'Y'
    },
    {
      catId: 9,
      catName: '文具用品4',
      catStatus: 'N'
    },
    {
      catId: 10,
      catName: 'Test',
      catStatus: 'Y'
    },
    {
      catId: 11,
      catName: '辦公用品2',
      catStatus: 'Y'
    },
    {
      catId: 12,
      catName: '文具用品2',
      catStatus: 'Y'
    },
    {
      catId: 13,
      catName: '辦公用品',
      catStatus: 'Y'
    },
    {
      catId: 14,
      catName: '文具用品4',
      catStatus: 'N'
    },
    {
      catId: 15,
      catName: 'Test',
      catStatus: 'Y'
    },
    {
      catId: 16,
      catName: '辦公用品',
      catStatus: 'Y'
    },
    {
      catId: 17,
      catName: '文具用品1',
      catStatus: 'Y'
    },
    {
      catId: 18,
      catName: '辦公用品',
      catStatus: 'Y'
    },
    {
      catId: 19,
      catName: '文具用品3',
      catStatus: 'N'
    },
    {
      catId: 20,
      catName: 'Test',
      catStatus: 'Y'
    },
    {
      catId: 21,
      catName: '辦公用品',
      catStatus: 'Y'
    },
    {
      catId: 22,
      catName: '文具用品2',
      catStatus: 'Y'
    },
    {
      catId: 23,
      catName: '辦公用品',
      catStatus: 'Y'
    },
    {
      catId: 24,
      catName: '文具用品4',
      catStatus: 'N'
    },
    {
      catId: 25,
      catName: 'abcd',
      catStatus: 'Y'
    }]
  const getOneCats = cats.find(
    (cat) => cat.catId.toString() === req.params.catId
  )
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: getOneCats
  })
})

router.post('/api/Category/Edit', function (req, res) {
  const reqData = req.body
  const { catId, catName, catStatus } = reqData
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: {
      catId: catId,
      catName: catName,
      catStatus: catStatus
    }
  })
})

router.delete('/api/Category/Delete/:catId', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: null
  })
})

module.exports = router
