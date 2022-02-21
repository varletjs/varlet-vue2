<template>
  <div
    class="var-app-bar"
    :class="{ 'var-elevation--3': elevation }"
    :style="{
      background: color,
      color: textColor,
    }"
  >
    <div class="var-app-bar__left">
      <slot name="left" />
      <div class="var-app-bar__title" :style="{ paddingLeft }" v-if="titlePosition === 'left'">
        <slot>{{ title }}</slot>
      </div>
    </div>

    <div class="var-app-bar__title" v-if="titlePosition === 'center'">
      <slot>{{ title }}</slot>
    </div>

    <div class="var-app-bar__right">
      <div class="var-app-bar__title" :style="{ paddingRight }" v-if="titlePosition === 'right'">
        <slot>{{ title }}</slot>
      </div>
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import { props } from './props'

export default defineComponent({
  name: 'VarAppBar',

  props,

  data: () => ({
    paddingLeft: 0,
    paddingRight: 0,
  }),

  mounted() {
    this.computePadding()
  },

  updated() {
    this.computePadding()
  },

  methods: {
    computePadding() {
      this.paddingLeft = this.hasSlots('left') ? 0 : undefined
      this.paddingRight = this.hasSlots('right') ? 0 : undefined
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './appBar';
</style>
