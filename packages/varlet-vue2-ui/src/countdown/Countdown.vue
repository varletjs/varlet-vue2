<template>
  <div class="var-countdown">
    <slot v-bind="timeData">
      {{ showTime }}
    </slot>
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import { props } from './props'
import { requestAnimationFrame, cancelAnimationFrame } from '../utils/elements'
import { toNumber, parseFormat } from '../utils/shared'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

export default defineComponent({
  name: 'VarCountdown',

  props,

  data: () => ({
    endTime: 0,
    isStart: false,
    showTime: '',
    handle: 0,
    pauseTime: 0,
    timeData: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    },
  }),

  watch: {
    time: {
      handler() {
        this.reset()
      },
      immediate: true,
    },
  },

  methods: {
    formatTime(durationTime) {
      const { onChange } = this.getListeners()
      const days = Math.floor(durationTime / DAY)
      const hours = Math.floor((durationTime % DAY) / HOUR)
      const minutes = Math.floor((durationTime % HOUR) / MINUTE)
      const seconds = Math.floor((durationTime % MINUTE) / SECOND)
      const milliseconds = Math.floor(durationTime % SECOND)

      const time = {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
      }
      this.timeData = time

      onChange?.(time)
      this.showTime = parseFormat(this.format, time)
    },

    countdown() {
      const { time, autoStart, getListeners } = this
      const { onEnd } = getListeners()
      const now = Date.now()

      if (!this.endTime) this.endTime = now + toNumber(time)

      let durationTime = this.endTime - now
      if (durationTime < 0) durationTime = 0
      this.pauseTime = durationTime

      this.formatTime(durationTime)

      if (durationTime === 0) {
        onEnd?.()
        return
      }

      if (autoStart || this.isStart) this.handle = requestAnimationFrame(this.countdown)
    },

    start() {
      if (this.isStart) {
        return
      }

      this.isStart = true
      this.endTime = Date.now() + (this.pauseTime || toNumber(this.time))
      this.countdown()
    },

    pause() {
      this.isStart = false
    },

    reset() {
      this.endTime = 0
      this.isStart = false
      cancelAnimationFrame(this.handle)
      this.countdown()
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
