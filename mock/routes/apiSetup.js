const express = require('express')
const router = express.Router()
router.post('/api/Setup/Edit', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: null
  })
})
router.get('/api/Setup/ConnectUs', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 20,
    data: [
      {
        setupId: 1,
        setupPage: 'ConnectUs',
        setupCode: 'ConnectCaption',
        setupValue: '親愛的用戶您好，有任何問題歡迎與我們聯絡，謝謝您!'
      },
      {
        setupId: 2,
        setupPage: 'ConnectUs',
        setupCode: 'ConnectEmail',
        setupValue: 'abc@gmail.com'
      }
    ]
  })
})

module.exports = router
