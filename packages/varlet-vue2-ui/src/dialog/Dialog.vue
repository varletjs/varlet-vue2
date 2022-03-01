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
    @open="onOpen"
    @close="onClose"
    @closed="onClosed"
    @opened="onOpened"
    @route-change="onRouteChange"
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
      this.getListeners()['onUpdate:show']?.(false)
    },

    handleClickOverlay() {
      const { closeOnClickOverlay, getListeners } = this
      const [onClickOverlay, onBeforeClose] = getListeners()

      onClickOverlay?.()

      if (!closeOnClickOverlay) {
        return
      }

      if (onBeforeClose != null) {
        onBeforeClose('close', this.done)
        return
      }

      getListeners()['onUpdate:show']?.(false)
    },

    confirm() {
      const { onBeforeClose, onConfirm } = this.getListeners()

      onConfirm?.()

      if (onBeforeClose != null) {
        onBeforeClose('confirm', this.done)
        return
      }

      this.getListeners()['onUpdate:show']?.(false)
    },

    cancel() {
      const { onBeforeClose, onCancel } = this.getListeners()

      onCancel?.()

      if (onBeforeClose != null) {
        onBeforeClose('cancel', this.done)
        return
      }

      this.getListeners()['onUpdate:show']?.(false)
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
