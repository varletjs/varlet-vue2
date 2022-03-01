<template>
  <div class="var-dialog-example">
    <app-type>{{ pack.functionCall }}</app-type>
    <var-button type="primary" block @click="createBasic">{{ pack.basicUsage }}</var-button>
    <var-button type="primary" block @click="modifyTitle">{{ pack.modifyTitle }}</var-button>
    <var-button type="primary" block @click="hideButton">{{ pack.hideButton }}</var-button>
    <var-button type="primary" block @click="createAction">{{ pack.handleUserBehavior }}</var-button>
    <var-button type="primary" block @click="asyncClose">{{ pack.asyncClose }}</var-button>

    <app-type>{{ pack.componentCall }}</app-type>
    <var-button type="warning" block @click="show = true">{{ pack.basicUsage }}</var-button>
    <var-dialog
      :show.sync="show"
      :title="pack.title"
      :message="pack.message"
      @confirm="confirm"
      @cancel="cancel"
      @closed="closed"
    />

    <var-button type="warning" block @click="show1 = true">{{ pack.asyncClose }}</var-button>
    <var-dialog :show.sync="show1" :title="pack.title" :message="pack.message" @before-close="onBeforeClose" />

    <var-button type="warning" block @click="show2 = true">{{ pack.customSlots }}</var-button>
    <var-dialog :show.sync="show2">
      <template #title>
        <var-icon name="information" color="#2979ff" />
      </template>

      <var-cell>{{ pack.message }}</var-cell>
      <var-cell>{{ pack.message }}</var-cell>
      <var-cell>{{ pack.message }}</var-cell>
    </var-dialog>
  </div>
</template>

<script>
import Dialog from '../index'
import VarButton from '../../button'
import VarIcon from '../../icon'
import Snackbar from '../../snackbar'
import VarCell from '../../cell'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'DialogExample',

  components: {
    VarDialog: Dialog.Component,
    VarButton,
    VarIcon,
    VarCell,
    AppType,
  },

  data: () => ({
    show: false,
    show1: false,
    show2: false,
    value: '',
    actions: {
      confirm: () => Snackbar.success('confirm'),
      cancel: () => Snackbar.error('cancel'),
      close: () => Snackbar.info('close'),
    },
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark)
  },

  methods: {
    createBasic() {
      Dialog({
        message: this.pack.message,
      })
    },

    async createAction() {
      this.actions[await Dialog(this.pack.message)]()
    },

    modifyTitle() {
      Dialog({
        title: this.pack.title,
        message: this.pack.message,
      })
    },

    hideButton() {
      Dialog({
        message: this.pack.message,
        confirmButton: false,
        cancelButton: false,
      })
    },

    onBeforeClose(action, done) {
      Snackbar.loading(this.pack.asyncCloseProgress)

      setTimeout(() => {
        this.actions[action]()
        done()
      }, 1000)
    },

    asyncClose() {
      Dialog({
        message: this.pack.message,
        onBeforeClose: this.onBeforeClose,
      })
    },

    confirm() {
      Snackbar.success('confirm')
    },

    cancel() {
      Snackbar.error('cancel')
    },

    closed() {
      Snackbar.info('closed')
    },
  },
}
</script>

<style scoped lang="less">
.var-button {
  margin-top: 10px;
}
</style>
