<template>
  <component
    :is="sticky ? 'var-sticky' : 'transition'"
    :offset-top="sticky ? stickyOffsetTop : null"
    :z-index="sticky ? zIndex : null"
    :disabled="disabled && !cssMode"
    :css-mode="cssMode"
    ref="anchorEl"
  >
    <div class="var-index-anchor" v-bind="$attrs">
      <slot>{{ name }}</slot>
    </div>
  </component>
</template>

<script>
import VarSticky from '../sticky'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarIndexAnchor',

  mixins: [
    createChildrenMixin('indexBar', { indexKey: 'localIndex', parentKey: 'indexBar', childrenKey: 'indexAnchors' }),
  ],

  components: {
    VarSticky,
  },

  inheritAttrs: false,

  props,

  data: () => ({
    ownTop: 0,
    disabled: false,
  }),

  computed: {
    name() {
      return this.index
    },

    active() {
      return this.indexBar.active
    },

    sticky() {
      return this.indexBar.sticky
    },

    cssMode() {
      return this.indexBar.cssMode
    },

    stickyOffsetTop() {
      return this.indexBar.stickyOffsetTop
    },

    zIndex() {
      return this.indexBar.zIndex
    },
  },

  methods: {
    setOwnTop() {
      const {
        $refs: { anchorEl },
      } = this
      if (!anchorEl) return
      this.ownTop = anchorEl.$el ? anchorEl.$el.offsetTop : anchorEl.offsetTop
    },

    setDisabled(value) {
      this.disabled = value
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../sticky/sticky';

.var-index-anchor {
  position: relative;
}
</style>
