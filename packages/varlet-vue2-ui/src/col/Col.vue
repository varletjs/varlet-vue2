<template>
  <div
    class="var-col var--box"
    :class="[
      span ? `var-col--span-${span}` : null,
      offset ? `var-col--offset-${offset}` : null,
      ...getSize('xs', xs),
      ...getSize('sm', sm),
      ...getSize('md', md),
      ...getSize('lg', lg),
      ...getSize('xl', xl),
    ]"
    :style="{
      paddingLeft: toSizeUnit(padding.left),
      paddingRight: toSizeUnit(padding.right),
    }"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import { isPlainObject } from '../utils/shared'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'
import { createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarCol',

  mixins: [createChildrenMixin('row', { childrenKey: 'cols' })],

  props,

  data: () => ({
    padding: { left: 0, right: 0 },
    toSizeUnit,
  }),

  watch: {
    span: {
      handler() {
        this.row.computePadding()
      },
      immediate: true,
    },
  },

  methods: {
    handleClick(e) {
      const { getListeners } = this
      const { onClick } = getListeners()

      if (!onClick) {
        return
      }
      onClick(e)
    },

    setPadding(pad) {
      this.padding = pad
    },

    getSize(mode, size) {
      const classes = []

      if (!size) {
        return classes
      }

      if (isPlainObject(size)) {
        const { span, offset } = size
        span && classes.push(`var-col--span-${mode}-${span}`)
        offset && classes.push(`var-col--offset-${mode}-${offset}`)
      } else {
        classes.push(`var-col--span-${mode}-${size}`)
      }

      return classes
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './col';
</style>
