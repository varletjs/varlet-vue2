<template>
  <div class="var-site-snackbar" :style="{ pointerEvents: isForbidClick ? 'auto' : 'none', zIndex }">
    <div :class="snackbarClass" :style="{ zIndex }">
      <div class="var-site-snackbar__content" :class="[contentClass]">
        <slot>{{ content }}</slot>
      </div>
      <div class="var-site-snackbar__action">
        <var-icon v-if="iconName" :name="iconName" />
        <var-loading v-if="type === 'loading'" :type="loadingType" :size="loadingSize" />
        <slot name="action" />
      </div>
    </div>
  </div>
</template>

<script>
import VarLoading from '../loading'
import VarIcon from '../icon'
import { createZIndexMixin } from '../utils/mixins/zIndex'
import { createLockMixin } from '../context/lock'
import { props } from './props'
import { SNACKBAR_TYPE } from './index'

export default {
  name: 'VarSiteSnackbarCore',
  components: {
    VarLoading,
    VarIcon,
  },
  mixins: [createZIndexMixin('show', 1), createLockMixin('show', 'lockScroll')],
  props,
  data() {
    return {
      timer: null,
      ICON_TYPE_DICT: {
        success: 'checkbox-marked-circle',
        warning: 'warning',
        info: 'information',
        error: 'error',
        loading: '',
      },
    }
  },
  computed: {
    snackbarClass() {
      const { position, vertical, type } = this
      const baseClass = `var-site-snackbar__wrapper var-site-snackbar__wrapper-${position} var-elevation--4`
      const verticalClass = vertical ? ' var-site-snackbar__vertical' : ''
      const typeClass = type && SNACKBAR_TYPE.includes(type) ? ` var-site-snackbar__wrapper-${type}` : ''

      return `${baseClass}${verticalClass}${typeClass}`
    },

    isForbidClick() {
      return this.type === 'loading' || this.forbidClick
    },

    iconName() {
      if (!this.type) return ''

      return this.ICON_TYPE_DICT[this.type]
    },
  },
  watch: {
    show(show) {
      if (show) {
        this.$emit('open')
        this.updateAfterDuration()
      } else if (show === false) {
        clearTimeout(this.timer)
        this.$emit('close')
      }
    },
    customUpdate() {
      clearTimeout(this.timer)
      this.updateAfterDuration()
    },
  },
  mounted() {
    if (this.show) {
      this.$emit('open')
      this.updateAfterDuration()
    }
  },
  methods: {
    updateAfterDuration() {
      this.timer = setTimeout(() => {
        this.$emit('update:show', false)
      }, this.duration)
    },
  },
}
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../loading/loading';
@import '../button/button';
@import '../icon/icon';
@import './snackbar';
</style>
