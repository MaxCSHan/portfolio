const express = require('express')
const router = express.Router()
const faker = require('faker')
const { genDatas, padStartWithZero, convertDateToFormatString } = require('../utils/responseHelper')

router.get('/api/Staffs', function (req, res) {
  // const data = genDatas(faker.random.number({ min: 1, max: 60 }), (index) => {
  //   return {
  //     staffsNo: `A${padStartWithZero(index + 1, 6)}`,
  //     staffsName: faker.name.firstName(),
  //     staffsEnname: faker.name.firstName(),
  //     organizationNo: null,
  //     suborganizationNo: null,
  //     flag: faker.random.arrayElement(['Y', 'N']),
  //     roleData: [
  //       ...genDatas(faker.random.number({ min: 0, max: 3 }), (index) => {
  //         return {
  //           roleNo: `R${padStartWithZero(index + 1, 6)}`,
  //           roleName: `R${padStartWithZero(index + 1, 6)}-Name`
  //         }
  //       }),
  //       {
  //         roleNo: 'A00003',
  //         roleName: '一般用戶'
  //       }
  //     ]
  //   }
  // })
  res.json({
    success: true,
    message: '成功',
    total: 390,
    data: [
      {
        staffsNo: '08675363',
        staffsName: '果核數位管理員',
        staffsEnname: 'admin',
        organizationNo: '1',
        organizationName: '(測試)昕力資訊股份有限公司',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '09876',
        staffsName: '陳柏成',
        staffsEnname: '1',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '1111111',
        staffsName: '果核數位管理員',
        staffsEnname: '果核數位使用者2',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '11115566',
        staffsName: '王仁甫',
        staffsEnname: 'Zax',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '123',
        staffsName: '呂宜瑾',
        staffsEnname: 'Jenny Lu',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '123123',
        staffsName: 'Test2',
        staffsEnname: 'test2',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '107',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '12312312',
        staffsName: 'test',
        staffsEnname: 'test',
        organizationNo: '8',
        organizationName: '第二組',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '123123213',
        staffsName: '測試用',
        staffsEnname: 'Test',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '123132213',
        staffsName: 'test',
        staffsEnname: 'test',
        organizationNo: '8',
        organizationName: '第二組',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '12345',
        staffsName: 'aaa',
        staffsEnname: 'aaa',
        organizationNo: '1',
        organizationName: '(測試)昕力資訊股份有限公司',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '12346',
        staffsName: 'bbb',
        staffsEnname: 'bbb',
        organizationNo: '1',
        organizationName: '(測試)昕力資訊股份有限公司',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '12389',
        staffsName: '測試',
        staffsEnname: 'testRedirect',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '1516516',
        staffsName: '馬克刻刻刻刻',
        staffsEnname: 'sdgdsg',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20',
        staffsName: '201',
        staffsEnname: '20',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2005001',
        staffsName: '姚總',
        staffsEnname: 'Ben Yao',
        organizationNo: '1',
        organizationName: '(測試)昕力資訊股份有限公司',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2005002',
        staffsName: '蔡奇瑾',
        staffsEnname: 'Kate Tsai',
        organizationNo: '42',
        organizationName: null,
        suborganizationNo: '42',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2005003',
        staffsName: '葉大大',
        staffsEnname: 'Yilan Yeh',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2005006',
        staffsName: '測試2',
        staffsEnname: 'test 2',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: '9',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2005007',
        staffsName: '測試20200305',
        staffsEnname: 'JavaLi',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2006008',
        staffsName: '李爪仔',
        staffsEnname: 'JH Li',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20060082',
        staffsName: '葉文華',
        staffsEnname: 'todd Yeh',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '201',
        staffsName: '201',
        staffsEnname: '201',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2010010',
        staffsName: '張書銘',
        staffsEnname: 'Michael Chang',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2010015',
        staffsName: '金城武',
        staffsEnname: 'Kaneshiro Takeshi',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '106',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2010016',
        staffsName: '我是試用人員',
        staffsEnname: 'I am trial emp',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '88',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2010019',
        staffsName: 'Jason測試用二號',
        staffsEnname: 'JasonTest2',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2010022',
        staffsName: 'Jason測試用三號',
        staffsEnname: 'JasonTest3',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2010026',
        staffsName: '胡永祥',
        staffsEnname: 'Ackbar Hu',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20100508',
        staffsName: 'yjyuyk',
        staffsEnname: 'uykk',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2011038',
        staffsName: '測試猩猩',
        staffsEnname: 'blaze.hsu',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: '105',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2011039',
        staffsName: '測試12',
        staffsEnname: 'test 12',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: '105',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2011046',
        staffsName: 'Mark Chou',
        staffsEnname: 'Mark Chou',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: '105',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2011048',
        staffsName: '林靖真',
        staffsEnname: 'Ellen Lin',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2012062',
        staffsName: '周馬克',
        staffsEnname: 'Mark Chou',
        organizationNo: '63',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2012063',
        staffsName: '測試thiem',
        staffsEnname: 'thiemtest',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2012065',
        staffsName: '測試tim',
        staffsEnname: 'AD2LA',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '4',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2012066',
        staffsName: '測試18',
        staffsEnname: 'test 18',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2012068',
        staffsName: '哈哈',
        staffsEnname: 'haha',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2012082',
        staffsName: '測試19',
        staffsEnname: 'test 19',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2012084',
        staffsName: '翁維紳',
        staffsEnname: 'Wilson Weng',
        organizationNo: '63',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2012999',
        staffsName: 'WilsonTest',
        staffsEnname: 'WilsonTest',
        organizationNo: '63',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2013092',
        staffsName: '測試21',
        staffsEnname: 'test 21',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2013100',
        staffsName: '張秦綺',
        staffsEnname: 'Peggy',
        organizationNo: '44',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2014104',
        staffsName: 'Johnny',
        staffsEnname: 'Johnny Kuo',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2014110',
        staffsName: '蔡敏欣',
        staffsEnname: 'Mandy Tsai',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2014116',
        staffsName: '測試25',
        staffsEnname: 'test 25',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2014118',
        staffsName: '測試26',
        staffsEnname: 'test 26',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2014120',
        staffsName: '詹智丞',
        staffsEnname: 'Eric Chan',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: '43',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2014125',
        staffsName: '張鈞名',
        staffsEnname: 'Jimmy Chang',
        organizationNo: '63',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2014127',
        staffsName: '測試29',
        staffsEnname: 'test 29',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2014128',
        staffsName: '測試30',
        staffsEnname: 'test 30',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2014129',
        staffsName: '測試31',
        staffsEnname: 'test 31',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015130',
        staffsName: '昕力大學',
        staffsEnname: 'TPU',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015138',
        staffsName: '測試32',
        staffsEnname: 'test 32',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015141',
        staffsName: '測試33',
        staffsEnname: 'test 33',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015143',
        staffsName: '測試34',
        staffsEnname: 'test 34',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015144',
        staffsName: '朱文吉',
        staffsEnname: 'Tom Chu',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: '7',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015145',
        staffsName: '測試36',
        staffsEnname: 'test 36',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015147',
        staffsName: '測試37',
        staffsEnname: 'test 37',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015150',
        staffsName: '測試38',
        staffsEnname: 'test 38',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015151',
        staffsName: 'ERP管理者',
        staffsEnname: 'Erp Admin',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015152',
        staffsName: '呂詩涵',
        staffsEnname: 'Stella',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015153',
        staffsName: '測試41',
        staffsEnname: 'test 41',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015159',
        staffsName: '西西大神',
        staffsEnname: 'Cecilia Lin',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015160',
        staffsName: '姜志民',
        staffsEnname: 'Jhihmin Jiang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015162',
        staffsName: '2015162',
        staffsEnname: '2015162',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015163',
        staffsName: '劉勇麟',
        staffsEnname: 'Peter Liu',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: '7',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015165',
        staffsName: '黃天華',
        staffsEnname: 'Jason Huang',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015167',
        staffsName: '測試47',
        staffsEnname: 'test 47',
        organizationNo: '43',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015168',
        staffsName: '測試48',
        staffsEnname: 'test 48',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015173',
        staffsName: '測試49',
        staffsEnname: 'test 49',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015174',
        staffsName: '測試50',
        staffsEnname: 'test 50',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015179',
        staffsName: '測試51',
        staffsEnname: 'test 51',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2015182',
        staffsName: '測試52',
        staffsEnname: 'test 52',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016187',
        staffsName: '測試53',
        staffsEnname: 'test 53',
        organizationNo: '43',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016188',
        staffsName: '測試54',
        staffsEnname: 'test 54',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: '7',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016193',
        staffsName: '測試55',
        staffsEnname: 'test 55',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016196',
        staffsName: '測試56',
        staffsEnname: 'test 56',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016198',
        staffsName: '測試57',
        staffsEnname: 'test 57',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016200',
        staffsName: '測試58',
        staffsEnname: 'test 58',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '4',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016201',
        staffsName: '鄭宇茜',
        staffsEnname: 'Ellen Cheng',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016202',
        staffsName: '測試60',
        staffsEnname: 'test 60',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016204',
        staffsName: '測試61',
        staffsEnname: 'test 61',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: '104',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016205',
        staffsName: '測試62',
        staffsEnname: 'test 62',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: '104',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016206',
        staffsName: '測試63',
        staffsEnname: 'test 63',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016208',
        staffsName: '測試64',
        staffsEnname: 'test 64',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016209',
        staffsName: '測試65',
        staffsEnname: 'test 65',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016210',
        staffsName: 'Weber',
        staffsEnname: 'Weber',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016212',
        staffsName: '曹威寶',
        staffsEnname: 'Weber',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016213',
        staffsName: '測試68',
        staffsEnname: 'test 68',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016215',
        staffsName: '測試69',
        staffsEnname: 'test 69',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: '8',
        suborganizationName: '第二組',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016216',
        staffsName: '測試70',
        staffsEnname: 'test 70',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016220',
        staffsName: 'Clare',
        staffsEnname: 'Clare',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016222',
        staffsName: '葉哲良',
        staffsEnname: 'Sunny',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016224',
        staffsName: '王弼甫',
        staffsEnname: 'Jeff Wang',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016225',
        staffsName: '許雅娟',
        staffsEnname: 'Joy Hsu',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016226',
        staffsName: '林靜歆',
        staffsEnname: 'Leona Lin',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016228',
        staffsName: 'CC測試76',
        staffsEnname: 'cecilia.lin76',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016229',
        staffsName: '測試77',
        staffsEnname: 'test 77',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016230',
        staffsName: '測試78',
        staffsEnname: 'test 78',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016231',
        staffsName: '曹思文',
        staffsEnname: 'Bernice Tsao',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '112',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016232',
        staffsName: '測試80',
        staffsEnname: 'test 80',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: '7',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2016233',
        staffsName: '測試81',
        staffsEnname: 'test 81',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017234',
        staffsName: '測試82',
        staffsEnname: 'test 82',
        organizationNo: '54',
        organizationName: null,
        suborganizationNo: '1',
        suborganizationName: '(測試)昕力資訊股份有限公司',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017235',
        staffsName: '測試83',
        staffsEnname: 'test 83',
        organizationNo: '54',
        organizationName: null,
        suborganizationNo: '7',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017236',
        staffsName: '測試84',
        staffsEnname: 'test 84',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: '108',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017237',
        staffsName: '趙嘉恩',
        staffsEnname: 'Yoko Chao',
        organizationNo: '54',
        organizationName: null,
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017238',
        staffsName: '測試86',
        staffsEnname: 'test 86',
        organizationNo: '54',
        organizationName: null,
        suborganizationNo: '7',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017239',
        staffsName: '測試87',
        staffsEnname: 'test 87',
        organizationNo: '54',
        organizationName: null,
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017240',
        staffsName: '測試88',
        staffsEnname: 'test 88',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: '108',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017241',
        staffsName: '測試89',
        staffsEnname: 'test 89',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: '7',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017245',
        staffsName: '測試90',
        staffsEnname: 'test 90',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017246',
        staffsName: '測試91',
        staffsEnname: 'test 91',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017249',
        staffsName: '測試92',
        staffsEnname: 'test 92',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017250',
        staffsName: '測試93',
        staffsEnname: 'test 93',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017251',
        staffsName: '測試94',
        staffsEnname: 'test 94',
        organizationNo: '44',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017252',
        staffsName: '測試95',
        staffsEnname: 'test 95',
        organizationNo: '44',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017254',
        staffsName: '測試96',
        staffsEnname: 'test 96',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017256',
        staffsName: '測試97',
        staffsEnname: 'test 97',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: '7',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017257',
        staffsName: '測試98',
        staffsEnname: 'test 98',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: '97',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017259',
        staffsName: '測試99',
        staffsEnname: 'test 99',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: '8',
        suborganizationName: '第二組',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017260',
        staffsName: '測試100',
        staffsEnname: 'test 100',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: '4',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017261',
        staffsName: '測試101',
        staffsEnname: 'test 101',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: '97',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017262',
        staffsName: '測試102',
        staffsEnname: 'test 102',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017263',
        staffsName: '測試103',
        staffsEnname: 'test 103',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017264',
        staffsName: '謝宜樺',
        staffsEnname: 'Eva Hsieh',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017265',
        staffsName: '測試105',
        staffsEnname: 'test 105',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017266',
        staffsName: '賴穎瑩',
        staffsEnname: 'Inin Lai',
        organizationNo: '1',
        organizationName: '(測試)昕力資訊股份有限公司',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [
          { roleNo: '2', roleName: '處長' },
          { roleNo: '99', roleName: '一般用戶' }
        ]
      },
      {
        staffsNo: '2017267',
        staffsName: '測試107',
        staffsEnname: 'test 107',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017268',
        staffsName: '測試108',
        staffsEnname: 'test 108',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017269',
        staffsName: '欣其',
        staffsEnname: 'chi.tung',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017270',
        staffsName: '測試110',
        staffsEnname: 'test 110',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017271',
        staffsName: '測試111',
        staffsEnname: 'test 111',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: '65',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017272',
        staffsName: '昕葉雅筑',
        staffsEnname: 'Inez TPI',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017273',
        staffsName: '賈斯汀',
        staffsEnname: 'test 113',
        organizationNo: '1',
        organizationName: '(測試)昕力資訊股份有限公司',
        suborganizationNo: '9',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017274',
        staffsName: '測試114',
        staffsEnname: 'test 114',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017275',
        staffsName: '林哲弘',
        staffsEnname: 'Jason Lin',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017276',
        staffsName: 'Jason金牌御用小弟',
        staffsEnname: 'King Of The World',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017278',
        staffsName: '測試118',
        staffsEnname: 'test 118',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017279',
        staffsName: '測試119',
        staffsEnname: 'test 119',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2017280',
        staffsName: '測試120',
        staffsEnname: 'test 120',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: '97',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018001',
        staffsName: '路易斯測試機',
        staffsEnname: 'ARTISAN_UPDATE',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018002',
        staffsName: '曹若麟',
        staffsEnname: 'Rory',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018003',
        staffsName: '朱建宇',
        staffsEnname: 'Sam Chu',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018004',
        staffsName: '陳致豪',
        staffsEnname: 'Billy Chen',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018008',
        staffsName: '簡克達',
        staffsEnname: 'Chien Ko Ta',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018010',
        staffsName: '蘇煒翔(測試)',
        staffsEnname: 'Ryan Su',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018011',
        staffsName: '許郁承',
        staffsEnname: 'YuCheng Hsu',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20180319',
        staffsName: '悟空超',
        staffsEnname: null,
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20180329',
        staffsName: '北川井仔',
        staffsEnname: 'Test2',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20180601',
        staffsName: 'vfbd',
        staffsEnname: 'dfbdfb',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20180604',
        staffsName: 'dfhdfhk.hk.h',
        staffsEnname: 'dfhdfhhk.',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20180704',
        staffsName: '猩猩小鬼',
        staffsEnname: 'bbz',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20180713',
        staffsName: '賴神',
        staffsEnname: 'LaiGod',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '201807132',
        staffsName: '大',
        staffsEnname: 'Test Ming',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '201807133',
        staffsName: 'YES',
        staffsEnname: 'YES',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20180718',
        staffsName: '20180718',
        staffsEnname: '20180718',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20181008',
        staffsName: 'Ryan測試用',
        staffsEnname: 'Ryan測試用',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: '7',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018111',
        staffsName: '特休測試1',
        staffsEnname: 'day1',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20181111',
        staffsName: '測試看看',
        staffsEnname: 'sdff',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018112',
        staffsName: '特休測試2',
        staffsEnname: 'day2',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018113',
        staffsName: '特休測試3',
        staffsEnname: 'Day3',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018114',
        staffsName: '特休測試4',
        staffsEnname: 'DAY4',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20181202',
        staffsName: '員工新增測',
        staffsEnname: 'empInsert',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018121',
        staffsName: '新增測試倒業',
        staffsEnname: 'testR',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20181218',
        staffsName: '測試喔',
        staffsEnname: 'testii',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20181218001',
        staffsName: 'test account(inez)',
        staffsEnname: 'test account',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018121801',
        staffsName: '測試看看囉',
        staffsEnname: 'test1212',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018168',
        staffsName: '台北王陽明',
        staffsEnname: 'Test1000',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018169',
        staffsName: '高雄林志玲',
        staffsEnname: 'Test1000',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018170',
        staffsName: '台灣南波萬',
        staffsEnname: 'TAIPEIWANG',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018171',
        staffsName: '台南趙又廷',
        staffsEnname: 'Test1000',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018172',
        staffsName: 'JASON御用1',
        staffsEnname: 'TESTINFO1',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018173',
        staffsName: 'JASON御用2',
        staffsEnname: 'TESTINFO2',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018174',
        staffsName: '新莊郭台銘',
        staffsEnname: 'TESTINFO1',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018175',
        staffsName: '台北王陽明',
        staffsEnname: 'TESTINFO2',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: '108',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018176',
        staffsName: '台南習近平',
        staffsEnname: null,
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: '108',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018177',
        staffsName: '台北金正恩',
        staffsEnname: null,
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018281',
        staffsName: '杜嘉祐',
        staffsEnname: 'Josh Du',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018282',
        staffsName: '測試122',
        staffsEnname: 'test 122',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018283',
        staffsName: '測試123',
        staffsEnname: 'test 123',
        organizationNo: '50',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018284',
        staffsName: '測試124',
        staffsEnname: 'test 124',
        organizationNo: '50',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018285',
        staffsName: '測試125',
        staffsEnname: 'test 125',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: '97',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018286',
        staffsName: '馬恩奇',
        staffsEnname: 'Sean Ma',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018287',
        staffsName: '測試127',
        staffsEnname: 'test 127',
        organizationNo: '8',
        organizationName: '第二組',
        suborganizationNo: '66',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018288',
        staffsName: 'onion.tsai',
        staffsEnname: 'onion.tsai',
        organizationNo: '44',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018289',
        staffsName: '測試129',
        staffsEnname: 'test 129',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018290',
        staffsName: 'Michael',
        staffsEnname: 'Michael Chen',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018291',
        staffsName: 'Joe',
        staffsEnname: 'Joe Lee',
        organizationNo: '43',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2018292',
        staffsName: '江志卿',
        staffsEnname: 'David Chiang',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018293',
        staffsName: 'Mengchi',
        staffsEnname: 'Mengchi Tsai',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018294',
        staffsName: '測試134',
        staffsEnname: 'test 134',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: '7',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018295',
        staffsName: '測試135',
        staffsEnname: 'test 135',
        organizationNo: '43',
        organizationName: null,
        suborganizationNo: '62',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018296',
        staffsName: '測試136',
        staffsEnname: 'test 136',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '112',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018297',
        staffsName: '測試137',
        staffsEnname: 'test 137',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '112',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018298',
        staffsName: '測試138',
        staffsEnname: 'test 138',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018299',
        staffsName: '測試139',
        staffsEnname: 'test 139',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '4',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018300',
        staffsName: '測試140',
        staffsEnname: 'test 140',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018301',
        staffsName: '測試141',
        staffsEnname: 'test 141',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018302',
        staffsName: 'Yochi',
        staffsEnname: 'Yochi',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018303',
        staffsName: '測試143',
        staffsEnname: 'test 143',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '1',
        suborganizationName: '(測試)昕力資訊股份有限公司',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018304',
        staffsName: '陳依珊',
        staffsEnname: 'Nina Chen',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018305',
        staffsName: '張博珺',
        staffsEnname: 'Cindy Chang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '1',
        suborganizationName: '(測試)昕力資訊股份有限公司',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018306',
        staffsName: '施聖澤',
        staffsEnname: 'Patrick Shih',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018307',
        staffsName: '黃仕元',
        staffsEnname: 'Andy Huang',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018308',
        staffsName: '李駿明',
        staffsEnname: 'James Li',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018309',
        staffsName: '黃若雯',
        staffsEnname: 'Angel',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: '105',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018310',
        staffsName: '邱承顥',
        staffsEnname: 'Hank Chiu',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018311',
        staffsName: '吳舒涵',
        staffsEnname: 'Green Wu',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018312',
        staffsName: '郭惠甄',
        staffsEnname: 'Dolly Kuo',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018313',
        staffsName: '蘇聖揚',
        staffsEnname: 'Justin Su',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018314',
        staffsName: '王瑀琦',
        staffsEnname: 'Yuchi Wang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018315',
        staffsName: '鄭力愷',
        staffsEnname: 'Kevin Cheng',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '4',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018316',
        staffsName: '賴柏勳',
        staffsEnname: 'Alex Lai',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018317',
        staffsName: '王煜翔',
        staffsEnname: 'Nathan Wang',
        organizationNo: '50',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018319',
        staffsName: '員工一',
        staffsEnname: 'Test1',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018320',
        staffsName: '廖偉名',
        staffsEnname: 'Mark Liao',
        organizationNo: '44',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018321',
        staffsName: '員工一',
        staffsEnname: 'Test1',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018322',
        staffsName: '蔡維宇',
        staffsEnname: 'David Tsai',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018323',
        staffsName: '曹馨予',
        staffsEnname: 'CynthiaTsao',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '4',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018326',
        staffsName: 'Jason測試員',
        staffsEnname: 'JasonTestEmp',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018327',
        staffsName: 'Jason測試員1',
        staffsEnname: 'JasonTest1',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018328',
        staffsName: '歐巴馬',
        staffsEnname: 'Oba',
        organizationNo: '1',
        organizationName: '(測試)昕力資訊股份有限公司',
        suborganizationNo: '54',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018331',
        staffsName: '台南習近平',
        staffsEnname: 'SI',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018332',
        staffsName: '台北金正恩',
        staffsEnname: 'KING',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018333',
        staffsName: '台中習平小Q',
        staffsEnname: 'SI',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018334',
        staffsName: '台東金大胖Q',
        staffsEnname: 'KING',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018345',
        staffsName: '測試用大神',
        staffsEnname: 'test',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018346',
        staffsName: '測試專用木人',
        staffsEnname: 'woodMan',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018347',
        staffsName: '測試翔翔木人',
        staffsEnname: 'flyfly',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018348',
        staffsName: '測試用杰倫木人',
        staffsEnname: 'jay',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018357',
        staffsName: 'JJ',
        staffsEnname: 'JJ',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018358',
        staffsName: 'jasonjj',
        staffsEnname: 'jasonjj',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018400',
        staffsName: '王小美',
        staffsEnname: 'May Wang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '8',
        suborganizationName: '第二組',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018417',
        staffsName: '呂佳蓉',
        staffsEnname: 'Miffy Lu',
        organizationNo: '59',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018444',
        staffsName: '2018444',
        staffsEnname: '2018444',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018558',
        staffsName: '2018558',
        staffsEnname: '2018558',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20185858',
        staffsName: 'Jason我發我發',
        staffsEnname: 'Jason888',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018745',
        staffsName: '2018745',
        staffsEnname: '2018745',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018753',
        staffsName: '2018753',
        staffsEnname: '2018753',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018754',
        staffsName: 'AA',
        staffsEnname: 'AA',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018777',
        staffsName: 'Jason愛吃菜',
        staffsEnname: 'Jason Lin11',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018796',
        staffsName: '2018796',
        staffsEnname: '2018796',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018797',
        staffsName: '2018797',
        staffsEnname: '2018797',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018888',
        staffsName: 'Jason寶寶愛吃鍋',
        staffsEnname: 'Jason Lin',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018963',
        staffsName: '測試Spring',
        staffsEnname: 'SpringTest',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018996',
        staffsName: 'Jesse',
        staffsEnname: 'jesse.luo',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018997',
        staffsName: '賴丁豪',
        staffsEnname: 'Neil Lai',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018998',
        staffsName: 'TEST',
        staffsEnname: 'TEST',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018999',
        staffsName: '林菀甄',
        staffsEnname: 'Wanchen Lim',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2018test',
        staffsName: '2018test',
        staffsEnname: '2018test',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019001',
        staffsName: '測試用小屁孩',
        staffsEnname: 'pi hi',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019002',
        staffsName: '林JA',
        staffsEnname: 'JA',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20190227',
        staffsName: '昕力資訊',
        staffsEnname: 'thinkpower',
        organizationNo: '8',
        organizationName: '第二組',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20190506',
        staffsName: '測試金額未達標準',
        staffsEnname: 'testtax',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20190513',
        staffsName: '金害',
        staffsEnname: '20190513',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '1',
        suborganizationName: '(測試)昕力資訊股份有限公司',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20190906',
        staffsName: '彬神',
        staffsEnname: 'Wenpin Liao',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '20191050',
        staffsName: '測試1007',
        staffsEnname: 'Test',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019119',
        staffsName: 'tom',
        staffsEnname: 'tom',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '46',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019120',
        staffsName: '員工1202',
        staffsEnname: 'Test1202',
        organizationNo: '8',
        organizationName: '第二組',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019121',
        staffsName: '員工12021',
        staffsEnname: 'Test12021',
        organizationNo: '8',
        organizationName: '第二組',
        suborganizationNo: '46',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019414',
        staffsName: '2019414',
        staffsEnname: '2019414',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019473',
        staffsName: '呂長紘',
        staffsEnname: 'Denny Lu',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019474',
        staffsName: '葉宗原',
        staffsEnname: 'Tsungyuan Yeh',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019475',
        staffsName: '葉修文',
        staffsEnname: 'Eugene Yeh',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019476',
        staffsName: 'Denny Lu',
        staffsEnname: 'Denny Lu',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019495',
        staffsName: '許文',
        staffsEnname: 'Richard Hsu',
        organizationNo: '63',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019525',
        staffsName: '石曜綸\t',
        staffsEnname: 'Scott Shih',
        organizationNo: '14',
        organizationName: '敏捷團隊AA',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019529',
        staffsName: '葉淑婷',
        staffsEnname: 'Mina Yieh',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019557',
        staffsName: '蔡宗勳',
        staffsEnname: 'Tsunghsun Tsai',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019580',
        staffsName: '韓子彥',
        staffsEnname: 'Jason Han',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2019582',
        staffsName: '曾韻伃',
        staffsEnname: 'Agnes Tseng',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2019623',
        staffsName: '陳羿彣',
        staffsEnname: 'emily Chen',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2019996',
        staffsName: 'Jesse11',
        staffsEnname: 'jesse.luo1',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020001',
        staffsName: '林小寶',
        staffsEnname: 'Happy Lin',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020002',
        staffsName: '陳瑪利',
        staffsEnname: 'Mary Chen',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020003',
        staffsName: '黃美麗',
        staffsEnname: 'Beauty Huang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020020602',
        staffsName: '江玥娜',
        staffsEnname: 'Yona',
        organizationNo: '63',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '202002061',
        staffsName: '葉凱文',
        staffsEnname: 'Kevin',
        organizationNo: '63',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '20200312',
        staffsName: '測試新增Angel',
        staffsEnname: '測試新增Angel',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020100',
        staffsName: 'test',
        staffsEnname: 'test',
        organizationNo: '8',
        organizationName: '第二組',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020101',
        staffsName: '林小寶',
        staffsEnname: 'Happy Lin',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020102',
        staffsName: '陳瑪利',
        staffsEnname: 'Mary Chen',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020103',
        staffsName: '黃美麗',
        staffsEnname: 'Beauty Huang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020104',
        staffsName: 'Doris測試',
        staffsEnname: 'Doris',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020105',
        staffsName: 'Emily測試',
        staffsEnname: 'Emily',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020106',
        staffsName: 'TestLouis',
        staffsEnname: 'TestLouis',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020159',
        staffsName: 'CC',
        staffsEnname: 'Cecilia Lin 2',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020647',
        staffsName: '鄧美達',
        staffsEnname: 'Media Deng',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020657',
        staffsName: '楊上毅',
        staffsEnname: 'Sean',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020658',
        staffsName: '黃匯雯',
        staffsEnname: 'May',
        organizationNo: '1',
        organizationName: '(測試)昕力資訊股份有限公司',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [
          { roleNo: '2', roleName: '處長' },
          { roleNo: '99', roleName: '一般用戶' }
        ]
      },
      {
        staffsNo: '2020659',
        staffsName: '劉書含',
        staffsEnname: 'Hailey',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '59',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020663',
        staffsName: '林育星',
        staffsEnname: 'Simon',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020665',
        staffsName: '蔡元泰',
        staffsEnname: 'Yuantai',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: '9',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020667',
        staffsName: '鄒鎮遠',
        staffsEnname: 'Wayne',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020668',
        staffsName: '洪延松',
        staffsEnname: 'Dylan Hung',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020670',
        staffsName: '蔡承諭',
        staffsEnname: 'Skylar',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020671',
        staffsName: '晏陽',
        staffsEnname: 'Yang',
        organizationNo: '1',
        organizationName: '(測試)昕力資訊股份有限公司',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020672',
        staffsName: '廖家鴻',
        staffsEnname: 'Jiahong',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: '8',
        suborganizationName: '第二組',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020673',
        staffsName: '楊琇芳 ',
        staffsEnname: 'Bruce Yang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020674',
        staffsName: '忻群曜',
        staffsEnname: 'Tom Hsin',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020683',
        staffsName: '楊博允',
        staffsEnname: 'David Yang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '2',
        suborganizationName: '總處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020698',
        staffsName: '成昀庭',
        staffsEnname: 'Tiffany Cheng',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020722',
        staffsName: '陳怡昌',
        staffsEnname: 'Harry Chen',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020723',
        staffsName: '徐靖雯',
        staffsEnname: 'Muriel Hsu',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020748',
        staffsName: '洪詩晴',
        staffsEnname: 'Spring Hung',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020762',
        staffsName: '劉松岳',
        staffsEnname: 'Sung Liu',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020763',
        staffsName: '楊文碩',
        staffsEnname: 'Jacky Yang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020764',
        staffsName: '王廣瑜',
        staffsEnname: 'Bella Wang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020765',
        staffsName: '莊雅卉',
        staffsEnname: 'Catherine Jhuang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020766',
        staffsName: '李品郁',
        staffsEnname: 'Zoe Lee',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '15',
        suborganizationName: '數位金融暨行動應用處',
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020767',
        staffsName: '董孟達',
        staffsEnname: 'Wilson Tung',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020768',
        staffsName: '高嘉辰',
        staffsEnname: 'Jason Kao',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020769',
        staffsName: '劉正鈞',
        staffsEnname: 'Jungle Liu',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020770',
        staffsName: '陳祥傑',
        staffsEnname: 'Jason Chen',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020771',
        staffsName: '林佳臻',
        staffsEnname: 'Jane Lin',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020772',
        staffsName: '陳勇儒',
        staffsEnname: 'Eric Chen',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020773',
        staffsName: '林蕎安',
        staffsEnname: 'Joanne Lin',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020774',
        staffsName: '吳郁姍',
        staffsEnname: 'Silvia Wu',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020775',
        staffsName: '李佳穎',
        staffsEnname: 'May Lee',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020776',
        staffsName: '蒲致瑋',
        staffsEnname: 'Paul Pu',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020777',
        staffsName: '陳司翰',
        staffsEnname: 'Max Chen',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '1', roleName: '公司管理員' }]
      },
      {
        staffsNo: '2020996',
        staffsName: 'Jesse2',
        staffsEnname: 'jesse.luo2',
        organizationNo: '44',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2020999',
        staffsName: '1',
        staffsEnname: '1',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '2345',
        staffsName: '測試',
        staffsEnname: 'Test',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '369852',
        staffsName: '測',
        staffsEnname: 't',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '453535373',
        staffsName: "j'j'o'",
        staffsEnname: "uo''j'",
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '456',
        staffsName: '測試島頁',
        staffsEnname: 'test',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '456123',
        staffsName: '測試',
        staffsEnname: 're',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '456971',
        staffsName: '測試',
        staffsEnname: 'te',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '456987',
        staffsName: '測試新增',
        staffsEnname: 'testIn',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '45987',
        staffsName: '測是島頁',
        staffsEnname: 'tes',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '543543',
        staffsName: 'erherhtjtyjytj',
        staffsEnname: 'erherh',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '546545723',
        staffsName: '周馬克刻刻',
        staffsEnname: 'fdsg',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '552354543',
        staffsName: 'jhmhgmg',
        staffsEnname: 'thjhj',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '55667788',
        staffsName: '伊莉莎白二世',
        staffsEnname: 'two',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '74',
        staffsName: '74',
        staffsEnname: '74',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '789',
        staffsName: '測試新增',
        staffsEnname: 'testinsert',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '789456',
        staffsName: '測試',
        staffsEnname: 'test',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '87',
        staffsName: '87',
        staffsEnname: '87',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '95275566',
        staffsName: '拿破掉的輪子',
        staffsEnname: '',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '963147',
        staffsName: '測試新增島頁',
        staffsEnname: 'insert',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '999998',
        staffsName: 'ClareTest1',
        staffsEnname: 'ClareTest1',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: '999999999',
        staffsName: '郭老闆',
        staffsEnname: 'Boss.Guo',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'aaaaaaaaa',
        staffsName: '瑞斯叔叔',
        staffsEnname: 'aaaaaaaaa',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'asd',
        staffsName: 'asd',
        staffsEnname: 'asd',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'asdfghjkl',
        staffsName: 'qwsdfg',
        staffsEnname: 'asdfg',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'bbbbbbbb',
        staffsName: '逼逼逼',
        staffsEnname: 'BBB',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'bbbbbeebeb',
        staffsName: 'beebbebebe',
        staffsEnname: 'bebebebebebbe',
        organizationNo: '39',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'ccccccccc',
        staffsName: '溪西嘻',
        staffsEnname: 'CCC',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'hk334567',
        staffsName: '周星星',
        staffsEnname: 'StarChou',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'JH10001',
        staffsName: 'JH測一',
        staffsEnname: 'JH test 1',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'JH10002',
        staffsName: 'JH測二',
        staffsEnname: 'JH test 2',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'JH10003',
        staffsName: '員工測',
        staffsEnname: 'Test1000',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'JH100100',
        staffsName: '果核數位管理員1',
        staffsEnname: 'webpt1',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'JH100101',
        staffsName: '�G��2',
        staffsEnname: 'webpt1',
        organizationNo: '5',
        organizationName: '管理部(原)',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TEST001',
        staffsName: 'Nilsson',
        staffsEnname: 'nilsson.tsai',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TEST002',
        staffsName: 'Rui.Su',
        staffsEnname: 'rui.su',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: '9',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TEST0422',
        staffsName: 'Celia',
        staffsEnname: 'Celia.dai',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TEST0423',
        staffsName: '測試小明',
        staffsEnname: 'Test Ming',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TEST1003',
        staffsName: '李測三',
        staffsEnname: 'Li test3',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TEST2017277',
        staffsName: '測到天荒地老',
        staffsEnname: 'TEST2018277',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TEST2018275',
        staffsName: '測到天荒地老',
        staffsEnname: 'TEST2018275',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TEST2018278',
        staffsName: '測到天荒地老',
        staffsEnname: 'TEST2018275',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'test20200305',
        staffsName: 'test20200305',
        staffsEnname: 'test20200305',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: '6',
        suborganizationName: '行銷設計部',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'test321',
        staffsName: 'test4人事3',
        staffsEnname: 'test4Personel3',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'test654',
        staffsName: 'test4人事2',
        staffsEnname: 'test4Personel2',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'test987',
        staffsName: 'test4人事1',
        staffsEnname: 'test4Personel1',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04172',
        staffsName: '舒潔',
        staffsEnname: 'clean',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04181',
        staffsName: '小明',
        staffsEnname: 'Ming',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04182',
        staffsName: '小明',
        staffsEnname: 'Ming',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04183',
        staffsName: '小明',
        staffsEnname: 'Ming',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04184',
        staffsName: '小明',
        staffsEnname: 'Ming',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04185',
        staffsName: '大明',
        staffsEnname: 'Big Ming',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04186',
        staffsName: '小王',
        staffsEnname: 'Wang Wang',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04187',
        staffsName: '大明',
        staffsEnname: 'Big Ming',
        organizationNo: '6',
        organizationName: '行銷設計部',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04191',
        staffsName: 'THINK',
        staffsEnname: 'Wang Wang',
        organizationNo: '3',
        organizationName: '營運管理處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04192',
        staffsName: 'THINK',
        staffsEnname: 'Wang Wang',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04193',
        staffsName: 'THINK',
        staffsEnname: 'Wang Wang',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04194',
        staffsName: 'THINK',
        staffsEnname: 'Wang Wang',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04195',
        staffsName: 'POWER',
        staffsEnname: 'Wang Wang',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04196',
        staffsName: 'POWER THINK',
        staffsEnname: 'Wang Wang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04197',
        staffsName: 'YES',
        staffsEnname: 'Wang Wang',
        organizationNo: '7',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04198',
        staffsName: '池紹宇_昕',
        staffsEnname: 'Shaoyu.chih',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: '7',
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI04199',
        staffsName: 'TWTW',
        staffsEnname: 'Wang Wang',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: '3',
        suborganizationName: '營運管理處',
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI2018214',
        staffsName: '邱誌寬_昕',
        staffsEnname: 'zhikuan.chiu',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI2018215',
        staffsName: '李鈞祐',
        staffsEnname: 'sakin',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI2020394',
        staffsName: 'test0',
        staffsEnname: 'test0',
        organizationNo: null,
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPI2020745',
        staffsName: '陳俐君',
        staffsEnname: 'Sharon Chen',
        organizationNo: '2',
        organizationName: '總處',
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      },
      {
        staffsNo: 'TPITEST001',
        staffsName: '果核滲透測試用',
        staffsEnname: 'digitest81',
        organizationNo: '4',
        organizationName: null,
        suborganizationNo: null,
        suborganizationName: null,
        flag: 'Y',
        roleData: [{ roleNo: '99', roleName: '一般用戶' }]
      }
    ]
  })
})

router.get('/api/Staffs/GetOne/:staffsNo', function (req, res) {
  const data = {
    staffsNo: req.params.staffsNo,
    staffsName: faker.name.firstName(),
    staffsEnname: faker.name.firstName(),
    staffsEmail: faker.internet.email(),
    flag: faker.random.arrayElement(['Y', 'N']),
    roleData: [
      ...genDatas(faker.random.number({ min: 0, max: 3 }), (index) => {
        return {
          roleNo: `R${padStartWithZero(index + 1, 6)}`,
          roleName: `R${padStartWithZero(index + 1, 6)}-Name`
        }
      }),
      {
        roleNo: 'A00003',
        roleName: '一般用戶'
      }
    ],
    orgData: genDatas(faker.random.number({ min: 1, max: 3 }), (index) => {
      const createDate = faker.date.past()

      return {
        organizationNo: faker.random.number({ min: 0, max: 3 }),
        organizationName: faker.random.words(faker.random.number({ min: 1, max: 3 })),
        suborganizationNo: faker.random.number({ min: 0, max: 3 }),
        suborganizationName: faker.random.words(faker.random.number({ min: 1, max: 3 })),
        throrganizationNo: faker.random.number({ min: 0, max: 3 }),
        throrganizationName: faker.random.words(faker.random.number({ min: 1, max: 3 })),
        createDate: convertDateToFormatString(createDate)
      }
    })
  }
  res.json({
    success: true,
    message: '成功',
    total: 1,
    data
  })
})

router.post('/api/Staffs/EditStatus', function (req, res) {
  const reqData = req.body
  const { staffsNo, flag } = reqData

  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: {
      staffsNo: staffsNo,
      flag: flag
    }
  })
})

router.post('/api/Role/DeleteMember', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: {}
  })
})

router.post('/api/Staffs/AddOrganization', function (req, res) {
  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: {}
  })
})

router.get('/api/Utility/Organization/:type', function (req, res) {
  let returnData = []
  if (req.query.type === 1) {
    returnData = [
      {
        lv1No: '0100',
        lv1Name: faker.random.words(faker.random.number({ min: 1, max: 3 })),
        lv1Content: [
          {
            lv2No: '0001',
            lv2Name: faker.random.words(faker.random.number({ min: 1, max: 3 })),
            lv2Content: [
              {
                lv3No: '1001',
                lv3Name: faker.random.words(faker.random.number({ min: 1, max: 3 }))
              },
              {
                lv3No: '1002',
                lv3Name: faker.random.words(faker.random.number({ min: 1, max: 3 }))
              }
            ]
          }
        ]
      }
    ]
  }
  if (req.query.type === 2) {
    returnData = [
      {
        lv1No: '0100',
        lv1Name: '昕力資訊',
        lv1Content: [
          {
            lv2No: '0001',
            lv2Name: '三處',
            lv2Content: [
              {
                lv3No: '1001',
                lv3Name: '空間資訊組',
                userArray: [
                  {
                    staffsNo: '01753',
                    staffsName: '子彥韓',
                    staffsEnname: 'jasonhan'
                  },
                  {
                    staffsNo: '01754',
                    staffsName: '小毅',
                    staffsEnname: 'russell'
                  }
                ]
              },
              {
                lv3No: '1002',
                lv3Name: '空間組',
                userArray: [
                  {
                    staffsNo: '01853',
                    staffsName: '小明',
                    staffsEnname: 'Ming'
                  },
                  {
                    staffsNo: '01854',
                    staffsName: '小狗',
                    staffsEnname: 'Dog'
                  }
                ]
              },
              {
                lv3No: '1003',
                lv3Name: '資訊組',
                userArray: [
                  {
                    staffsNo: '01856',
                    staffsName: '小日',
                    staffsEnname: 'Sun'
                  },
                  {
                    staffsNo: '01858',
                    staffsName: '小月',
                    staffsEnname: 'Moon'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

  res.json({
    success: true,
    message: '成功',
    total: 0,
    data: returnData
  })
})
module.exports = router
