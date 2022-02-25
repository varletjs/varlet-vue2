<template>
  <div class="var-row__wrap">
    <div
      class="var-row var--box"
      :style="{
        justifyContent: justify,
        alignItems: align,
        margin: average ? `0 -${average}px` : undefined,
      }"
      @click="handleClick"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { props } from './props'
import { defineComponent } from '../utils/create'
import { toPxNum } from '../utils/elements'
import { createParentMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarRow',

  mixins: [createParentMixin('row', { childrenKey: 'cols' })],

  props,

  computed: {
    average() {
      return toPxNum(this.gutter) / 2
    },
  },

  watch: {
    gutter() {
      this.computePadding()
    },

    cols() {
      this.computePadding()
    },
  },

  methods: {
    computePadding() {
      const { average } = this
      this.cols.forEach((col) => {
        col.setPadding({ left: average.value, right: average.value })
      })
    },

    handleClick(e) {
      const { getListeners } = this
      const { onClick } = getListeners()

      if (!onClick) {
        return
      }

      onClick(e)
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './row';
</style>
