<template>
  <div class="var-step">
    <div :class="`var-step-${direction}`">
      <div :class="`var-step-${direction}__main`" ref="main">
        <div
          :class="{
            [`var-step-${direction}__tag`]: true,
            [`var-step-${direction}__tag--active`]: isActive || isCurrent,
          }"
          :style="{ backgroundColor: isActive || isCurrent ? activeColor : inactiveColor }"
          @click="click"
        >
          <var-icon class="var-step__icon" var-step-cover :name="activeIcon" v-if="isActive" />
          <var-icon class="var-step__icon" var-step-cover :name="currentIcon" v-else-if="isCurrent && currentIcon" />
          <var-icon class="var-step__icon" var-step-cover :name="inactiveIcon" v-else-if="inactiveIcon" />
          <span v-else>{{ index + 1 }}</span>
        </div>
        <div
          :class="{
            [`var-step-${direction}__content`]: true,
            [`var-step-${direction}__content--active`]: isActive || isCurrent,
          }"
          @click="click"
        >
          <slot />
        </div>
      </div>
      <div :class="`var-step-${direction}__line`" v-if="!isLastChild" :style="{ margin: lineMargin }"></div>
    </div>
  </div>
</template>

<script>
import { props } from './props'
import { defineComponent } from '../utils/create'
import VarIcon from '../icon'
import { createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarStep',

  components: {
    VarIcon,
  },

  mixins: [createChildrenMixin('steps', { childrenKey: 'step' })],

  data: () => ({
    lineMargin: '',
    isLastChild: false,
  }),

  props,

  computed: {
    index() {
      return this.steps.step.indexOf(this)
    },

    isCurrent({ active, index }) {
      return active === index
    },

    active() {
      return this.steps.active
    },

    isActive({ index, active }) {
      return index !== -1 && active > index
    },

    activeColor() {
      return this.steps.activeColor
    },
    inactiveColor() {
      return this.steps.inactiveColor
    },

    direction() {
      return this.steps.direction
    },
  },

  watch: {
    'steps.step': function () {
      const { newLength, index } = this
      this.isLastChild = newLength - 1 === index
      const main = this.$refs.main
      if (main) {
        const margin = main.offsetWidth / 2 - 14
        this.lineMargin = `0 -${margin}px`
      }
    },
  },

  methods: {
    click() {
      this.steps.getListeners().onClickStep?.(this.index)
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './step';
</style>
