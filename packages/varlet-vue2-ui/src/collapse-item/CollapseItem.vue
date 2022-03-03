<template>
  <div
    :class="{
      'var-collapse-item': true,
      'var-collapse-item__active': offset && isShow,
      'var-collapse-item__disable': disabled,
    }"
  >
    <div class="var-collapse-item-header" @click="toggle()">
      <div class="var-collapse-item-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="var-collapse-item-header__icon">
        <slot name="icon">
          <var-icon
            :name="icon"
            :transition="250"
            :class="{
              'var-collapse-item-header__icon': true,
              'var-collapse-item-header__open': isShow && icon === 'chevron-down',
              'var-collapse-item-header__disable': disabled,
            }"
          />
        </slot>
      </div>
    </div>
    <div class="var-collapse-item-content" v-show="show" ref="contentEl" @transitionend="transitionend">
      <div class="var-collapse-item__wrap">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import { requestAnimationFrame } from '../utils/elements'
import { isArray } from '../utils/shared'
import { props } from './props'
import VarIcon from '../icon'
import { createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarCollapseItem',

  mixins: [createChildrenMixin('collapse', { parentKey: 'collapse', childrenKey: 'collapseItems' })],

  components: {
    VarIcon,
  },

  props,

  data: () => ({
    show: false,
    isShow: false,
  }),

  computed: {
    offset() {
      return this.collapse.offset
    },
  },

  watch: {
    isShow(newValue) {
      if (newValue) this.openPanel()
      else this.closePanel()
    },
  },

  methods: {
    init(accordion, show) {
      if (this.collapse.active === undefined || (accordion && isArray(this.collapse.active)) || show === this.isShow)
        return

      this.isShow = show
      this.toggle(true)
    },

    toggle(initOrAccordion) {
      if (this.disabled) return

      if (!initOrAccordion) {
        this.collapse.updateItem(this.name || this.collapse.index, !this.isShow)
      }
    },

    openPanel() {
      if (!this.$refs.contentEl) return
      this.$refs.contentEl.style.height = ''
      this.show = true

      this.$nextTick(() => {
        const { offsetHeight } = this.$refs.contentEl
        this.$refs.contentEl.style.height = 0 + 'px'

        requestAnimationFrame(() => {
          this.$refs.contentEl.style.height = offsetHeight + 'px'
        })
      })
    },

    closePanel() {
      if (!this.$refs.contentEl) return
      this.$refs.contentEl.style.height = 0 + 'px'
    },

    transitionend() {
      if (!this.isShow) {
        this.show = false
        this.$refs.contentEl.style.height = ''
      }
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './collapseItem';
</style>
