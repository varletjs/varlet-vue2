<template>
  <component :is="sticky ? 'var-sticky' : 'transition'" :offset-top="sticky ? offsetTop : null">
    <div
      class="var-tabs var--box"
      :class="[
        `var-tabs--item-${itemDirection}`,
        `var-tabs--layout-${layoutDirection}-padding`,
        elevation ? `var-elevation--4` : null,
        fixedBottom ? 'var-tabs--fixed-bottom' : null,
      ]"
      :style="{ background: color }"
      v-bind="$attrs"
    >
      <div
        class="var-tabs__tab-wrap"
        ref="scrollerEl"
        :class="[
          scrollable ? `var-tabs--layout-${layoutDirection}-scrollable` : null,
          `var-tabs--layout-${layoutDirection}`,
        ]"
      >
        <slot />

        <div
          class="var-tabs__indicator"
          :class="[`var-tabs--layout-${layoutDirection}-indicator`]"
          :style="{
            width: layoutDirection === 'horizontal' ? indicatorWidth : toSizeUnit(indicatorSize),
            height: layoutDirection === 'horizontal' ? toSizeUnit(indicatorSize) : indicatorHeight,
            transform: layoutDirection === 'horizontal' ? `translateX(${indicatorX})` : `translateY(${indicatorY})`,
            background: indicatorColor || activeColor,
          }"
        ></div>
      </div>
    </div>
  </component>
</template>

<script>
import VarSticky from '../sticky'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { isNumber, linear } from '../utils/shared'
import { toSizeUnit, scrollTo, doubleRaf } from '../utils/elements'
import { createParentMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarTabs',

  components: { VarSticky },

  mixins: [createParentMixin('tabs', { childrenKey: 'tabList' })],

  inheritAttrs: false,

  props,

  data: () => ({
    indicatorWidth: '0px',
    indicatorHeight: '0px',
    indicatorX: '0px',
    indicatorY: '0px',
    scrollable: false,
  }),

  mounted() {
    window.addEventListener('resize', this.resize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  },

  watch: {
    async tabList() {
      await doubleRaf()
      this.resize()
    },

    active() {
      this.resize()
    },
  },

  methods: {
    // expose
    resize() {
      const tab = this.matchName() || this.matchIndex() || this.matchBoundary()
      if (!tab || tab.disabled) {
        return
      }

      this.watchScrollable()
      this.moveIndicator(tab)
      this.scrollToCenter(tab)
    },

    toSizeUnit,

    onTabClick(tab) {
      const currentActive = tab.name ?? tab.index
      const { active, getListeners } = this

      getListeners()['onUpdate:active']?.(currentActive)
      getListeners().onClick?.(currentActive)
      currentActive !== active && getListeners().onChange?.(currentActive)
    },

    matchName() {
      return this.tabList.find(({ name }) => this.active === name)
    },

    matchIndex() {
      return this.tabList.find(({ index }) => this.active === index)
    },

    matchBoundary() {
      const {
        active,
        tabList: { length },
        getListeners,
      } = this

      if (length === 0) {
        return
      }

      isNumber(active)
        ? active > length - 1
          ? getListeners()['onUpdate:active']?.(length - 1)
          : getListeners()['onUpdate:active']?.(0)
        : null

      return this.matchIndex()
    },

    watchScrollable() {
      this.scrollable = this.tabList.length >= 5
    },

    moveIndicator({ element }) {
      if (this.layoutDirection === 'horizontal') {
        this.indicatorWidth = `${element?.offsetWidth}px`
        this.indicatorX = `${element?.offsetLeft}px`
      } else {
        this.indicatorHeight = `${element?.offsetHeight}px`
        this.indicatorY = `${element?.offsetTop}px`
      }
    },

    scrollToCenter({ element }) {
      if (!this.scrollable) {
        return
      }

      const scroller = this.$refs.scrollerEl

      if (this.layoutDirection === 'horizontal') {
        const left = element.offsetLeft + element.offsetWidth / 2 - scroller.offsetWidth / 2
        scrollTo(scroller, {
          left,
          animation: linear,
        })
      } else {
        const top = element.offsetTop + element.offsetHeight / 2 - scroller.offsetHeight / 2
        scrollTo(scroller, {
          top,
          animation: linear,
        })
      }
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../sticky/sticky';
@import './tabs';
</style>
