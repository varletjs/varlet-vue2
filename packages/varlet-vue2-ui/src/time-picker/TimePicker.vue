<template>
  <div class="var-time-picker" ref="picker" :class="[shadow ? 'var-elevation--2' : null]">
    <div class="var-time-picker-title" :style="{ background: headerColor || color }">
      <div class="var-time-picker-title__time">
        <div
          class="var-time-picker-title__btn"
          :class="type === 'hour' ? 'var-time-picker-title__btn--active' : null"
          @click="checkPanel('hour')"
        >
          {{ time.hour }}
        </div>
        <span>:</span>
        <div
          class="var-time-picker-title__btn"
          :class="type === 'minute' ? 'var-time-picker-title__btn--active' : null"
          @click="checkPanel('minute')"
        >
          {{ time.minute }}
        </div>
        <span v-if="useSeconds">:</span>
        <div
          v-if="useSeconds"
          class="var-time-picker-title__btn"
          :class="type === 'second' ? 'var-time-picker-title__btn--active' : null"
          @click="checkPanel('second')"
        >
          {{ time.second }}
        </div>
      </div>
      <div class="var-time-picker-title__ampm" v-if="format === 'ampm'">
        <div
          class="var-time-picker-title__btn"
          :class="ampm === 'am' ? 'var-time-picker-title__btn--active' : null"
          @click="checkAmpm('am')"
        >
          AM
        </div>
        <div
          class="var-time-picker-title__btn"
          :class="ampm === 'pm' ? 'var-time-picker-title__btn--active' : null"
          @click="checkAmpm('pm')"
        >
          PM
        </div>
      </div>
    </div>
    <div class="var-time-picker-body">
      <div
        class="var-time-picker-clock__container"
        @touchstart="moveHand"
        @touchmove="moveHand"
        @touchend="end"
        ref="container"
      >
        <transition name="var-time-picker-panel-fade">
          <clock
            :key="type"
            ref="inner"
            :type="type"
            :ampm="ampm"
            :color="color"
            :is-inner="isInner"
            :format="format"
            :allowed-time="allowedTime"
            :rad="getRad"
            :time="time"
            :prevent-next-update="isPreventNextUpdate"
            :use-seconds="useSeconds"
            :max="max"
            :min="min"
            @update="update"
            @change-prevent-update="changePreventUpdate"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import dayjs from 'dayjs/esm'
import Clock from './clock.vue'
import { props, hoursAmpm, hours24 } from './props'
import { toNumber } from '../utils/shared'
import { getNumberTime, getIsDisableMinute, getIsDisableSecond } from './utils'

export default defineComponent({
  name: 'VarTimePicker',
  components: {
    Clock,
  },
  props,
  data: () => ({
    container: null,
    picker: null,
    inner: null,
    isInner: false,
    isPreventNextUpdate: false,
    isActualInner: false,
    isChosenUsableHour: false,
    isChosenUsableMinute: false,
    hourRad: undefined,
    minuteRad: 0,
    secondRad: 0,
    type: 'hour',
    ampm: 'am',
    isDisableHour: false,
    isDisableMinute: false,
    time: {
      hour: '00',
      minute: '00',
      second: '00',
    },
    center: {
      x: 0,
      y: 0,
    },
    innerRange: {
      x: [],
      y: [],
    },
  }),
  computed: {
    getRad() {
      if (this.type === 'hour') return this.hourRad
      if (this.type === 'minute') return this.minuteRad
      return this.secondRad
    },
  },
  methods: {
    update(newTime) {
      const { onInput, onChange } = this.getListeners()

      onInput?.(newTime)
      onChange?.(newTime)
    },
    rad2deg(rad) {
      return rad * 57.29577951308232
    },
    checkPanel(panelType) {
      this.isChosenUsableHour = false
      this.isDisableMinute = false
      this.type = panelType
    },
    findAvailableHour(ampm) {
      const { disableHour } = this.inner

      const index = hoursAmpm.findIndex((hour) => toNumber(hour) === toNumber(this.time.hour))
      const hours = ampm === 'am' ? hoursAmpm : hours24
      const realignmentHours = [...hours.slice(index), ...hours.slice(0, index)]

      return realignmentHours.find((hour, index) => {
        this.isPreventNextUpdate = index !== 0

        return !disableHour.includes(hour)
      })
    },
    checkAmpm(ampmType) {
      if (this.readonly) return

      this.ampm = ampmType
      const newHour = this.findAvailableHour(ampmType)
      if (!newHour) return

      const second = this.useSeconds ? `:${this.time.second}` : ''
      const newTime = `${newHour.padStart(2, '0')}:${this.time.minute}${second}`

      this.update(newTime)
    },
    getInner(clientX, clientY) {
      const xIsInRange = clientX >= this.innerRange.x[0] && clientX <= this.innerRange.x[1]
      const yIsInRange = clientY >= this.innerRange.y[0] && clientY <= this.innerRange.y[1]

      return xIsInRange && yIsInRange
    },
    getTime(value) {
      const hourFormat = this.format === '24hr' ? 'HH' : 'hh'
      const { hour, minute, second } = getNumberTime(value)

      return {
        hour: dayjs().hour(hour).format(hourFormat),
        minute: dayjs().minute(minute).format('mm'),
        second: dayjs().second(second).format('ss'),
      }
    },
    getHourIndex(rad) {
      const value = rad / 30
      return value >= 0 ? value : value + 12
    },
    getRangeSize() {
      const { width: innerWidth, height: innerHeight } = this.inner.getSize()

      const rangeXMin = this.center.x - innerWidth / 2 - 8
      const rangeXMax = this.center.x + innerWidth / 2 + 8

      const rangeYMin = this.center.y - innerHeight / 2 - 8
      const rangeYMax = this.center.y + innerHeight / 2 + 8

      return {
        rangeXMin,
        rangeXMax,
        rangeYMin,
        rangeYMax,
      }
    },
    setHourRad(clientX, clientY, roundDeg) {
      const { disableHour } = this.inner
      this.isActualInner = this.getInner(clientX, clientY)
      const rad = Math.round(roundDeg / 30) * 30 + 90
      const index = this.getHourIndex(rad)

      const anotherHour = this.isInner ? hoursAmpm[index] : hours24[index]
      if (!disableHour.includes(anotherHour)) {
        this.isInner = this.format === '24hr' ? this.getInner(clientX, clientY) : false
      }
      if (this.isInner !== this.isActualInner) return

      const newHour = this.isInner || this.ampm === 'pm' ? hours24[index] : hoursAmpm[index]
      this.isDisableHour = disableHour.includes(newHour)
      if (this.isDisableHour) return
      this.hourRad = rad
      this.isChosenUsableHour = true
    },

    setMinuteRad(roundDeg) {
      const { disableHour } = this.inner
      const rad = Math.round(roundDeg / 6) * 6 + 90
      const radToMin = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60

      const values = {
        time: radToMin,
        format: this.format,
        ampm: this.ampm,
        hour: this.time.hour,
        max: this.max,
        min: this.min,
        disableHour,
        allowedTime: this.allowedTime,
      }
      this.isDisableMinute = getIsDisableMinute(values)

      if (this.isDisableMinute) return
      this.minuteRad = rad
      this.isChosenUsableMinute = true
    },
    setSecondRad(roundDeg) {
      const { disableHour } = this.inner
      const rad = Math.round(roundDeg / 6) * 6 + 90
      const radToSec = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60

      const values = {
        time: radToSec,
        format: this.format,
        ampm: this.ampm,
        hour: this.time.hour,
        minute: toNumber(this.time.minute),
        max: this.max,
        min: this.min,
        disableHour,
        allowedTime: this.allowedTime,
      }

      if (!getIsDisableSecond(values)) this.secondRad = rad
    },
    setCenterAndRange() {
      const { left, top, width, height } = this.container.getBoundingClientRect()

      this.center.x = left + width / 2
      this.center.y = top + height / 2

      if (this.type === 'hour' && this.format === '24hr') {
        const { rangeXMin, rangeXMax, rangeYMin, rangeYMax } = this.getRangeSize()

        this.innerRange.x = [rangeXMin, rangeXMax]
        this.innerRange.y = [rangeYMin, rangeYMax]
      }
    },
    moveHand(event) {
      if (this.readonly) return

      this.setCenterAndRange()

      const { clientX, clientY } = event.touches[0]

      const x = clientX - this.center.x
      const y = clientY - this.center.y
      const roundDeg = Math.round(this.rad2deg(Math.atan2(y, x)))

      if (this.type === 'hour') this.setHourRad(clientX, clientY, roundDeg)
      else if (this.type === 'minute') this.setMinuteRad(roundDeg)
      else this.setSecondRad(roundDeg)
    },
    end() {
      if (this.readonly) return

      if (this.type === 'hour' && this.isChosenUsableHour) {
        this.type = 'minute'
        return
      }

      if (this.type === 'minute' && this.useSeconds && this.isChosenUsableMinute) {
        this.type = 'second'
      }
    },
    changePreventUpdate() {
      this.isPreventNextUpdate = false
    },
  },
  watch: {
    value: {
      handler(value) {
        if (value) {
          const { hour, minute, second } = getNumberTime(value)

          const formatHour12 = dayjs().hour(hour).format('hh')
          const formatHour24 = dayjs().hour(hour).format('HH')
          const formatMinute = dayjs().minute(minute).format('mm')
          const formatSecond = dayjs().second(second).format('ss')

          this.hourRad = (formatHour12 === '12' ? 0 : toNumber(formatHour12)) * 30
          this.minuteRad = toNumber(formatMinute) * 6
          this.secondRad = toNumber(formatSecond) * 6

          this.time = this.getTime(value)

          if (this.format !== '24hr') {
            this.ampm = `${hour}`.padStart(2, '0') === formatHour24 && hours24.includes(formatHour24) ? 'pm' : 'am'
          }

          this.isInner = this.format === '24hr' && hours24.includes(formatHour24)
        }
      },
      immediate: true,
    },
  },
  created() {
    this.$nextTick(() => {
      this.container = this.$refs.container
      this.inner = this.$refs.inner
      this.picker = this.$refs.picker
    })
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './timePicker';
</style>
