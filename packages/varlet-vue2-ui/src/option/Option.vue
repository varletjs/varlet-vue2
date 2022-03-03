<template>
  <div
    class="var-option var--box"
    :class="[optionSelected ? 'var-option--selected-color' : null]"
    :style="{
      width: wrapWidth,
      color: optionSelected ? focusColor : undefined,
    }"
    v-ripple
    @click="handleClick"
  >
    <div
      class="var-option__cover"
      :class="[optionSelected ? 'var-option--selected-background' : null]"
      :style="{
        background: optionSelected ? focusColor : undefined,
      }"
    ></div>
    <var-checkbox
      ref="checkbox"
      :checked-color="focusColor"
      v-if="multiple"
      v-model="optionSelected"
      @click.stop
      @change="handleSelect"
    />

    <div class="var-option__text var--ellipsis">
      <slot>
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<script>
import VarCheckbox from '../checkbox'
import Ripple from '../ripple'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarOption',

  directives: { Ripple },

  components: {
    VarCheckbox,
  },

  mixins: [createChildrenMixin('select', { childrenKey: 'options' })],

  props,

  data: () => ({
    optionSelected: false,
  }),

  computed: {
    selected() {
      return this.optionSelected
    },

    wrapWidth() {
      return this.select.wrapWidth
    },

    multiple() {
      return this.select.multiple
    },

    focusColor() {
      return this.select.focusColor
    },
  },

  watch: {
    label: {
      handler() {
        this.checkProps()
      },
      immediate: true,
    },

    value: {
      handler() {
        this.checkProps()
      },
      immediate: true,
    },
  },

  methods: {
    checkProps() {
      if (this.label == null && this.value == null) {
        throw Error("Props label and value can't both be undefined\n")
      }
    },

    handleClick() {
      const { onSelect } = this.select
      this.optionSelected = !this.optionSelected

      const { label, value } = this
      onSelect?.({ label, value })
    },

    handleSelect() {
      const { onSelect } = this.select.getListeners()
      const { label, value } = this
      onSelect?.({ label, value })
    },

    sync(checked) {
      this.optionSelected = checked
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../checkbox/checkbox';
@import '../select/select';
@import './option';
</style>
