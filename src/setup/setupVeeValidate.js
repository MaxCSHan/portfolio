import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import tw from 'vee-validate/dist/locale/zh_TW.json'

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

localize({
  'zh-TW': {
    messages: {
      ...tw.messages,
      required: '{_field_} is required.',
      differentWithTarget: '{target} is not same with {_field_}'
    }
  }
})
extend('dateFormatFunc', value => {
  const dateFormat = /^(\d{4})-(\d{2})-(\d{2})$/
  if (dateFormat.test(value)) {
    // true，是yyyy-MM-dd格式
    return true
  } else {
    // false,不是yyyy-MM-dd格式
    return false
  }
}
)

localize('zh-TW')

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
