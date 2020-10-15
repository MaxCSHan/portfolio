import Vue from 'vue'
import GAuth from 'vue-google-oauth2'
import constant from '@/constant'

Vue.use(GAuth, {
  clientId: constant.clientId, scope: 'email', prompt: 'consent', fetch_basic_profile: false
})
