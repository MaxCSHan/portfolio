
const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const faker = require('faker')
function getByteArray (filePath) {
  const fileData = fs.readFileSync(path.resolve(__dirname, filePath)).toString('hex')
  const result = []
  for (var i = 0; i < fileData.length; i += 2) { result.push('0x' + fileData[i] + '' + fileData[i + 1]) }
  return result
}

router.get('/api/Case/GetOne/:caseId', function (req, res) {
  const response = [
    {
      success: true,
      message: '成功',
      total: 1,
      data: {
        caseId: req.params.caseId,
        locId: '2',
        locName: '台北辦公室',
        catId: '3',
        catName: '辦公用品',
        itemId: '15',
        itemName: '電話',
        staffsName: '王小明',
        staffsNo: 'abc00001',
        applyingDate: '2020/07/02',
        completionDate: null,
        remark: '桌子會晃動',
        imagePath: '/file/file/uploads/image/case/20201006056/2560.jpg',
        status: 2,
        evaluation: null
      }
    },
    {
      success: false,
      message: '失敗',
      total: 1,
      data: null
    }
  ]
  res.json(faker.random.arrayElement(response))
})

router.post('/api/Case', function (req, res) {
  //   req.json({
  //     "caseId":null,
  //     "staffsName":null,
  //     "startDate":null,
  //     "endDate":null,
  //     "locId":null,
  //     "catId":null,
  //     "itemId":null,
  //     "status":null,
  //     "remark":null
  // })
  res.json({
    success: true,
    message: '成功',
    total: 20,
    data: [
      {
        caseId: '20200702001',
        locId: '1',
        locName: '台中辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '辦公桌椅',
        staffsNo: 'abc00001',
        staffsName: '王小明',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '桌子會晃動',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 3,
        evaluation: null
      },
      {
        caseId: '20200719018',
        locId: '1',
        locName: '新竹辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '會議室門窗',
        staffsNo: 'abc00001',
        staffsName: '周延',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '門以怪就了真的奇窗不小本開得議室議室一下議室了奇了欸又不是我好的跟同事玩一碎下敲而心打破用的原怪',
        imagePath: null,
        status: 3,
        evaluation: 4
      },
      {
        caseId: '20200813031',
        locId: '1',
        locName: '台中辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '交際桌椅',
        staffsNo: 'abc00001',
        staffsName: '龍書文',
        applyingDate: '2020/07/12',
        completionDate: '2020/08/05',
        remark: '',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 3,
        evaluation: 3
      },
      {
        caseId: '202009020010',
        locId: '1',
        locName: '台北辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '桌燈',
        staffsNo: 'abc00001',
        staffsName: '宇智波佐助',
        applyingDate: '2020/03/22',
        completionDate: '2020/07/15',
        remark: '燈泡壞了',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 3,
        evaluation: 3
      },
      {
        caseId: '20200904007',
        locId: '1',
        locName: '台南辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '文具用品',
        staffsNo: 'abc00001',
        staffsName: '漩窩明仁',
        applyingDate: '2020/07/03',
        completionDate: '2020/07/15',
        remark: '筆沒水了',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 3,
        evaluation: 3
      },
      {
        caseId: '20200816021',
        locId: '1',
        locName: '高雄辦公室',
        catId: '1',
        catName: '辦公室用品',
        itemId: '1',
        itemName: '冷氣',
        staffsNo: 'abc00001',
        staffsName: '郭海皇',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '冷氣不冷',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 3,
        evaluation: 3
      },
      {
        caseId: '20200905003',
        locId: '1',
        locName: '台北辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '辦公桌椅',
        staffsNo: 'A061449',
        staffsName: 'Joyce',
        applyingDate: '2020/08/31',
        completionDate: '2020/09/05',
        remark: '椅子有吱吱聲',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 1,
        evaluation: null
      },
      {
        caseId: '20200702011',
        locId: '1',
        locName: '台中辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '辦公桌椅',
        staffsNo: 'abc00001',
        staffsName: '王嘉爾',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: 'yoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyoyo~~~>_<',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 1,
        evaluation: null
      },
      {
        caseId: '20200719008',
        locId: '1',
        locName: '新竹辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '會議室門窗',
        staffsNo: 'abc00001',
        staffsName: '周延',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '門窗不小心打破了',
        imagePath: null,
        status: 3,
        evaluation: 5
      },
      {
        caseId: '20200813001',
        locId: '1',
        locName: '台中辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '交際桌椅',
        staffsNo: 'abc00001',
        staffsName: 'ming-hua',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '地毯破了一個洞',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 2,
        evaluation: null
      },
      {
        caseId: '20200902008',
        locId: '1',
        locName: '台北辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '桌燈',
        staffsNo: 'abc00001',
        staffsName: '宇智波佐助',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '燈架斷了',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 2,
        evaluation: null
      },
      {
        caseId: '20200904012',
        locId: '1',
        locName: '台南辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '辦公用品',
        staffsNo: 'abc00001',
        staffsName: '小帥弟',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '電燈泡壞了',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 2,
        evaluation: null
      },
      {
        caseId: '20200816010',
        locId: '1',
        locName: '高雄辦公室',
        catId: '1',
        catName: '辦公室用品',
        itemId: '1',
        itemName: '冷氣',
        staffsNo: 'abc00001',
        staffsName: '葉師傅',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '冰箱炸了',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 2,
        evaluation: null
      },
      {
        caseId: '20200905001',
        locId: '1',
        locName: '台北辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '辦公桌椅',
        staffsNo: 'abc00001',
        staffsName: 'Kanye',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '椅子爆了',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 2,
        evaluation: null
      },
      {
        caseId: '20200702021',
        locId: '1',
        locName: '台中辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '辦公桌椅',
        staffsNo: 'abc00001',
        staffsName: '孫東寶',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '桌子會晃動',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 1,
        evaluation: null
      },
      {
        caseId: '20200719022',
        locId: '1',
        locName: '新竹辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '會議室門窗',
        staffsNo: 'abc00001',
        staffsName: '周延',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '門窗不小心打破了',
        imagePath: null,
        status: 3,
        evaluation: 5
      },
      {
        caseId: '20200813023',
        locId: '1',
        locName: '台中辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '交際桌椅',
        staffsNo: 'abc00001',
        staffsName: '摩利亞',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '椅子斷了',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 3,
        evaluation: 2
      },
      {
        caseId: '202009020024',
        locId: '1',
        locName: '台北辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '桌燈',
        staffsNo: 'abc00001',
        staffsName: '宇智波佐助',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '燈泡壞了',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 3,
        evaluation: 3
      },
      {
        caseId: '20200904025',
        locId: '1',
        locName: '台南辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '文具用品',
        staffsNo: 'abc00001',
        staffsName: '漩窩明仁',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '筆沒水了',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 3,
        evaluation: 3
      },
      {
        caseId: '20201016026',
        locId: '1',
        locName: '高雄辦公室',
        catId: '1',
        catName: '辦公室用品',
        itemId: '1',
        itemName: '冷氣',
        staffsNo: 'abc00001',
        staffsName: '烈海王',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '冷氣不冷',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 1,
        evaluation: 5
      },
      {
        caseId: '20200905027',
        locId: '1',
        locName: '台北辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '辦公桌椅',
        staffsNo: 'abc00001',
        staffsName: 'Joyce',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '椅子有吱吱聲',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 3,
        evaluation: 2
      },
      {
        caseId: '20200702028',
        locId: '1',
        locName: '台中辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '辦公桌椅',
        staffsNo: 'abc00001',
        staffsName: '羅志祥',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '桌子太矮',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 3,
        evaluation: 1
      }
    ]
  })
})
router.get('/api/Case/GetUserCase/:staffsNo', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 20,
    data: [
      {
        caseId: '20200702001',
        locId: '1',
        locName: '台中辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '辦公桌椅',
        staffsNo: 'abc00001',
        staffsName: '王小明',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '桌子會晃動',
        imagePath: '/images/case/20200701/big-img02.png',
        status: 1,
        evaluation: null
      },
      {
        caseId: '20200702002',
        locId: '1',
        locName: '台中辦公室',
        catId: '1',
        catName: '辦公用品',
        itemId: '1',
        itemName: '辦公桌椅',
        staffsNo: 'abc00001',
        staffsName: '王小明',
        applyingDate: '2020/07/02',
        completionDate: '2020/07/05',
        remark: '桌子會晃動',
        imagePath: null,
        status: 3,
        evaluation: 5
      }

    ]
  }
  )
})
router.post('/api/Case/Add', function (req, res) {
  res.json({
    success: true,
    message: '新增成功',
    total: 0,
    data:
        {
          caseId: '20200702001'
        }
  })
})

router.post('/api/Case/Edit', function (req, res) {
  res.json({
    success: true,
    message: '編輯成功',
    total: 11,
    data: null
  })
})

router.post('/api/Case/Report', function (req, res) {
  res.json({

    success: true,
    message: '成功',
    total: 1,
    data: {
      file: getByteArray('../assets/demo.xlsx')
    }

  })
})
router.delete('/api/Case/Delete/:caseId', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: null
  })
})
router.post('/api/Case/GiveEvaluation', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: null
  })
})
router.post('/api/Case/EditStatus', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: null
  })
})
module.exports = router
