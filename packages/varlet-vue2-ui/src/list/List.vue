<template>
  <div class="var-list var--box" ref="listEl">
    <slot />

    <slot name="loading" v-if="loading">
      <div class="var-list__loading">
        <div class="var-list__loading-text">{{ dt(loadingText, pack.listLoadingText) }}</div>
        <var-loading size="mini" :radius="10" />
      </div>
    </slot>

    <slot name="finished" v-if="finished">
      <div class="var-list__finished">{{ dt(finishedText, pack.listFinishedText) }}</div>
    </slot>

    <slot name="error" v-if="error">
      <div class="var-list__error" v-ripple @click="load">
        {{ dt(errorText, pack.listErrorText) }}
      </div>
    </slot>

    <div class="var-list__detector" ref="detectorEl"></div>
  </div>
</template>

<script>
import VarLoading from '../loading'
import Ripple from '../ripple'
import { defineComponent, nextTick } from '../utils/create'
import { getParentScroller, toPxNum } from '../utils/elements'
import { props } from './props'
import { isNumber, dt } from '../utils/shared'
import { pack } from '../locale'

export default defineComponent({
  name: 'VarList',

  directives: { Ripple },

  components: {
    VarLoading,
  },

  props,

  data: () => ({
    scroller: '',
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  mounted() {
    this.scroller = getParentScroller(this.$refs.listEl)

    this.immediateCheck && this.check()

    this.scroller.addEventListener('scroll', this.check)
  },

  beforeDestroy() {
    this.scroller.removeEventListener('scroll', this.check)
  },

  methods: {
    // expose
    async check() {
      await nextTick()

      if (!this.loading && !this.finished && !this.error && this.isReachBottom()) {
        this.load()
      }
    },

    isNumber,

    dt,

    load() {
      this.getListeners()['onUpdate:error']?.(false)
      this.getListeners()['onUpdate:loading']?.(true)
      this.getListeners().onLoad?.()
    },

    isReachBottom() {
      const containerBottom =
        this.scroller === window ? window.innerHeight : this.scroller.getBoundingClientRect().bottom

      const { bottom } = this.$refs.detectorEl.getBoundingClientRect()

      // The fractional part of the detectorBottom when bottoming out overflows
      // https://github.com/varletjs/varlet/issues/310
      // alert(this.$refs.detectorEl)
      return Math.floor(bottom) - toPxNum(this.offset) <= containerBottom
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../loading/loading';
@import './list';
</style>
