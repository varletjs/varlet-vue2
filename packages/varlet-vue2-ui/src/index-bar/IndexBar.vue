<template>
  <div class="var-index-bar" ref="barEl">
    <slot />
    <ul
      class="var-index-bar__anchor-list"
      :style="{ zIndex: toNumber(zIndex) + 2, display: hideList ? 'none' : 'block' }"
    >
      <li
        v-for="anchorName in anchorNameList"
        :key="anchorName"
        class="var-index-bar__anchor-item"
        :class="{ 'var-index-bar__anchor-item--active': active === anchorName }"
        :style="{ color: active === anchorName && highlightColor ? highlightColor : '' }"
        @click="anchorClick(anchorName)"
      >
        {{ anchorName }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import { easeInOutCubic, isPlainObject, toNumber } from '../utils/shared'
import {
  doubleRaf,
  getParentScroller,
  getScrollLeft,
  getScrollTop,
  nextTickFrame,
  requestAnimationFrame,
  scrollTo,
} from '../utils/elements'
import { props } from './props'
import { createParentMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarIndexBar',

  mixins: [createParentMixin('indexBar', { childrenKey: 'indexAnchors' })],

  props,

  data: () => ({
    clickedName: '',
    scroller: null,
    anchorNameList: [],
    active: null,
  }),

  async mounted() {
    await doubleRaf()
    this.scroller = getParentScroller(this.$refs.barEl)
    this.scroller.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    this.scroller?.removeEventListener('scroll', this.handleScroll)
  },

  watch: {
    async indexAnchors(newValue) {
      await doubleRaf()
      newValue.forEach(({ name, setOwnTop }) => {
        if (name) this.anchorNameList.push(name)
        setOwnTop()
      })
    },
  },

  methods: {
    // expose
    scrollTo(index) {
      requestAnimationFrame(() => this.anchorClick(index, true))
    },

    toNumber,

    emitEvent(anchor) {
      const anchorName = isPlainObject(anchor) ? anchor.name : anchor
      if (anchorName === this.active || anchorName === undefined) return

      this.active = anchorName
      this.getListeners().onChange?.(anchorName)
    },

    handleScroll() {
      const scrollTop = getScrollTop(this.scroller)
      const scrollHeight = this.scroller === window ? document.body.scrollHeight : this.scroller.scrollHeight

      const { offsetTop } = this.$refs.barEl
      this.indexAnchors.forEach((anchor, index) => {
        const anchorTop = anchor.ownTop
        const top = scrollTop - anchorTop + this.stickyOffsetTop - offsetTop

        const distance =
          index === this.indexAnchors.length - 1 ? scrollHeight : this.indexAnchors[index + 1].ownTop - anchor.ownTop

        if (top >= 0 && top < distance && !this.clickedName) {
          if (index && !this.cssMode) {
            this.indexAnchors[index - 1].setDisabled(true)
          }

          anchor.setDisabled(false)
          this.emitEvent(anchor)
        }
      })
    },

    async anchorClick(anchorName, manualCall) {
      if (manualCall) this.getListeners().onClick?.(anchorName)
      if (anchorName === this.active) return
      const indexAnchor = this.indexAnchors.find(({ name }) => anchorName === name)
      if (!indexAnchor) return
      const top = indexAnchor.ownTop - this.stickyOffsetTop + this.$refs.barEl.offsetTop
      const left = getScrollLeft(this.scroller)
      this.clickedName = anchorName
      this.emitEvent(anchorName)

      await scrollTo(this.scroller, {
        left,
        top,
        animation: easeInOutCubic,
        duration: toNumber(this.duration),
      })

      nextTickFrame(() => {
        this.clickedName = ''
      })
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './indexBar';
</style>
