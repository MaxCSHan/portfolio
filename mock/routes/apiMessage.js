const express = require('express')
const router = express.Router()
const faker = require('faker')
router.get('/api/Message/:caseId', function (req, res) {
  const data = [
    {
      msgId: '1',
      caseId: '20200702001',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor lectus vehicula risus tincidunt, vel aliquam nunc rhoncus. Donec eu lacus mi. Fusce nunc purus, consequat a libero at, congue consectetur ex. Fusce facilisis diam ac finibus finibus. Ut ut viverra mauris. Donec lobortis nisl turpis, sit amet pellentesque nibh facilisis et. Suspendisse at felis sit amet enim viverra lacinia. Sed pellentesque dui at nisl congue, vel scelerisque enim pulvinar. Suspendisse dictum sagittis laoreet. Phasellus consequat nibh eu libero tincidunt, sed mollis purus sollicitudin.',
      imagePath: '/file/file/uploads/image/case/20201007008/black.jpg',
      staffsNo: 'abc00001',
      staffsName: '王小明',
      identity: 'admin',
      createDate: '2020/08/30 15:12:13'
    },
    {
      msgId: '2',
      caseId: '20200702001',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor lectus vehicula risus tincidunt, vel aliquam nunc rhoncus. Donec eu lacus mi. Fusce nunc purus, consequat a libero at, congue consectetur ex. Fusce facilisis diam ac finibus finibus. Ut ut viverra mauris. Donec lobortis nisl turpis, sit amet pellentesque nibh facilisis et. Suspendisse at felis sit amet enim viverra lacinia. Sed pellentesque dui at nisl congue, vel scelerisque enim pulvinar. Suspendisse dictum sagittis laoreet. Phasellus consequat nibh eu libero tincidunt, sed mollis purus sollicitudin.',
      imagePath: '/file/file/uploads/image/case/20201007008/black.jpg',
      staffsNo: 'abc00001',
      staffsName: '王大明',
      identity: 'applicant',
      createDate: '2020/08/30 15:13:15'
    },
    {
      msgId: '3',
      caseId: '20200702001',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor lectus vehicula risus tincidunt, vel aliquam nunc rhoncus. Donec eu lacus mi. Fusce nunc purus, consequat a libero at, congue consectetur ex. Fusce facilisis diam ac finibus finibus. Ut ut viverra mauris. Donec lobortis nisl turpis, sit amet pellentesque nibh facilisis et. Suspendisse at felis sit amet enim viverra lacinia. Sed pellentesque dui at nisl congue, vel scelerisque enim pulvinar. Suspendisse dictum sagittis laoreet. Phasellus consequat nibh eu libero tincidunt, sed mollis purus sollicitudin.',
      imagePath: '/file/file/uploads/image/case/20201006056/2560.jpg',
      staffsNo: 'abc00001',
      staffsName: '王明',
      identity: 'user',
      createDate: '2020/08/30 14:15:15'
    },
    {
      msgId: '2',
      caseId: '20200702001',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor lectus vehicula risus tincidunt, vel aliquam nunc rhoncus. Donec eu lacus mi. Fusce nunc purus, consequat a libero at, congue consectetur ex. Fusce facilisis diam ac finibus finibus. Ut ut viverra mauris. Donec lobortis nisl turpis, sit amet pellentesque nibh facilisis et. Suspendisse at felis sit amet enim viverra lacinia. Sed pellentesque dui at nisl congue, vel scelerisque enim pulvinar. Suspendisse dictum sagittis laoreet. Phasellus consequat nibh eu libero tincidunt, sed mollis purus sollicitudin.',
      imagePath: '/file/file/uploads/image/case/20201006056/2560.jpg',
      staffsNo: 'abc00001',
      staffsName: '王大明',
      identity: 'applicant',
      createDate: '2020/08/30 13:16:15'
    }
  ]
  const response = [
    {
      success: true,
      message: '成功',
      total: 5,
      data: data
    }
    // {
    //   success: true,
    //   message: '成功',
    //   total: 5,
    //   data: null
    // }
    // {
    //   success: false,
    //   message: '留言載入失敗',
    //   total: 5,
    //   data: null
    // }
  ]
  res.json(faker.random.arrayElement(response))
})

router.post('/api/Message/Add', function (req, res) {
  const response = [
    {
      success: true,
      message: '成功',
      total: 5,
      data: null
    },
    {
      success: false,
      message: '留言失敗',
      total: 5,
      data: null
    }
  ]

  res.json(faker.random.arrayElement(response))
})

module.exports = router
