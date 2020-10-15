import Vue from 'vue'
import { mapState } from 'vuex'
import AlertBody from '@/components/AlertBody'
import ConfirmBody from '@/components/ConfirmBody'

Vue.mixin({
  computed: {
    ...mapState(['staffData'])
  },
  methods: {
    $_isAuthorization: function (pageId = '', functionId = '', isActive = '') {
      if (pageId && functionId && isActive) {
        const { roleAuth } = this.staffData
        if (roleAuth && roleAuth.length > 0) {
          return roleAuth.some((role) => {
            return (
              role.pageid === pageId &&
              role.functionid === functionId &&
              role.isactive === isActive
            )
          })
        } else {
          return false
        }
      } else {
        return false
      }
    },
    $_alert: function ({ title, content, okEventHandler }) {
      const name = 'AlertModal'
      this.$modal.show(
        AlertBody,
        {
          name,
          title,
          content,
          okEventHandler
        },
        {
          name,
          reset: false,
          adaptive: true,
          height: 'auto',
          scrollable: true,
          clickToClose: false
        }
      )
    },
    $_confirm: function ({
      title,
      content,
      confirmEventHandler,
      cancelEventHandler
    }) {
      const name = 'ConfirmModal'
      this.$modal.show(
        ConfirmBody,
        {
          name,
          title,
          content,
          confirmEventHandler,
          cancelEventHandler
        },
        {
          name,
          reset: false,
          adaptive: true,
          height: 'auto',
          scrollable: true,
          clickToClose: false
        }
      )
    }
  }
})
