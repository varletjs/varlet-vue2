<template>
  <teleport :to="teleport">
    <transition name="var-site-snackbar-fade" @after-enter="$emit('opened')" @after-leave="$emit('closed')">
      <var-site-snackbar-core v-show="show" v-bind="$props" class="var-site-snackbar-transition" v-on="$listeners">
        <slot>{{ content }}</slot>
        <template #action>
          <slot name="action" />
        </template>
      </var-site-snackbar-core>
    </transition>
  </teleport>
</template>

<script>
import VarSnackbarCore from './core'
import Teleport from '../teleport/Teleport'
import { props } from './props'

export default {
  name: 'VarSiteSnackbar',
  components: {
    VarSnackbarCore,
    Teleport,
  },
  props,
}
</script>

<style lang="less">
@import '../styles/common';
</style>
