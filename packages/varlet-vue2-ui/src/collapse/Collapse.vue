<template>
  <div class="var-collapse">
    <slot />
  </div>
</template>

<script>
import { defineComponent, nextTick } from '../utils/create'
import { props } from './props'
import { isArray } from '../utils/shared'
import { createParentMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarCollapse',

  mixins: [createParentMixin('collapse', { childrenKey: 'collapseItems' })],

  props,

  data: () => ({}),

  computed: {
    active() {
      return this.value
    },
  },

  watch: {
    collapseItems() {
      nextTick().then(this.resize())
    },

    value() {
      nextTick().then(this.resize())
    },
  },

  methods: {
    checkValue() {
      if (!this.accordion && !isArray(this.value)) {
        console.error('[Varlet] Collapse: type of prop "value" should be an Array')
        return false
      }

      if (this.accordion && isArray(this.value)) {
        console.error('[Varlet] Collapse: type of prop "value" should be a String or Number')
        return false
      }

      return true
    },

    getValue(value, isExpand) {
      if (!this.checkValue()) return null
      if (isExpand) return this.accordion ? value : [...this.value, value]

      return this.accordion ? null : this.value.filter((name) => name !== value)
    },

    updateItem(value, isExpand) {
      const modelValue = this.getValue(value, isExpand)

      this.getListeners().onInput?.(modelValue)
      this.getListeners().onChange?.(modelValue)
    },

    matchName() {
      if (this.accordion) {
        return this.collapseItems.find(({ name }) => this.value === name)
      }

      const filterItem = this.collapseItems.filter(({ name }) => {
        if (name === undefined) return false

        return this.value.includes(name)
      })

      return filterItem.length ? filterItem : undefined
    },

    matchIndex() {
      if (this.accordion) {
        return this.collapseItems.find(({ index, name }) => (name === undefined ? this.value === index : false))
      }
      return this.collapseItems.filter(({ index, name }) => (name === undefined ? this.value.includes(index) : false))
    },

    resize() {
      if (!this.checkValue()) return

      const matchProviders = this.matchName() || this.matchIndex()

      if ((this.accordion && !matchProviders) || (!this.accordion && !matchProviders.length)) {
        this.collapseItems.forEach((provider) => {
          provider.init(this.accordion, false)
        })
        return
      }

      this.collapseItems.forEach((provider) => {
        const isShow = this.accordion ? matchProviders === provider : matchProviders.includes(provider)

        provider.init(this.accordion, isShow)
      })
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';

.var-collapse {
  position: relative;
}
</style>
