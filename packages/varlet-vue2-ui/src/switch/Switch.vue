<template>
  <div class="var-switch">
    <div
      class="var-switch-block"
      :class="[disabled || formDisabled ? 'var-switch__disable' : null]"
      @click="switchActive"
      :style="styleComputed.switch"
    >
      <div
        :style="styleComputed.track"
        class="var-switch__track"
        :class="[
          value === activeValue ? 'var-switch__track-active' : null,
          errorMessage ? 'var-switch__track-error' : null,
        ]"
      ></div>
      <div
        class="var-switch__ripple"
        :style="styleComputed.ripple"
        v-ripple="{
          disabled: !ripple || disabled || loading || formDisabled,
        }"
      >
        <div
          :style="styleComputed.handle"
          class="var-switch__handle var-elevation--2"
          :class="[
            value === activeValue ? 'var-switch__handle-active' : null,
            errorMessage ? 'var-switch__handle-error' : null,
          ]"
        >
          <var-loading v-if="loading" :radius="toNumber(size) / 2 - 2" />
        </div>
      </div>
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import { ValidationMixin } from '../utils/mixins/validation'
import { toNumber } from '../utils/shared'
import { props } from './props'
import VarFormDetails from '../form-details'
import VarLoading from '../loading'
import Ripple from '../ripple'
import { createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarSwitch',

  mixins: [ValidationMixin, createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formItems' })],

  components: {
    VarLoading,
    VarFormDetails,
  },

  directives: { Ripple },

  props,

  computed: {
    formReadonly() {
      return this.form?.readonly
    },

    formDisabled() {
      return this.form?.disabled
    },

    styleComputed() {
      const { size, value, color, closeColor, loadingColor, activeValue } = this
      const sizeNum = this.toNumber(size)
      const switchWidth = sizeNum * 2
      const switchHeight = sizeNum * 1.2

      return {
        handle: {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: value === activeValue ? color || '' : closeColor || '',
          color: loadingColor && loadingColor,
        },
        ripple: {
          left: value === activeValue ? `${sizeNum / 2}px` : `-${sizeNum / 2}px`,
          color: value === activeValue ? color || '' : closeColor || '#999',
          width: `${sizeNum * 2}px`,
          height: `${sizeNum * 2}px`,
        },
        track: {
          height: `${switchHeight * 0.6}px`,
          width: `${switchWidth - 2}px`,
          borderRadius: `${switchWidth / 3}px`,
          filter: value === activeValue || this?.errorMessage ? 'opacity(.6)' : 'brightness(.6)',
          backgroundColor: value === activeValue ? color || '' : closeColor || '',
        },
        switch: {
          height: `${switchHeight}px`,
          width: `${switchWidth}px`,
        },
      }
    },
  },

  methods: {
    // expose
    reset() {
      this.getListeners().onInput?.(this.inactiveValue)
      this.resetValidation()
    },

    // expose
    validate() {
      this._validate(this.rules, this.value)
    },

    toNumber,

    switchActive(e) {
      const { disabled, loading, readonly, value, activeValue, inactiveValue } = this

      this.getListeners().onClick?.(e)
      if (disabled || loading || readonly || this.form?.disabled || this.form?.readonly) return

      const newValue = value === activeValue ? inactiveValue : activeValue
      this.getListeners().onChange?.(newValue)
      this.getListeners().onInput?.(newValue)
      this.validateWithTrigger()
    },

    validateWithTrigger() {
      this.$nextTick(() => {
        const { rules, value } = this
        this._validateWithTrigger(['onChange'], 'onChange', rules, value)
      })
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import '../loading/loading';
@import '../form-details/formDetails';
@import './switch';
</style>
