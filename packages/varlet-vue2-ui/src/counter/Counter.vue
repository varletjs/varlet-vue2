<template>
  <div class="var-counter var--box">
    <div
      class="var-counter__controller var-elevation--2"
      :class="[disabled || formDisabled ? 'var-counter--disabled' : null, errorMessage ? 'var-counter--error' : null]"
      :style="{ background: color ? color : undefined }"
      v-bind="$attrs"
    >
      <var-icon
        class="var-counter__decrement-button"
        var-counter-cover
        name="minus"
        :class="[!decrementButton ? 'var-counter--hidden' : null]"
        :style="{
          width: toSizeUnit(buttonSize),
          height: toSizeUnit(buttonSize),
        }"
        v-ripple="{
          disabled: !ripple || disabled || readonly || disableDecrement || !decrementButton || isMin,
        }"
        @click="decrement"
        @touchstart.native="pressDecrement"
        @touchend.native="releaseDecrement"
        @touchcancel.native="releaseDecrement"
      />
      <input
        class="var-counter__input"
        :style="{
          width: toSizeUnit(inputWidth),
          fontSize: toSizeUnit(inputTextSize),
        }"
        :inputmode="toNumber(decimalLength) === 0 ? 'numeric' : 'decimal'"
        :readonly="readonly || formReadonly"
        :disabled="disabled || formDisabled || disableInput"
        v-model="inputValue"
        @change="handleChange"
      />
      <var-icon
        class="var-counter__increment-button"
        var-counter-cover
        name="plus"
        :class="[!incrementButton ? 'var-counter--hidden' : null]"
        :style="{
          width: toSizeUnit(buttonSize),
          height: toSizeUnit(buttonSize),
        }"
        v-ripple="{
          disabled: !ripple || disabled || readonly || disableIncrement || !incrementButton || isMax,
        }"
        @click="increment"
        @touchstart.native="pressIncrement"
        @touchend.native="releaseIncrement"
        @touchcancel.native="releaseIncrement"
      />
    </div>

    <var-form-details :error-message="errorMessage"></var-form-details>
  </div>
</template>

<script>
import VarIcon from '../icon'
import VarFormDetails from '../form-details'
import Ripple from '../ripple'
import { defineComponent } from '../utils/create'
import { Decimal } from 'decimal.js'
import { props } from './props'
import { toNumber } from '../utils/shared'
import { toSizeUnit } from '../utils/elements'
import { ValidationMixin } from '../utils/mixins/validation'
import { createChildrenMixin } from '../utils/mixins/relation'

const SPEED = 100
const DELAY = 600

export default defineComponent({
  name: 'VarCounter',

  components: {
    VarIcon,
    VarFormDetails,
  },

  directives: { Ripple },

  mixins: [ValidationMixin, createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formItems' })],

  inheritAttrs: false,

  props,

  data: () => ({
    inputValue: '',
    incrementTimer: null,
    decrementTimer: null,
    incrementDelayTimer: null,
    decrementDelayTimer: null,
  }),

  computed: {
    isMax() {
      const { max, value } = this
      return max != null && toNumber(value) >= toNumber(max)
    },

    isMin() {
      const { min, value } = this
      return min != null && toNumber(value) <= toNumber(min)
    },

    formDisabled() {
      return this.form?.disabled
    },

    formReadonly() {
      return this.form?.readonly
    },
  },

  created() {
    this.setNormalizedValue(this.normalizeValue(String(this.value)))
  },

  watch: {
    value(newValue) {
      this.setNormalizedValue(this.normalizeValue(String(newValue)))
      this.getListeners().onChange?.(toNumber(newValue))
    },
  },

  methods: {
    // expose
    reset() {
      const { min, getListeners } = this

      getListeners().onInput?.(min != null ? toNumber(min) : 0)
      this.resetValidation()
    },

    toNumber,

    toSizeUnit,

    validate() {
      this._validate(this.rules, this.value)
    },

    validateWithTrigger(trigger) {
      this.$nextTick(() => {
        const { validateTrigger, rules, value } = this
        this._validateWithTrigger(validateTrigger, trigger, rules, value)
      })
    },

    normalizeValue(value) {
      const { decimalLength, max, min } = this
      let num = toNumber(value)

      if (max != null && num > toNumber(max)) {
        num = toNumber(max)
      }

      if (min != null && num < toNumber(min)) {
        num = toNumber(min)
      }

      value = String(num)

      if (decimalLength != null) {
        value = num.toFixed(toNumber(decimalLength))
      }

      return value
    },

    handleChange(event) {
      const { lazyChange, getListeners, change, validateWithTrigger } = this
      const { value } = event.target
      const normalizedValue = this.normalizeValue(value)

      lazyChange
        ? getListeners().onBeforeChange?.(toNumber(normalizedValue), change)
        : this.setNormalizedValue(normalizedValue)

      validateWithTrigger('onInputChange')
    },

    decrement() {
      const { disabled, readonly, disableDecrement, decrementButton, lazyChange, step, value, getListeners } = this

      const { onDecrement, onBeforeChange } = getListeners()

      if (this.formDisabled || this.formReadonly || disabled || readonly || disableDecrement || !decrementButton) {
        return
      }

      if (this.isMin) {
        return
      }

      const localValue = new Decimal(toNumber(value)).minus(new Decimal(toNumber(step))).toString()
      const normalizedValue = this.normalizeValue(localValue)
      const normalizedValueNum = toNumber(normalizedValue)
      onDecrement?.(normalizedValueNum)

      if (lazyChange) {
        onBeforeChange?.(normalizedValueNum, this.change)
      } else {
        this.setNormalizedValue(normalizedValue)
        this.validateWithTrigger('onDecrement')
      }
    },

    increment() {
      const { disabled, readonly, disableIncrement, incrementButton, lazyChange, step, value, getListeners } = this

      const { onIncrement, onBeforeChange } = getListeners()

      if (this.formDisabled || this.formReadonly || disabled || readonly || disableIncrement || !incrementButton) {
        return
      }

      if (this.isMax) {
        return
      }

      const localValue = new Decimal(toNumber(value)).plus(new Decimal(toNumber(step))).toString()
      const normalizedValue = this.normalizeValue(localValue)
      const normalizedValueNum = toNumber(normalizedValue)

      onIncrement?.(normalizedValueNum)

      if (lazyChange) {
        onBeforeChange?.(normalizedValueNum, this.change)
      } else {
        this.setNormalizedValue(normalizedValue)
        this.validateWithTrigger('onIncrement')
      }
    },

    pressDecrement() {
      const { press, lazyChange } = this

      if (!press || lazyChange) {
        return
      }

      this.decrementDelayTimer = window.setTimeout(() => {
        this.continuedDecrement()
      }, DELAY)
    },

    pressIncrement() {
      const { press, lazyChange } = this

      if (!press || lazyChange) {
        return
      }

      this.incrementDelayTimer = window.setTimeout(() => {
        this.continuedIncrement()
      }, DELAY)
    },

    releaseDecrement() {
      this.decrementTimer && clearTimeout(this.decrementTimer)
      this.decrementDelayTimer && clearTimeout(this.decrementDelayTimer)
    },

    releaseIncrement() {
      this.incrementTimer && clearTimeout(this.incrementTimer)
      this.incrementDelayTimer && clearTimeout(this.incrementDelayTimer)
    },

    continuedIncrement() {
      this.incrementTimer = window.setTimeout(() => {
        this.increment()
        this.continuedIncrement()
      }, SPEED)
    },

    continuedDecrement() {
      this.decrementTimer = window.setTimeout(() => {
        this.decrement()
        this.continuedDecrement()
      }, SPEED)
    },

    setNormalizedValue(normalizedValue) {
      this.inputValue = normalizedValue

      const normalizedValueNum = toNumber(normalizedValue)

      this.getListeners().onInput?.(normalizedValueNum)
    },

    change(value) {
      this.setNormalizedValue(this.normalizeValue(String(value)))
      this.validateWithTrigger('onLazyChange')
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../icon/icon';
@import '../form-details/formDetails';
@import '../ripple/ripple';
@import './counter';
</style>
