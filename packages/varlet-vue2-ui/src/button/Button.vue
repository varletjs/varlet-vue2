<template>
  <button
    v-ripple="{ disabled: disabled || !ripple }"
    class="var-button var--box"
    :class="[
      `var-button--${size}`,
      block ? 'var--flex var-button--block' : 'var--inline-flex',
      disabled ? 'var-button--disabled' : null,
      text ? `var-button--text-${type}` : `var-button--${type}`,
      text ? 'var-button--text' : 'var-elevation--2',
      text && disabled ? 'var-button--text-disabled' : null,
      round ? 'var-button--round' : null,
      outline ? 'var-button--outline' : null,
    ]"
    :style="{
      color: textColor,
      background: color,
    }"
    :disabled="disabled"
    @click="handleClick"
    @touchstart="handleTouchstart"
  >
    <var-loading
      class="var-button__loading"
      var-button-cover
      :type="loadingType"
      :size="loadingSize"
      :radius="loadingRadius"
      v-if="loading || pending"
    />
    <div class="var-button__content" :class="[loading || pending ? 'var-button--hidden' : null]">
      <slot />
    </div>
  </button>
</template>

<script>
import Ripple from '../ripple'
import VarLoading from '../loading'
import { defineComponent } from '../utils/create'
import { props } from './props'

export default defineComponent({
  name: 'VarButton',

  components: {
    VarLoading,
  },

  directives: { Ripple },

  props,

  data: () => ({
    pending: false,
  }),

  methods: {
    attemptAutoLoading(result) {
      if (this.autoLoading) {
        this.pending = true
        Promise.resolve(result).finally(() => {
          this.pending = false
        })
      }
    },

    handleClick(e) {
      const { loading, disabled, pending } = this
      const { onClick } = this.getListeners()

      if (!onClick || loading || disabled || pending) {
        return
      }

      this.attemptAutoLoading(onClick(e))
    },

    handleTouchstart(e) {
      const { loading, disabled, pending } = this
      const { onTouchstart } = this.getListeners()

      if (!onTouchstart || loading || disabled || pending) {
        return
      }

      this.attemptAutoLoading(onTouchstart(e))
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import '../loading/loading';
@import './button';
</style>
