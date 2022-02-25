<template>
  <div class="var-steps" :style="{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import { props } from './props'
import { createParentMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarSteps',

  props,

  mixins: [createParentMixin('steps', { childrenKey: 'step' })],
})
</script>

<style lang="less">
@import '../styles/common';

.var-steps {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
</style>
