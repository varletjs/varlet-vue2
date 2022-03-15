<template>
  <var-swipe
    class="var-tabs-items"
    ref="swipe"
    :loop="loop"
    :touchable="canSwipe"
    :indicator="false"
    @change="handleSwipeChange"
  >
    <slot />
  </var-swipe>
</template>

<script>
import VarSwipe from '../swipe'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { createParentMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarTabsItems',

  components: { VarSwipe },

  mixins: [createParentMixin('tabsItems', { childrenKey: 'tabItemList' })],

  props,

  watch: {
    active(newValue) {
      this.handleActiveChange(newValue)
    },

    tabItemList() {
      this.handleActiveChange(this.active)
    },
  },

  methods: {
    matchName(active) {
      return this.tabItemList.find(({ name }) => active === name)
    },

    matchIndex(active) {
      return this.tabItemList.find(({ index }) => active === index)
    },

    matchActive(active) {
      return this.matchName(active) || this.matchIndex(active)
    },

    handleActiveChange(newValue) {
      const newActiveTabItemProvider = this.matchActive(newValue)
      if (!newActiveTabItemProvider) {
        return
      }

      this.tabItemList.forEach(({ setCurrent }) => setCurrent(false))
      newActiveTabItemProvider.setCurrent(true)
      this.$refs.swipe?.to(newActiveTabItemProvider.index)
    },

    handleSwipeChange(currentIndex) {
      const tabItem = this.tabItemList.find(({ index }) => index === currentIndex)
      const active = tabItem.name ?? tabItem.index

      this.getListeners()['onUpdate:active']?.(active)
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../swipe/swipe';
</style>
