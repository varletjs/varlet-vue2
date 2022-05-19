<template>
  <div
    class="var-select var--box"
    :class="[formDisabled || disabled ? 'var-select--disabled' : null]"
    @click="handleClick"
  >
    <div
      class="var-select__controller"
      :class="[
        isFocus ? 'var-select--focus' : null,
        errorMessage ? 'var-select--error' : null,
        formDisabled || disabled ? 'var-select--disabled' : null,
      ]"
      :style="{
        color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
      }"
    >
      <div class="var-select__icon" :class="[!hint ? 'var-select--non-hint' : null]">
        <slot name="prepend-icon" />
      </div>

      <var-menu
        class="var-select__menu"
        var-select-cover
        :offset-y="localOffsetY"
        :show.sync="isFocus"
        @close="handleBlur"
      >
        <div
          class="var-select__wrap"
          :class="[!hint ? 'var-select--non-hint' : null]"
          ref="wrapEl"
          @click="handleFocus"
        >
          <div
            class="var-select__select"
            :class="[
              errorMessage ? 'var-select--error' : null,
              formDisabled || disabled ? 'var-select--disabled' : null,
            ]"
            :style="{
              textAlign,
              color: textColor,
            }"
          >
            <div v-if="multiple">
              <div class="var-select__chips" v-if="chip">
                <var-chip
                  class="var-select__chip"
                  var-select-cover
                  closable
                  size="small"
                  :type="errorMessage ? 'danger' : undefined"
                  v-for="l in labels"
                  :key="l"
                  @click.stop
                  @close="() => handleClose(l)"
                >
                  {{ l }}
                </var-chip>
              </div>
              <div class="var-select__values" v-else>
                {{ labels.join(separator) }}
              </div>
            </div>

            <span v-else>{{ label }}</span>

            <var-icon
              class="var-select__arrow"
              var-select-cover
              name="menu-down"
              :transition="300"
              :class="[isFocus ? 'var-select--arrow-rotate' : null]"
            />
          </div>
          <label
            class="var-select__placeholder var--ellipsis"
            :class="[
              isFocus ? 'var-select--focus' : null,
              errorMessage ? 'var-select--error' : null,
              formDisabled || disabled ? 'var-select--disabled' : null,
              computePlaceholderState(),
              !hint ? 'var-select--placeholder-non-hint' : null,
            ]"
            :style="{
              color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
            }"
          >
            {{ placeholder }}
          </label>
        </div>

        <template #menu>
          <div class="var-select__scroller">
            <slot />
          </div>
        </template>
      </var-menu>

      <div class="var-select__icon" :class="[!hint ? 'var-select--non-hint' : null]">
        <slot name="append-icon">
          <var-icon
            class="var-select__clear-icon"
            name="close-circle"
            size="14px"
            v-if="clearable"
            @click="handleClear"
          />
        </slot>
      </div>
    </div>

    <div
      class="var-select__line"
      :class="[
        formDisabled || disabled ? 'var-select--line-disabled' : null,
        errorMessage ? 'var-select--line-error' : null,
      ]"
      :style="{ background: !errorMessage ? blurColor : undefined }"
      v-if="line"
    >
      <div
        class="var-select__dot"
        :class="[
          isFocus ? 'var-select--spread' : null,
          formDisabled || disabled ? 'var-select--line-disabled' : null,
          errorMessage ? 'var-select--line-error' : null,
        ]"
        :style="{ background: !errorMessage ? focusColor : undefined }"
      ></div>
    </div>

    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script>
import VarIcon from '../icon'
import VarMenu from '../menu'
import VarChip from '../chip'
import VarFormDetails from '../form-details'
import { defineComponent } from '../utils/create'
import { isArray, isEmpty } from '../utils/shared'
import { props } from './props'
import { toPxNum } from '../utils/elements'
import { ValidationMixin } from '../utils/mixins/validation'
import { createParentMixin, createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarSelect',

  components: {
    VarIcon,
    VarMenu,
    VarChip,
    VarFormDetails,
  },

  mixins: [
    ValidationMixin,
    createParentMixin('select', { childrenKey: 'options' }),
    createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formItems' }),
  ],

  props,

  data: () => ({
    isFocus: false,
    label: '',
    labels: [],
    wrapWidth: '0px',
    localOffsetY: 0,
  }),

  computed: {
    formReadonly() {
      return this.form?.readonly
    },

    formDisabled() {
      return this.form?.disabled
    },
  },

  watch: {
    value() {
      this.syncOptions()
    },

    multiple(multiple) {
      if (multiple && !isArray(this.value)) {
        throw Error('The value must be an array when multiple is true')
      }
    },
  },

  methods: {
    // expose
    focus() {
      this.wrapWidth = this.getWrapWidth()
      this.localOffsetY = this.getOffsetY() + toPxNum(this.offsetY)
      this.isFocus = true
    },

    // expose
    blur() {
      this.isFocus = false
    },

    // expose
    validate() {
      this._validate(this.rules, this.value)
    },

    // expose
    reset() {
      const { onInput } = this.getListeners()
      onInput?.(this.multiple ? [] : undefined)
      this.resetValidation()
    },

    computeLabel() {
      const { multiple, value } = this

      if (multiple) {
        const rawModelValue = value
        this.labels = rawModelValue.map(this.findLabel)
      }
      if (!multiple && !isEmpty(value)) {
        this.label = this.findLabel(value)
      }
      if (!multiple && isEmpty(value)) {
        this.label = ''
      }
    },

    findValueOrLabel({ value, label }) {
      if (value != null) {
        return value
      }

      return label
    },

    findLabel(value) {
      const { options } = this
      let option = options.find((option) => option.value === value)

      if (!option) {
        option = options.find((option) => option.label === value)
      }

      return option.label
    },

    computePlaceholderState() {
      const { hint, value, isFocus } = this

      if (!hint && !isEmpty(value)) {
        return 'var-select--placeholder-hidden'
      }
      if (hint && (!isEmpty(value) || isFocus)) {
        return 'var-select--placeholder-hint'
      }
    },

    getWrapWidth() {
      const { wrapEl } = this.$refs
      return (wrapEl && window.getComputedStyle(wrapEl).width) || '0px'
    },

    getOffsetY() {
      const { wrapEl } = this.$refs
      const paddingTop = (wrapEl && window.getComputedStyle(wrapEl).paddingTop) || '0px'
      return toPxNum(paddingTop) * 1.5
    },

    handleFocus() {
      const { disabled, readonly, formReadonly, formDisabled, getWrapWidth, getOffsetY } = this
      const { onFocus } = this.getListeners()

      if (formDisabled || formReadonly || disabled || readonly) {
        return
      }

      this.wrapWidth = getWrapWidth()
      this.localOffsetY = getOffsetY() + toPxNum(this.offsetY)

      this.isFocus = true

      onFocus?.()
      this.validateWithTrigger('onFocus')
    },

    handleBlur() {
      const { onBlur } = this.getListeners()
      const { disabled, readonly, formReadonly, formDisabled } = this

      if (formDisabled || formReadonly || disabled || readonly) {
        return
      }

      onBlur?.()
      this.validateWithTrigger('onBlur')
    },

    onSelect(option) {
      const { onChange, onInput } = this.getListeners()
      const { disabled, readonly, multiple, options } = this

      if (this.formDisabled || this.formReadonly || disabled || readonly) {
        return
      }

      const selectedValue = multiple
        ? options.filter(({ selected }) => selected).map(this.findValueOrLabel)
        : this.findValueOrLabel(option)

      onInput?.(selectedValue)
      onChange?.(selectedValue)
      this.validateWithTrigger('onChange')

      !multiple && (this.isFocus = false)
    },

    handleClear() {
      const { onClear, onInput } = this.getListeners()
      const { disabled, readonly, multiple, clearable, formDisabled, formReadonly } = this

      if (formDisabled || formReadonly || disabled || readonly || !clearable) {
        return
      }

      const changedModelValue = multiple ? [] : undefined

      onInput?.(changedModelValue)
      onClear?.(changedModelValue)
      this.validateWithTrigger('onClear')
    },

    handleClick(e) {
      const { disabled, formDisabled } = this
      const { onClick } = this.getListeners()

      if (formDisabled || disabled) {
        return
      }

      onClick?.(e)
      this.validateWithTrigger('onClick')
    },

    async validateWithTrigger(trigger) {
      await this.$nextTick()
      const { validateTrigger, rules, value } = this
      this._validateWithTrigger(validateTrigger, trigger, rules, value)
    },

    handleClose(text) {
      const { onClose, onInput } = this.getListeners()
      const { disabled, readonly, value, formDisabled, formReadonly, options } = this

      if (formDisabled || formReadonly || disabled || readonly) {
        return
      }

      const rawModelValue = value
      const option = options.find(({ label }) => label === text)
      const currentModelValue = rawModelValue.filter((value) => value !== (option.value ?? option.label))

      onInput?.(currentModelValue)
      onClose?.(currentModelValue)
      this.validateWithTrigger('onClose')
    },

    syncOptions() {
      const { multiple, value, findValueOrLabel, computeLabel, options } = this

      if (multiple) {
        const rawModelValue = value
        options.forEach((option) => option.sync(rawModelValue.includes(findValueOrLabel(option))))
      } else {
        options.forEach((option) => option.sync(value === findValueOrLabel(option)))
      }

      computeLabel()
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import '../menu/menu';
@import '../form-details/formDetails';
@import '../chip/chip';
@import './select';
</style>
