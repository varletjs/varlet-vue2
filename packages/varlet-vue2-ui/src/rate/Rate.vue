<template>
  <div class="var-rate__warp">
    <div class="var-rate">
      <div
        :key="val"
        v-for="val in toNumber(count)"
        v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
        :style="getStyle(val)"
        :class="getClass(val)"
        @click="handleClick(val, $event)"
      >
        <var-icon :transition="0" :name="getIconName(val)" :style="{ fontSize: toSizeUnit(size) }" />
      </div>
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script>
import VarIcon from '../icon'
import VarFormDetails from '../form-details'
import Ripple from '../ripple'
import { defineComponent } from '../utils/create'
import { toSizeUnit } from '../utils/elements'
import { toNumber } from '../utils/shared'
import { props } from './props'
import { ValidationMixin } from '../utils/mixins/validation'
import { createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarRate',

  inheritAttrs: false,

  mixins: [ValidationMixin, createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formItems' })],

  components: { VarIcon, VarFormDetails },

  directives: { Ripple },

  props,

  computed: {
    formDisabled() {
      return this.form?.disabled
    },

    formReadonly() {
      return this.form?.readonly
    },
  },

  methods: {
    toNumber,

    toSizeUnit,

    getStyle(val) {
      const { count, size, gap } = this

      return {
        color: this.transformValue(val).color,
        marginRight: val !== toNumber(count) ? toSizeUnit(gap) : 0,
        width: toSizeUnit(size),
        height: toSizeUnit(size),
        borderRadius: '50%',
      }
    },

    getClass(val) {
      const { type, color } = this.transformValue(val)

      return {
        'var-rate__content': true,
        'var-rate--disabled': this.form?.disabled,
        'var-rate--error': this.errorMessage,
        'var-rate--primary': type !== 'empty' && !color,
      }
    },

    getIconName(val) {
      const { type } = this.transformValue(val)
      const { icon, halfIcon, emptyIcon } = this

      return type === 'full' ? icon : type === 'half' ? halfIcon : emptyIcon
    },

    changeValue(score, event) {
      if (this.half) {
        const { offsetWidth } = event.target

        if (event.offsetX <= Math.floor(offsetWidth / 2)) score -= 0.5
      }
      const { onInput } = this.getListeners()
      onInput?.(score)
    },

    validate() {
      this._validate(this.rules, toNumber(this.value))
    },

    validateWithTrigger(trigger) {
      this.$nextTick(() => {
        const { validateTrigger, rules, value } = this
        this._validateWithTrigger(validateTrigger, trigger, rules, value)
      })
    },

    handleClick(score, event) {
      const { readonly, disabled } = this
      const { onChange } = this.getListeners()

      if (readonly || disabled || this.form?.disabled || this.form?.readonly) {
        return
      }

      this.changeValue(score, event)
      onChange?.(score)
      this.validateWithTrigger('onChange')
    },

    reset() {
      this.getListeners().onInput?.(0)
      this.resetValidation()
    },

    transformValue(index) {
      const { value, disabled, disabledColor, color, half, emptyColor } = this
      let iconColor

      if (disabled || this.form?.disabled) iconColor = disabledColor
      else if (color) iconColor = color

      if (index <= toNumber(value)) {
        return { type: 'full', score: index, color: iconColor }
      }

      if (half && index <= toNumber(value) + 0.5) {
        return { type: 'half', score: index, color: iconColor }
      }

      return { type: 'empty', score: index, color: disabled || this.form?.disabled ? disabledColor : emptyColor }
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../icon/icon';
@import '../form-details/formDetails';
@import './rate';
</style>
