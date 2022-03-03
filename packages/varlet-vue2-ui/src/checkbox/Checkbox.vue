<template>
  <div class="var-checkbox__wrap" @click="handleClick">
    <div class="var-checkbox">
      <div
        class="var-checkbox__action"
        :class="[
          checked ? 'var-checkbox--checked' : 'var-checkbox--unchecked',
          errorMessage || checkboxGroupErrorMessage ? 'var-checkbox--error' : null,
          formDisabled || disabled ? 'var-checkbox--disabled' : null,
        ]"
        :style="{ color: checked ? checkedColor : uncheckedColor }"
        v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
      >
        <slot name="checked-icon" v-if="checked">
          <var-icon
            class="var-checkbox__icon"
            name="checkbox-marked"
            :class="[withAnimation ? 'var-checkbox--with-animation' : null]"
            :size="iconSize"
            var-checkbox-cover
          />
        </slot>
        <slot name="unchecked-icon" v-if="!checked">
          <var-icon
            class="var-checkbox__icon"
            name="checkbox-blank-outline"
            :class="[withAnimation ? 'var-checkbox--with-animation' : null]"
            :size="iconSize"
            var-checkbox-cover
          />
        </slot>
      </div>

      <div
        class="var-checkbox__text"
        :class="[
          errorMessage || checkboxGroupErrorMessage ? 'var-checkbox--error' : null,
          formDisabled || disabled ? 'var-checkbox--disabled' : null,
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
import { defineComponent } from '../utils/create'
import { props } from './props'
import { ValidationMixin } from '../utils/mixins/validation'
import { createChildrenMixin } from '../utils/mixins/relation'
import { doubleRaf } from '../utils/elements'

export default defineComponent({
  name: 'VarCheckbox',

  mixins: [
    ValidationMixin,
    createChildrenMixin('checkboxGroup', { childrenKey: 'checkboxes' }),
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

    checkboxGroupErrorMessage() {
      return this.checkboxGroup?.checkboxGroupErrorMessage
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
      this.getListeners().onInput?.(this.uncheckedValue)
      this.resetValidation()
    },

    // expose
    toggle(changedValue) {
      const { checkedValue, uncheckedValue } = this

      const shouldReverse = ![checkedValue, uncheckedValue].includes(changedValue)
      if (shouldReverse) {
        changedValue = this.checked ? uncheckedValue : checkedValue
      }

      this.change(changedValue)
    },

    // expose
    validate() {
      this._validate(this.rules, this.value)
    },

    validateWithTrigger(trigger) {
      this.$nextTick(() => {
        const { validateTrigger, rules, value } = this
        this._validateWithTrigger(validateTrigger, trigger, rules, value)
      })
    },

    change(changedValue) {
      const { checkedValue, getListeners } = this

      this.localValue = changedValue

      getListeners().onInput?.(this.localValue)
      getListeners().onChange?.(this.localValue)
      this.validateWithTrigger('onChange')

      changedValue === checkedValue
        ? this.checkboxGroup?.onChecked(checkedValue)
        : this.checkboxGroup?.onUnchecked(checkedValue)
    },

    async handleClick(e) {
      const { disabled, readonly, checkedValue, uncheckedValue, getListeners } = this

      if (this.form?.disabled || disabled) {
        return
      }

      getListeners().onClick?.(e)

      if (this.form?.readonly || readonly) {
        return
      }

      this.withAnimation = false
      const maximum = this.checkboxGroup ? this.checkboxGroup.checkedCount >= Number(this.checkboxGroup.max) : false

      if (!this.checked && maximum) {
        return
      }

      this.change(this.checked ? uncheckedValue : checkedValue)
      await doubleRaf()
      this.withAnimation = true
    },

    sync(values) {
      const { checkedValue, uncheckedValue } = this
      this.localValue = values.includes(checkedValue) ? checkedValue : uncheckedValue
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../form-details/formDetails';
@import '../icon/icon';
@import './checkbox';
</style>
