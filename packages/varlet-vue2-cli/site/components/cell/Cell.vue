<template>
  <div class="var-site-cell" :class="[border ? 'var-site-cell--border' : null]">
    <div class="var-site-cell__icon" :class="[iconClass ? iconClass : null]" v-if="hasSlots('icon') || icon">
      <slot name="icon">
        <var-icon class="var--flex" :name="icon" />
      </slot>
    </div>
    <div class="var-site-cell__content">
      <div class="var-site-cell__title" :class="[titleClass ? titleClass : null]">
        <slot>{{ title }}</slot>
      </div>
      <div class="var-site-cell__desc" :class="[descClass ? descClass : null]" v-if="hasSlots('desc') || desc">
        <slot name="desc">
          {{ desc }}
        </slot>
      </div>
    </div>
    <div class="var-site-cell__extra" :class="[extraClass ? extraClass : null]" v-if="hasSlots('extra')">
      <slot name="extra" />
    </div>
  </div>
</template>

<script>
import VarSiteIcon from '../icon'
import { defineComponent } from '../utils/create'
import { props } from './props'

export default defineComponent({
  name: 'VarSiteCell',

  components: {
    VarSiteIcon,
  },

  props,
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './cell';
</style>
