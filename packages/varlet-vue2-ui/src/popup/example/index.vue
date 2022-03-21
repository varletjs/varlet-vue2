<template>
  <div class="var-popup-example">
    <app-type>{{ pack.popupPosition }}</app-type>
    <var-button class="mt-10" type="primary" block @click="center = true">{{ pack.centerPopup }}</var-button>
    <var-button class="mt-10" type="primary" block @click="bottom = true">{{ pack.belowPopup }}</var-button>
    <var-button class="mt-10" type="primary" block @click="top = true">{{ pack.abovePopup }}</var-button>
    <var-button class="mt-10" type="primary" block @click="left = true">{{ pack.leftPopup }}</var-button>
    <var-button class="mt-10" type="primary" block @click="right = true">{{ pack.rightPopup }}</var-button>
    <var-popup :show.sync="center">
      <div class="block">{{ pack.text }}</div>
    </var-popup>
    <var-popup position="bottom" :show.sync="bottom">
      <div class="block">{{ pack.text }}</div>
    </var-popup>
    <var-popup position="top" :show.sync="top">
      <div class="block">{{ pack.text }}</div>
    </var-popup>
    <var-popup position="left" :show.sync="left">
      <div class="block">{{ pack.text }}</div>
    </var-popup>
    <var-popup position="right" :show.sync="right">
      <div class="block">{{ pack.text }}</div>
    </var-popup>

    <app-type>{{ pack.overlayStyle }}</app-type>
    <var-button class="mt-10" type="primary" block @click="overlayClass = true">{{ pack.overlayClass }}</var-button>
    <var-popup overlay-class="custom-overlay" :show.sync="overlayClass">
      <div class="block">{{ pack.text }}</div>
    </var-popup>
    <var-button class="mt-10" type="primary" block @click="overlayStyle = true">{{ pack.overlayStyles }}</var-button>
    <var-popup
      :overlay-style="{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }"
      :show.sync="overlayStyle"
    >
      <div class="block">{{ pack.text }}</div>
    </var-popup>

    <app-type>{{ pack.event }}</app-type>
    <var-button class="mt-10" type="primary" block @click="event = true">{{ pack.event }}</var-button>
    <var-popup :show.sync="event" @open="popupOpen" @opened="popupOpened" @close="popupClose" @closed="popupClosed">
      <div class="block">{{ pack.text }}</div>
    </var-popup>
  </div>
</template>

<script>
import VarPopup from '..'
import VarButton from '../../button'
import Snackbar from '../../snackbar'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'
import { pack, use } from './locale'

export default {
  name: 'PopupExample',

  components: {
    VarPopup,
    VarButton,
    AppType,
  },

  data: () => ({
    center: false,
    top: false,
    bottom: false,
    left: false,
    right: false,
    overlayClass: false,
    overlayStyle: false,
    event: false,
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
    popupOpen() {
      Snackbar.info('open')
    },

    popupOpened() {
      Snackbar.success('opened')
    },

    popupClose() {
      Snackbar.warning('close')
    },

    popupClosed() {
      Snackbar.error('closed')
    },
  },
}
</script>

<style>
.custom-overlay {
  background: rgba(0, 0, 0, 0.3);
}
</style>

<style scoped lang="less">
.var-popup-example {
  .mt-10 {
    margin-top: 10px;
  }

  .block {
    padding: 20px 24px;
    width: 250px;
    color: var(--site-config-color-text);
  }
}
</style>
