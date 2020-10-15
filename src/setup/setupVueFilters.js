import Vue from 'vue'

Vue.filter('yyyymmddToDateFormat', function (value, separate = '/') {
  if (value && value.length === 8) {
    return `${value.substring(0, 4)}${separate}${value.substring(4, 6)}${separate}${value.substring(6, 8)}`
  } else {
    return value
  }
})
