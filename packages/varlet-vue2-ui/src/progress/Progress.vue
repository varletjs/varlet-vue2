<template>
  <div class="var-progress">
    <div class="var-progress-linear" v-if="mode === 'linear'">
      <div class="var-progress-linear__block" :style="{ height: `${lineWidth}px` }" v-bind="$attrs">
        <div class="var-progress-linear__background" v-if="track" :style="{ background: trackColor }"></div>
        <div
          :class="`var-progress-linear__certain${ripple ? ' var-progress-linear__ripple' : ''}`"
          :style="{ background: color, width: linearProps.width }"
        ></div>
      </div>
      <div class="var-progress-linear__label" v-bind="$attrs" v-if="label">
        <slot>
          {{ linearProps.roundValue }}
        </slot>
      </div>
    </div>

    <div class="var-progress-circle" v-if="mode === 'circle'" :style="{ width: `${size}px`, height: `${size}px` }">
      <svg
        class="var-progress-circle__svg"
        :style="{ transform: `rotate(${rotate - 90}deg)` }"
        :viewBox="circleProps.viewBox"
      >
        <circle
          v-if="track"
          class="var-progress-circle__background"
          :cx="size / 2"
          :cy="size / 2"
          :r="circleProps.radius"
          fill="transparent"
          :stroke-width="lineWidth"
          :style="{
            strokeDasharray: circleProps.perimeter,
            stroke: trackColor,
          }"
        ></circle>
        <circle
          class="var-progress-circle__certain"
          :cx="size / 2"
          :cy="size / 2"
          :r="circleProps.radius"
          fill="transparent"
          :stroke-width="lineWidth"
          :style="{
            strokeDasharray: circleProps.strokeDasharray,
            stroke: color,
          }"
        ></circle>
      </svg>

      <div class="var-progress-circle__label" v-if="label" v-bind="$attrs">
        <slot>
          {{ circleProps.roundValue }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import { props } from './props'
import { toNumber } from '../utils/shared'

export default defineComponent({
  name: 'VarProgress',

  inheritAttrs: false,

  props,

  computed: {
    linearProps() {
      const value = toNumber(this.value)
      const width = `${value > 100 ? 100 : value}%`
      const roundValue = `${value > 100 ? 100 : Math.round(value)}%`

      return {
        width,
        roundValue,
      }
    },

    circleProps() {
      const { size, lineWidth, value } = this
      const viewBox = `0 0 ${size} ${size}`
      const roundValue = toNumber(value) > 100 ? 100 : Math.round(toNumber(value))
      const radius = (size - toNumber(lineWidth)) / 2
      const perimeter = 2 * Math.PI * radius
      const strokeDasharray = `${(roundValue / 100) * perimeter}, ${perimeter}`

      return {
        viewBox,
        roundValue: `${roundValue}%`,
        radius,
        perimeter,
        strokeDasharray,
      }
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './progress';
</style>
