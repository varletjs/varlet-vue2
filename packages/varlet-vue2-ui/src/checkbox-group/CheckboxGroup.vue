<template>
  <div class="var-checkbox-group__wrap">
    <div class="var-checkbox-group" :class="[`var-checkbox-group--${direction}`]">
      <slot />
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script>
import VarFormDetails from '../form-details'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { uniq } from '../utils/shared'
import { ValidationMixin } from '../utils/mixins/validation'
import { createParentMixin, createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarCheckboxGroup',

  components: { VarFormDetails },

  mixins: [
    ValidationMixin,
    createParentMixin('checkboxGroup', { childrenKey: 'checkboxes' }),
    createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formItems' }),
  ],

  props,

  computed: {
    checkedCount() {
      return this.value.length
    },

    checkboxGroupErrorMessage() {
      return this.errorMessage
    },
  },

  watch: {
    value: {
      handler() {
        this.syncCheckboxes()
      },
      deep: true,
    },

    checkboxes() {
      this.syncCheckboxes()
    },
  },

  methods: {
    // expose
    checkAll() {
      const checkedValues = this.checkboxes.map(({ checkedValue }) => checkedValue)
      this.resetWithAnimation()
      const changedModelValue = uniq(checkedValues)

      this.getListeners().onInput?.(changedModelValue)

      return changedModelValue
    },

    // expose
    inverseAll() {
      const checkedValues = this.checkboxes?.filter(({ checked }) => !checked).map(({ checkedValue }) => checkedValue)
      this.resetWithAnimation()
      const changedModelValue = uniq(checkedValues)

      this.getListeners().onInput?.(changedModelValue)

      return changedModelValue
    },

    // expose
    reset() {
      this.getListeners().onInput?.([])
      this.resetValidation()
    },

    // expose
    validate() {
      this._validate(this.rules, this.value)
    },

    resetWithAnimation() {
      this.checkboxes.forEach((checkbox) => {
        checkbox.withAnimation = false
      })
    },

    validateWithTrigger(trigger) {
      this.$nextTick(() => {
        const { validateTrigger, rules, value } = this
        this._validateWithTrigger(validateTrigger, trigger, rules, value)
      })
    },

    change(changedValue) {
      this.getListeners().onInput?.(changedValue)
      this.getListeners().onChange?.(changedValue)
      this.validateWithTrigger('onChange')
    },

    onChecked(changedValue) {
      const { value } = this

      if (!value.includes(changedValue)) {
        this.change([...value, changedValue])
      }
    },

    onUnchecked(changedValue) {
      if (!this.value.includes(changedValue)) {
        return
      }

      this.change(this.value?.filter((value) => value !== changedValue))
    },

    syncCheckboxes() {
      this.checkboxes?.forEach(({ sync }) => {
        sync(this.value)
      })
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../form-details/formDetails';
@import './checkboxGroup';
</style>
