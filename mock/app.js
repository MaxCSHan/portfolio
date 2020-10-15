const express = require('express')
const app = express()

const logger = require('morgan')
const bodyParser = require('body-parser')

const index = require('./routes')
const apiAccount = require('./routes/apiAccount')
const apiCategory = require('./routes/apiCategory')
const apiCase = require('./routes/apiCase')
const apiItem = require('./routes/apiItem')
const apiLocation = require('./routes/apiLocation')
const apiMessage = require('./routes/apiMessage')
const apiRole = require('./routes/apiRole')
const apiStaffs = require('./routes/apiStaffs')
const apiSetup = require('./routes/apiSetup')
const apiUtility = require('./routes/apiUtility')
// CORS All Request
const allowCrossDomain = (req, res, next) => {
  // let allowedOrigins = ['http://localhost:8081', 'http://127.0.0.1:8081']
  // let origin = req.headers.origin
  // if (allowedOrigins.includes(origin)) {
  //   res.header('Access-Control-Allow-Origin', origin)
  // }
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-XSRF-TOKEN, True-Client-IP'
  )
  next()
}

app.use(
  logger(
    ':date[iso] => :method :url :status :res[content-length] - :response-time ms',
    {
      skip: function (req, res) {
        return req.method.toUpperCase() === 'OPTIONS'
      }
    }
  )
)
app.use(bodyParser.json({ limit: 1024 * 1024 * 5, type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(allowCrossDomain)

app.use('/', index)
app.use('/', apiAccount)
app.use('/', apiCategory)
app.use('/', apiCase)
app.use('/', apiItem)
app.use('/', apiLocation)
app.use('/', apiMessage)
app.use('/', apiRole)
app.use('/', apiStaffs)
app.use('/', apiSetup)
app.use('/', apiUtility)

// 使用nodejs自带的http
const http = require('http')

// 创建http与HTTPS服务器
const httpServer = http.createServer(app)

// 可以分别设置http、https的访问端口号
const PORT = 9998

// 创建http服务器
if (process.env.PORT) {
  app.listen(process.env.PORT)
} else {
  httpServer.listen(PORT, function () {
    console.log('HTTP Server is running on: http://localhost:%s', PORT)
  })
}
