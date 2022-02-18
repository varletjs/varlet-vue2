<template>
  <div class="var-radio-group__wrap">
    <div class="var-radio-group" :class="[`var-radio-group--${direction}`]">
      <slot />
    </div>

    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script>
import VarFormDetails from '../form-details'
import { props } from './props'
import { defineComponent } from '../utils/create'
import { ValidationMixin } from '../utils/mixins/validation'
import { createParentMixin, createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarRadioGroup',

  mixins: [
    ValidationMixin,
    createParentMixin('radioGroup', { childrenKey: 'radios' }),
    createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formItems' }),
  ],

  components: { VarFormDetails },

  props,

  computed: {
    radioGroupErrorMessage() {
      return this.errorMessage
    },
  },

  watch: {
    value() {
      this.syncRadios()
    },

    radios() {
      this.syncRadios()
    },
  },

  methods: {
    // expose
    validate() {
      this._validate(this.rules, this.value)
    },

    // expose
    reset() {
      this.getListeners().onInput?.(undefined)
      this.resetValidation()
    },

    validateWithTrigger(trigger) {
      this.$nextTick(() => {
        const { validateTrigger, rules, value } = this
        this._validateWithTrigger(validateTrigger, trigger, rules, value)
      })
    },

    syncRadios() {
      this.radios.forEach(({ sync }) => sync(this.value))
    },

    onToggle(changedValue) {
      const { onInput, onChange } = this.getListeners()

      onInput?.(changedValue)
      onChange?.(changedValue)
      this.validateWithTrigger('onChange')
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../form-details/formDetails';
@import './radioGroup';
</style>
