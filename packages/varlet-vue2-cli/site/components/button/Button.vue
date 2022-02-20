<template>
  <button
    v-ripple="{ disabled: disabled || !ripple }"
    class="var-site-button var--box"
    :class="[
      `var-site-button--${size}`,
      block ? 'var--flex var-site-button--block' : 'var--inline-flex',
      disabled ? 'var-site-button--disabled' : null,
      text ? `var-site-button--text-${type}` : `var-site-button--${type}`,
      text ? 'var-site-button--text' : 'var-elevation--2',
      text && disabled ? 'var-site-button--text-disabled' : null,
      round ? 'var-site-button--round' : null,
      outline ? 'var-site-button--outline' : null,
    ]"
    :style="{
      color: textColor,
      background: color,
    }"
    :disabled="disabled"
    @click="handleClick"
    @touchstart="handleTouchstart"
  >
    <var-site-loading
      class="var-site-button__loading"
      var-site-button-cover
      :type="loadingType"
      :size="loadingSize"
      :radius="loadingRadius"
      v-if="loading || pending"
    />
    <div class="var-site-button__content" :class="[loading || pending ? 'var-site-button--hidden' : null]">
      <slot />
    </div>
  </button>
</template>

<script>
import Ripple from '../ripple'
import VarSiteLoading from '../loading'
import { defineComponent } from '../utils/create'
import { props } from './props'

export default defineComponent({
  name: 'VarSiteButton',

  components: {
    VarSiteLoading,
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
