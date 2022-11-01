<template>
  <div class="var-radio__wrap">
    <div class="var-radio" @click="handleClick" v-bind="$attrs">
      <div
        class="var-radio__action"
        v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
        :class="[
          checked ? 'var-radio--checked' : 'var-radio--unchecked',
          errorMessage || radioGroupErrorMessage ? 'var-radio--error' : null,
          formDisabled || disabled ? 'var-radio--disabled' : null,
        ]"
        :style="{ color: checked ? checkedColor : uncheckedColor }"
      >
        <slot name="checked-icon" v-if="checked">
          <var-icon
            class="var-radio__icon"
            var-radio-cover
            name="radio-marked"
            :class="[withAnimation ? 'var-radio--with-animation' : null]"
            :size="iconSize"
          />
        </slot>
        <slot name="unchecked-icon" v-else>
          <var-icon
            class="var-radio__icon"
            var-radio-cover
            name="radio-blank"
            :class="[withAnimation ? 'var-radio--with-animation' : null]"
            :size="iconSize"
          />
        </slot>
      </div>
      <div
        class="var-radio__text"
        :class="[
          errorMessage || radioGroupErrorMessage ? 'var-radio--error' : null,
          formDisabled || disabled ? 'var-radio--disabled' : null,
        ]"
      >
        <slot />
      </div>
    </div>

    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script>
import VarIcon from '../icon'
import VarFormDetails from '../form-details'
import Ripple from '../ripple'
import { props } from './props'
import { defineComponent } from '../utils/create'
import { ValidationMixin } from '../utils/mixins/validation'
import { createChildrenMixin } from '../utils/mixins/relation'
import { doubleRaf } from '../utils/elements'

export default defineComponent({
  name: 'VarRadio',

  inheritAttrs: false,

  mixins: [
    ValidationMixin,
    createChildrenMixin('radioGroup', { childrenKey: 'radios' }),
    createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formItems' }),
  ],

  directives: { Ripple },

  components: {
    VarIcon,
    VarFormDetails,
  },

  props,

  data: () => ({
    localValue: false,
    withAnimation: false,
  }),

  computed: {
    checked() {
      return this.localValue === this.checkedValue
    },

    radioGroupErrorMessage() {
      return this.radioGroup?.radioGroupErrorMessage
    },

    formReadonly() {
      return this.form?.readonly
    },

    formDisabled() {
      return this.form?.disabled
    },
  },

  watch: {
    value: {
      handler(newValue) {
        this.localValue = newValue
      },
      immediate: true,
    },
  },

  methods: {
    // expose
    reset() {
      const { onInput } = this.getListeners()

      onInput?.(this.uncheckedValue)
      this.resetValidation()
    },

    // expose
    validate() {
      return this._validate(this.rules, this.value)
    },

    // expose
    toggle(changedValue) {
      const { uncheckedValue, checkedValue } = this

      const shouldReverse = ![uncheckedValue, checkedValue].includes(changedValue)
      if (shouldReverse) {
        changedValue = this.checked ? uncheckedValue : checkedValue
      }

      this.change(changedValue)
    },

    validateWithTrigger(trigger) {
      this.$nextTick(() => {
        const { validateTrigger, rules, value } = this
        this._validateWithTrigger(validateTrigger, trigger, rules, value)
      })
    },

    change(changedValue) {
      const { checkedValue } = this
      const { onChange, onInput } = this.getListeners()

      if (this.radioGroup && this.localValue === checkedValue) {
        return
      }

      this.localValue = changedValue
      onInput?.(this.localValue)
      onChange?.(this.localValue)
      this.radioGroup?.onToggle(checkedValue)
      this.validateWithTrigger('onChange')
    },

    async handleClick(e) {
      const { disabled, readonly, uncheckedValue, checkedValue } = this
      const { onClick } = this.getListeners()

      if (this.form?.disabled || disabled) {
        return
      }

      onClick?.(e)

      this.withAnimation = false

      if (this.form?.readonly || readonly) {
        return
      }

      this.change(this.checked ? uncheckedValue : checkedValue)
      await doubleRaf()
      this.withAnimation = true
    },

    sync(v) {
      const { checkedValue, uncheckedValue } = this
      this.localValue = v === checkedValue ? checkedValue : uncheckedValue
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../icon/icon';
@import '../form-details/formDetails';
@import './radio';
</style>
