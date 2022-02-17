<template>
  <div class="var-style-provider" :style="formatStyleVars(styleVars)">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import { formatStyleVars } from '../utils/elements'
import { props } from './props'

export default defineComponent({
  name: 'VarStyleProvider',

  props,

  methods: {
    formatStyleVars,
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
