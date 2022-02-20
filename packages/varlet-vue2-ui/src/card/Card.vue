<template>
  <div
    class="var-card"
    :class="[elevation ? `var-elevation--${elevation}` : 'var-elevation--2']"
    v-ripple="{ disabled: !ripple }"
    @click="handleClick"
  >
    <slot name="image">
      <img
        class="var-card__image"
        :style="{
          objectFit: fit,
          height: toSizeUnit(height),
        }"
        :src="src"
        :alt="alt"
        v-if="src"
      />
    </slot>
    <slot name="title">
      <div class="var-card__title" v-if="title">{{ title }}</div>
    </slot>
    <slot name="subtitle">
      <div class="var-card__subtitle" v-if="subtitle">{{ subtitle }}</div>
    </slot>
    <slot name="description">
      <div class="var-card__description" v-if="description">{{ description }}</div>
    </slot>
    <div class="var-card__footer" v-if="hasSlots('extra')">
      <slot name="extra" />
    </div>
  </div>
</template>

<script>
import Ripple from '../ripple'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'

export default defineComponent({
  name: 'VarCard',

  directives: { Ripple },

  props,

  data: () => ({
    toSizeUnit,
  }),

  methods: {
    handleClick(e) {
      const { disabled, getListeners } = this
      const { onClick } = getListeners()

      if (!onClick || disabled) {
        return
      }

      onClick(e)
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import './card';
</style>
