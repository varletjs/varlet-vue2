<template>
  <var-popup
    class="var-dialog__popup"
    var-dialog-cover
    :show="popupShow"
    :overlay="overlay"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :lock-scroll="lockScroll"
    :close-on-click-overlay="popupCloseOnClickOverlay"
    :teleport="teleport"
    @open="$emit('open')"
    @close="$emit('close')"
    @closed="$emit('closed')"
    @opened="$emit('opened')"
    @route-change="$emit('route-change')"
    @click-overlay="handleClickOverlay"
  >
    <div class="var--box var-dialog" :class="dialogClass" :style="dialogStyle" v-bind="$attrs">
      <div class="var-dialog__title">
        <slot name="title">{{ dt(title, pack.dialogTitle) }}</slot>
      </div>
      <div class="var-dialog__message" :style="{ textAlign: messageAlign }">
        <slot>
          {{ message }}
        </slot>
      </div>
      <div class="var-dialog__actions">
        <var-button
          class="var-dialog__button var-dialog__cancel-button"
          var-dialog-cover
          text
          :text-color="cancelButtonTextColor"
          :color="cancelButtonColor"
          v-if="cancelButton"
          @click="cancel"
        >
          {{ dt(cancelButtonText, pack.dialogCancelButtonText) }}
        </var-button>
        <var-button
          class="var-dialog__button var-dialog__confirm-button"
          var-dialog-cover
          text
          :text-color="confirmButtonTextColor"
          :color="confirmButtonColor"
          v-if="confirmButton"
          @click="confirm"
        >
          {{ dt(confirmButtonText, pack.dialogConfirmButtonText) }}
        </var-button>
      </div>
    </div>
  </var-popup>
</template>

<script>
import VarPopup from '../popup'
import VarButton from '../button'
import { props } from './props'
import { defineComponent } from '../utils/create'
import { dt } from '../utils/shared'
import { pack } from '../locale'

export default defineComponent({
  name: 'VarDialog',

  components: {
    VarPopup,
    VarButton,
  },

  inheritAttrs: false,

  props,

  data: () => ({
    popupShow: false,
    popupCloseOnClickOverlay: false,
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  watch: {
    show: {
      handler(newValue) {
        this.popupShow = newValue
      },
      immediate: true,
    },

    closeOnClickOverlay: {
      handler(newValue) {
        if (this.getListeners().onBeforeClose != null) {
          this.popupCloseOnClickOverlay = false
          return
        }

        this.popupCloseOnClickOverlay = newValue
      },
      immediate: true,
    },
  },

  methods: {
    dt,

    done() {
      this.$emit('update:show', false)
    },

    normalizeBeforeClose() {
      return this.getListeners().onBeforeClose || this.beforeClose
    },

    handleClickOverlay() {
      const { closeOnClickOverlay, normalizeBeforeClose } = this
      const onBeforeClose = normalizeBeforeClose()

      this.$emit('click-overlay')

      if (!closeOnClickOverlay) {
        return
      }

      if (onBeforeClose != null) {
        onBeforeClose('close', this.done)
        return
      }

      this.$emit('update:show', false)
    },

    confirm() {
      const onBeforeClose = this.normalizeBeforeClose()

      this.$emit('confirm')

      if (onBeforeClose != null) {
        onBeforeClose('confirm', this.done)
        return
      }

      this.$emit('update:show', false)
    },

    cancel() {
      const onBeforeClose = this.normalizeBeforeClose()

      this.$emit('cancel')

      if (onBeforeClose != null) {
        onBeforeClose('cancel', this.done)
        return
      }

      this.$emit('update:show', false)
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../popup/popup';
@import '../button/button';
@import './dialog';
</style>
