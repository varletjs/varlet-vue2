<template>
  <div class="var-time-picker-clock">
    <div class="var-time-picker-clock__hand" :style="handStyle"></div>
    <div
      class="var-time-picker-clock__item"
      :class="[
        isActive(index, false) ? 'var-time-picker-clock__item--active' : null,
        isDisable(timeScale) ? 'var-time-picker-clock__item--disable' : null,
      ]"
      v-for="(timeScale, index) in timeScales"
      :key="timeScale"
      :style="getStyle(index, timeScale, false)"
    >
      {{ timeScale }}
    </div>
    <div class="var-time-picker-clock__inner" ref="inner" v-if="format === '24hr' && type === 'hour'">
      <div
        class="var-time-picker-clock__item"
        :class="[
          isActive(index, true) ? 'var-time-picker-clock__item--active' : null,
          isDisable(hour) ? 'var-time-picker-clock__item--disable' : null,
        ]"
        v-for="(hour, index) in hours24"
        :key="hour"
        :style="getStyle(index, hour, true)"
      >
        {{ hour }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import dayjs from 'dayjs/esm'
import { hoursAmpm, hours24, minSec } from './props'
import { notConvert, convertHour, getIsDisableMinute, getIsDisableSecond, getNumberTime } from './utils'
import { toNumber } from '../utils/shared'

export default defineComponent({
  name: 'Clock',
  props: {
    isInner: {
      type: Boolean,
      required: true,
    },
    rad: {
      type: Number,
    },
    format: {
      type: String,
      default: 'ampm',
    },
    allowedTime: {
      type: Object,
    },
    time: {
      type: Object,
      required: true,
    },
    useSeconds: {
      type: Boolean,
      default: false,
    },
    preventNextUpdate: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'hour',
    },
    ampm: {
      type: String,
      default: 'am',
    },
    color: {
      type: String,
    },
    min: {
      type: String,
    },
    max: {
      type: String,
    },
  },
  data: () => ({
    inner: null,
    disableHour: [],
    disable24HourIndex: [],
  }),
  computed: {
    hours24() {
      return hours24
    },
    handStyle() {
      return {
        transform: `rotate(${toNumber(this.rad)}deg)`,
        height: this.isInner && this.type === 'hour' ? 'calc(50% - 40px)' : 'calc(50% - 4px)',
        backgroundColor: this.getHandleColor(),
        borderColor: this.getHandleColor(),
      }
    },
    activeItemIndex() {
      if (this.rad === undefined) return
      const value = this.rad / 30
      return value >= 0 ? value : value + 12
    },
    timeScales() {
      if (this.type === 'hour') return hoursAmpm

      return minSec
    },
    activeItemIndexAndIsInner() {
      return [this.activeItemIndex, this.isInner]
    },
  },
  methods: {
    isDisableMinSec(time, isDisable) {
      time = time ?? (this.type === 'minute' ? this.time.minute : this.time.second)

      const disableMethod = this.type === 'minute' ? getIsDisableMinute : getIsDisableSecond

      const values = {
        time: toNumber(time),
        format: this.format,
        ampm: this.ampm,
        hour: this.time.hour,
        minute: toNumber(this.time.minute),
        max: this.max,
        min: this.min,
        allowedTime: this.allowedTime,
        disableHour: this.disableHour,
      }

      if (isDisable && this.type === 'minute') Reflect.deleteProperty(values, 'minute')

      return disableMethod(values)
    },
    getHandleColor() {
      if (this.activeItemIndex === undefined) return this.color
      const hour = this.isInner ? hours24[this.activeItemIndex] : this.timeScales[this.activeItemIndex]

      if (this.timeScales === minSec) {
        return this.isDisableMinSec() ? '#bdbdbd' : this.color
      }

      return this.isDisable(hour) ? '#bdbdbd' : this.color
    },
    isActive(index, inner) {
      if (inner) return this.activeItemIndex === index && this.isInner

      return this.activeItemIndex === index && (!this.isInner || this.type !== 'hour')
    },
    isDisable(time) {
      if (this.type === 'hour') {
        if (notConvert(this.format, this.ampm)) return this.disableHour.includes(time)

        const timeIndex = hoursAmpm.findIndex((hour) => hour === time)
        return this.disable24HourIndex.includes(timeIndex)
      }

      return this.isDisableMinSec(time, true)
    },
    getStyle(index, hour, inner) {
      const rad = ((2 * Math.PI) / 12) * index - Math.PI / 2
      const left = 50 * (1 + Math.cos(rad))
      const top = 50 * (1 + Math.sin(rad))

      const computedColor = () => {
        if (!this.isActive(index, inner)) {
          return {
            backgroundColor: undefined,
            color: undefined,
          }
        }
        if (this.isDisable(hour)) {
          return {
            backgroundColor: '#bdbdbd',
            color: '#fff',
          }
        }

        return {
          backgroundColor: this.color,
          color: undefined,
        }
      }

      const { backgroundColor, color } = computedColor()

      return {
        left: `${left}%`,
        top: `${top}%`,
        backgroundColor,
        color,
      }
    },
    getSize() {
      const { width, height } = this.inner.getBoundingClientRect()

      return {
        width,
        height,
      }
    },
    getHour() {
      if (this.activeItemIndex === undefined) return undefined
      const hours = this.ampm === 'am' ? hoursAmpm : hours24

      return hours[this.activeItemIndex].padStart(2, '0')
    },
  },
  watch: {
    activeItemIndexAndIsInner([index, inner], [oldIndex, oldInner]) {
      const isSame = index === oldIndex && inner === oldInner
      if (isSame || this.type !== 'hour' || this.activeItemIndex === undefined) return

      const newHour = inner ? hours24[this.activeItemIndex] : this.getHour()
      const second = this.useSeconds ? `:${this.time.second}` : ''
      const newTime = `${newHour}:${this.time.minute}${second}`

      if (!this.preventNextUpdate) this.$emit('update', newTime)

      this.$emit('change-prevent-update')
    },
    rad(rad, oldRad) {
      if (this.type === 'hour' || rad === undefined || oldRad === undefined) return

      const radToMinSec = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60
      const oldRadToMinSec = oldRad / 6 >= 0 ? oldRad / 6 : oldRad / 6 + 60

      if (radToMinSec === oldRadToMinSec) return

      let newTime
      const { hourStr } = convertHour(this.format, this.ampm, this.time.hour)

      if (this.type === 'minute') {
        const newMinute = dayjs().minute(radToMinSec).format('mm')
        const second = this.useSeconds ? `:${this.time.second}` : ''

        newTime = `${hourStr}:${newMinute}${second}`
      }

      if (this.type === 'second') {
        const newSecond = dayjs().second(radToMinSec).format('ss')
        const second = this.useSeconds ? `:${newSecond}` : ''

        newTime = `${hourStr}:${this.time.minute}${second}`
      }

      this.$emit('update', newTime)
    },
    max: {
      handler(newV) {
        this.disableHour = []
        if (newV && !this.min) {
          const { hour: maxHour } = getNumberTime(newV)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) > maxHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) > maxHour)
          this.disableHour = [...disableAmpmHours, ...disable24Hours]
        }

        if (!newV && this.min) {
          const { hour: minHour } = getNumberTime(this.min)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) < minHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) < minHour)
          this.disableHour = [...disableAmpmHours, ...disable24Hours]
        }

        if (newV && this.min) {
          const { hour: maxHour } = getNumberTime(newV)
          const { hour: minHour } = getNumberTime(this.min)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) < minHour || toNumber(hour) > maxHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) < minHour || toNumber(hour) > maxHour)
          this.disableHour = [...disableAmpmHours, ...disable24Hours]
        }

        if (this.allowedTime?.hours) {
          const { hours } = this.allowedTime

          const disableAmpmHours = hoursAmpm.filter((hour) => !hours(toNumber(hour)))
          const disable24Hours = hours24.filter((hour) => !hours(toNumber(hour)))
          this.disableHour = [...new Set([...this.disableHour, ...disableAmpmHours, ...disable24Hours])]
        }

        this.disable24HourIndex = this.disableHour
          .map((hour) => hours24.findIndex((hour24) => hour === hour24))
          .filter((hour) => hour >= 0)
      },
      immediate: true,
    },
    min: {
      handler(newV) {
        this.disableHour = []
        if (this.max && !newV) {
          const { hour: maxHour } = getNumberTime(this.max)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) > maxHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) > maxHour)
          this.disableHour = [...disableAmpmHours, ...disable24Hours]
        }

        if (!this.max && newV) {
          const { hour: minHour } = getNumberTime(newV)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) < minHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) < minHour)
          this.disableHour = [...disableAmpmHours, ...disable24Hours]
        }

        if (this.max && newV) {
          const { hour: maxHour } = getNumberTime(this.max)
          const { hour: minHour } = getNumberTime(newV)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) < minHour || toNumber(hour) > maxHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) < minHour || toNumber(hour) > maxHour)
          this.disableHour = [...disableAmpmHours, ...disable24Hours]
        }

        if (this.allowedTime?.hours) {
          const { hours } = this.allowedTime

          const disableAmpmHours = hoursAmpm.filter((hour) => !hours(toNumber(hour)))
          const disable24Hours = hours24.filter((hour) => !hours(toNumber(hour)))
          this.disableHour = [...new Set([...this.disableHour, ...disableAmpmHours, ...disable24Hours])]
        }

        this.disable24HourIndex = this.disableHour
          .map((hour) => hours24.findIndex((hour24) => hour === hour24))
          .filter((hour) => hour >= 0)
      },
      immediate: true,
    },
    allowedTime: {
      handler(newV) {
        this.disableHour = []
        if (this.max && !this.min) {
          const { hour: maxHour } = getNumberTime(this.max)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) > maxHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) > maxHour)
          this.disableHour = [...disableAmpmHours, ...disable24Hours]
        }

        if (!this.max && this.min) {
          const { hour: minHour } = getNumberTime(this.min)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) < minHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) < minHour)
          this.disableHour = [...disableAmpmHours, ...disable24Hours]
        }

        if (this.max && this.min) {
          const { hour: maxHour } = getNumberTime(this.max)
          const { hour: minHour } = getNumberTime(this.min)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) < minHour || toNumber(hour) > maxHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) < minHour || toNumber(hour) > maxHour)
          this.disableHour = [...disableAmpmHours, ...disable24Hours]
        }

        if (newV?.hours) {
          const { hours } = newV

          const disableAmpmHours = hoursAmpm.filter((hour) => !hours(toNumber(hour)))
          const disable24Hours = hours24.filter((hour) => !hours(toNumber(hour)))
          this.disableHour = [...new Set([...this.disableHour, ...disableAmpmHours, ...disable24Hours])]
        }

        this.disable24HourIndex = this.disableHour
          .map((hour) => hours24.findIndex((hour24) => hour === hour24))
          .filter((hour) => hour >= 0)
      },
      immediate: true,
    },
  },
  mounted() {
    this.inner = this.$refs.inner
  },
})
</script>
