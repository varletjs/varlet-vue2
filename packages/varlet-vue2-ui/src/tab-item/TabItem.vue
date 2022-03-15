<template>
  <var-swipe-item class="var-tab-item" var-tab-item-cover :class="[!current && 'var-tab-item--inactive']">
    <slot v-if="initSlot" />
  </var-swipe-item>
</template>

<script>
import VarSwipeItem from '../swipe-item'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarTabItem',

  mixins: [createChildrenMixin('tabsItems', { parentKey: 'tabsItems', childrenKey: 'tabItemList' })],

  components: {
    VarSwipeItem,
  },

  props,

  data: () => ({
    current: false,
    initSlot: false,
  }),

  methods: {
    setCurrent(value) {
      if (!this.initSlot && value) {
        this.initSlot = true
      }

      this.current = value
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../swipe-item/swipeItem';
@import './tabItem';
</style>
