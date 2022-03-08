<template>
  <var-popup
    class="var-action-sheet__popup-radius"
    position="bottom"
    :overlay="overlay"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :lock-scroll="lockScroll"
    :close-on-click-overlay="closeOnClickOverlay"
    :teleport="teleport"
    :show="popupShow"
    @open="$emit('open')"
    @close="$emit('close')"
    @closed="$emit('closed')"
    @opened="$emit('opened')"
    @route-change="$emit('route-change')"
    @update:show="(value) => $emit('update:show', value)"
  >
    <div class="var-action-sheet var--box" v-bind="$attrs">
      <slot name="title">
        <div class="var-action-sheet__title">{{ dt(title, pack.actionSheetTitle) }}</div>
      </slot>

      <slot name="actions">
        <div
          class="var-action-sheet__action-item"
          v-for="action in actions"
          :class="[action.className, action.disabled ? 'var-action-sheet--disabled' : null]"
          v-ripple="{ disabled: action.disabled }"
          :key="action.name"
          :style="{ color: action.color }"
          @click="handleSelect(action)"
        >
          <var-icon
            class="var-action-sheet__action-icon"
            var-action-sheet-cover
            :name="action.icon"
            :size="action.iconSize"
            v-if="action.icon"
          />
          <div class="var-action-sheet__action-name">{{ action.name }}</div>
        </div>
      </slot>
    </div>
  </var-popup>
</template>

<script>
import Ripple from '../ripple'
import VarPopup from '../popup'
import VarIcon from '../icon'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { dt } from '../utils/shared'
import { pack } from '../locale'

export default defineComponent({
  name: 'VarActionSheet',

  directives: { Ripple },

  components: {
    VarPopup,
    VarIcon,
  },

  inheritAttrs: false,

  props,

  data: () => ({
    popupShow: false,
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  watch: {
    show: {
      handler(newValue) {
        this.popupShow = newValue
      },
      immediate: true,
    },
  },

  methods: {
    dt,

    handleSelect(action) {
      if (action.disabled) {
        return
      }

      this.$emit('select', action)

      this.closeOnClickAction && this.$emit('update:show', false)
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import '../ripple/ripple';
@import '../popup/popup';
@import './actionSheet';
</style>
