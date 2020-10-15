import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import constant from '@/constant/development'

axios.defaults.baseURL = constant.apiUrl
axios.defaults.timeout = constant.timeout

Vue.use(VueAxios, axios)
