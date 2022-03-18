<template>
  <div class="var-input var--box" :class="[disabled ? 'var-input--disabled' : null]" @click="handleClick">
    <div
      class="var-input__controller"
      :class="[
        isFocus ? 'var-input--focus' : null,
        errorMessage ? 'var-input--error' : null,
        formDisabled || disabled ? 'var-input--disabled' : null,
      ]"
      :style="{
        color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
      }"
    >
      <div class="var-input__icon" :class="[!hint ? 'var-input--non-hint' : null]">
        <slot name="prepend-icon" />
      </div>

      <div class="var-input__wrap" :class="[!hint ? 'var-input--non-hint' : null]">
        <input class="var-input__autocomplete" v-if="type === 'password'" />
        <textarea
          class="var-input__input var-input--textarea"
          ref="el"
          autocomplete="new-password"
          :id="id"
          :disabled="formDisabled || disabled || formReadonly || readonly"
          :type="type"
          :value="value"
          :maxlength="maxlength"
          :rows="rows"
          :class="[
            formDisabled || disabled ? 'var-input--disabled' : null,
            errorMessage ? 'var-input--caret-error' : null,
          ]"
          :style="{
            color: textColor,
            caretColor: !errorMessage ? focusColor : null,
            resize: resize ? 'vertical' : 'none',
          }"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange"
          v-if="textarea"
        >
        </textarea>
        <input
          class="var-input__input"
          ref="el"
          autocomplete="new-password"
          :id="id"
          :disabled="formDisabled || disabled || formReadonly || readonly"
          :type="type"
          :value="value"
          :maxlength="maxlength"
          :class="[
            formDisabled || disabled ? 'var-input--disabled' : null,
            errorMessage ? 'var-input--caret-error' : null,
          ]"
          :style="{
            color: textColor,
            caretColor: !errorMessage ? focusColor : null,
          }"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange"
          v-else
        />
        <label
          class="var--ellipsis"
          :class="[
            isFocus ? 'var-input--focus' : null,
            errorMessage ? 'var-input--error' : null,
            textarea ? 'var-input__textarea-placeholder' : 'var-input__placeholder',
            computePlaceholderState(),
            !hint ? 'var-input--placeholder-non-hint' : null,
          ]"
          :style="{
            color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
          }"
          :for="id"
        >
          {{ placeholder }}
        </label>
      </div>

      <div class="var-input__icon" :class="[!hint ? 'var-input--non-hint' : null]">
        <slot name="append-icon">
          <var-icon
            class="var-input__clear-icon"
            var-input-cover
            name="close-circle"
            size="14px"
            v-if="clearable && !isEmpty(value)"
            @click="handleClear"
          />
        </slot>
      </div>
    </div>

    <div
      class="var-input__line"
      :class="[
        formDisabled || disabled ? 'var-input--line-disabled' : null,
        errorMessage ? 'var-input--line-error' : null,
      ]"
      :style="{ background: !errorMessage ? blurColor : undefined }"
      v-if="line"
    >
      <div
        class="var-input__dot"
        :class="[
          isFocus ? 'var-input--spread' : null,
          formDisabled || disabled ? 'var-input--line-disabled' : null,
          errorMessage ? 'var-input--line-error' : null,
        ]"
        :style="{ background: !errorMessage ? focusColor : undefined }"
      ></div>
    </div>

    <var-form-details :error-message="errorMessage" :maxlength-text="maxlengthText" />
  </div>
</template>

<script>
import VarFormDetails from '../form-details'
import VarIcon from '../icon'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { isEmpty } from '../utils/shared'
import { ValidationMixin } from '../utils/mixins/validation'
import { createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarInput',

  mixins: [ValidationMixin, createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formItems' })],

  components: {
    VarIcon,
    VarFormDetails,
  },

  props,

  data() {
    return {
      id: `var-input-${this._uid}`,
      isFocus: false,
    }
  },

  computed: {
    maxlengthText() {
      const { maxlength, value } = this

      if (!maxlength) return ''

      if (this.isEmpty(value)) return `0 / ${maxlength}`

      return `${String(value).length}/${maxlength}`
    },

    formReadonly() {
      return this.form?.readonly
    },

    formDisabled() {
      return this.form?.disabled
    },
  },

  methods: {
    // expose
    reset() {
      this.getListeners().onInput?.('')
      this.resetValidation()
    },

    // expose
    validate() {
      this._validate(this.rules, this.value)
    },

    // expose
    focus() {
      this.$refs.el.focus()
    },

    // expose
    blur() {
      this.$refs.el.blur()
    },

    isEmpty,

    validateWithTrigger(trigger) {
      this.$nextTick(() => {
        const { validateTrigger, rules, value } = this
        this._validateWithTrigger(validateTrigger, trigger, rules, value)
      })
    },

    computePlaceholderState() {
      const { hint, value } = this

      if (!hint && !this.isEmpty(value)) {
        return 'var-input--placeholder-hidden'
      }
      if (hint && (!this.isEmpty(value) || this.isFocus)) {
        return 'var-input--placeholder-hint'
      }
    },

    handleFocus(e) {
      this.isFocus = true

      this.getListeners().onFocus?.(e)
      this.validateWithTrigger('onFocus')
    },

    handleBlur(e) {
      this.isFocus = false

      this.getListeners().onBlur?.(e)
      this.validateWithTrigger('onBlur')
    },

    handleInput(e) {
      const { value } = e.target

      this.getListeners().onInput?.(value, e)
      this.validateWithTrigger('onInput')
    },

    handleChange(e) {
      const { value } = e.target

      this.getListeners().onChange?.(value, e)
      this.validateWithTrigger('onChange')
    },

    handleClear() {
      const { disabled, readonly, clearable, getListeners } = this
      const { onInput, onClear } = getListeners()

      if (this.form?.disabled || this.form?.readonly || disabled || readonly || !clearable) {
        return
      }

      onInput?.('')
      onClear?.('')

      this.validateWithTrigger('onClear')
    },

    handleClick(e) {
      const { disabled, getListeners } = this

      if (this.form?.disabled || disabled) {
        return
      }

      getListeners().onClick?.(e)

      this.validateWithTrigger('onClick')
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import '../form-details/formDetails';
@import './input';
</style>
