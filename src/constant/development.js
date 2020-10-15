// 所有常數設定
// production 載入此設定為基礎，再進行覆寫
export default {
  apiUrl: 'http://localhost:9998',
  mode: 'development',
  timeout: 30 * 1000,
  timeoutStatusCodes: [401, 403],
  adminAuthPageId: 'repair002',
  adminAuthFunctionId: 'view',
  adminAuthIsActive: 'Y',
  // 分頁
  countOfPage: 20,
  clientId: '939201995308-qa4ab9i2d7c4tfgeuvpvvfnk58adrrl3.apps.googleusercontent.com'
}
