<template>
  <div class="var-date-picker" :class="[shadow ? 'var-elevation--2' : null]">
    <div class="var-date-picker-title" :style="{ background: headerColor || color }">
      <div
        class="var-date-picker-title__year"
        :class="[isYearPanel ? 'var-date-picker-title__year--active' : null]"
        @click="clickEl('year')"
      >
        <slot name="year" :year="previewYear">
          {{ previewYear }}
        </slot>
      </div>

      <div
        class="var-date-picker-title__date"
        :class="[
          !isYearPanel ? 'var-date-picker-title__date--active' : null,
          range ? 'var-date-picker-title__date--range' : null,
        ]"
        @click="clickEl('date')"
      >
        <transition :name="multiple ? '' : `var-date-picker${reverse ? '-reverse' : ''}-translatey`">
          <div :key="`${chooseYear}${chooseMonth && chooseMonth.index}`" v-if="type === 'month'">
            <slot name="range" :choose="getChoose.chooseRangeMonth" v-if="range">
              {{ getMonthTitle }}
            </slot>
            <slot name="multiple" :choose="getChoose.chooseMonths" v-else-if="multiple">
              {{ getMonthTitle }}
            </slot>
            <slot name="month" :month="chooseMonth && chooseMonth.index" :year="chooseYear" v-else>
              {{ getMonthTitle }}
            </slot>
          </div>
          <div :key="`${chooseYear}${chooseMonth && chooseMonth.index}${chooseDay}`" v-else>
            <slot name="range" :choose="formatRange" v-if="range">
              {{ getDateTitle }}
            </slot>
            <slot name="multiple" :choose="getChoose.chooseDays" v-else-if="multiple">
              {{ getDateTitle }}
            </slot>
            <slot name="date" v-bind="slotProps" v-else>
              {{ getDateTitle }}
            </slot>
          </div>
        </transition>
      </div>
    </div>
    <div class="var-date-picker-body">
      <transition name="var-date-picker-panel-fade">
        <year-picker-panel
          :component-props="componentProps"
          :preview="previewYear"
          @choose-year="getChooseYear"
          v-if="isYearPanel"
        />
        <month-picker-panel
          :current="currentDate"
          :choose="getChoose"
          :preview="getPreview"
          :click-year="() => clickEl('year')"
          :component-props="componentProps"
          @choose-month="getChooseMonth"
          @check-preview="checkPreview"
          v-else-if="(!isYearPanel && type === 'month') || isMonthPanel"
        />
        <day-picker-panel
          :current="currentDate"
          :choose="getChoose"
          :preview="getPreview"
          :component-props="componentProps"
          :click-month="() => clickEl('month')"
          @choose-day="getChooseDay"
          @check-preview="checkPreview"
          v-else-if="!isYearPanel && !isMonthPanel && type === 'date'"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import dayjs from 'dayjs/esm'
import MonthPickerPanel from './src/month-picker-panel.vue'
import YearPickerPanel from './src/year-picker-panel.vue'
import DayPickerPanel from './src/day-picker-panel.vue'
import { props, MONTH_LIST, WEEK_HEADER } from './props'
import { isArray, toNumber } from '../utils/shared'
import { pack } from '../locale'

const currentDate = dayjs().format('YYYY-MM-D')
const [currentYear, currentMonth] = currentDate?.split('-')
const monthDes = MONTH_LIST.find((month) => month.index === currentMonth)

export default defineComponent({
  name: 'VarDatePicker',

  components: {
    MonthPickerPanel,
    YearPickerPanel,
    DayPickerPanel,
  },

  props,

  data: () => ({
    isYearPanel: false,
    isMonthPanel: false,
    rangeDone: true,
    chooseMonth: undefined,
    chooseYear: undefined,
    chooseDay: undefined,
    previewMonth: monthDes,
    previewYear: currentYear,
    reverse: false,
    chooseMonths: [],
    chooseDays: [],
    chooseRangeMonth: [],
    chooseRangeDay: [],
  }),

  computed: {
    pack() {
      return pack.value
    },

    currentDate() {
      return currentDate
    },

    componentProps() {
      return {
        allowedDates: this.allowedDates,
        type: this.type,
        color: this.color,
        firstDayOfWeek: this.firstDayOfWeek,
        min: this.min,
        max: this.max,
        showCurrent: this.showCurrent,
        multiple: this.multiple,
        range: this.range,
      }
    },

    getChoose() {
      return {
        chooseMonth: this.chooseMonth,
        chooseYear: this.chooseYear,
        chooseDay: this.chooseDay,
        chooseMonths: this.chooseMonths,
        chooseDays: this.chooseDays,
        chooseRangeMonth: this.chooseRangeMonth,
        chooseRangeDay: this.chooseRangeDay,
      }
    },

    getPreview() {
      return {
        previewMonth: this.previewMonth,
        previewYear: this.previewYear,
      }
    },

    getMonthTitle() {
      const { multiple, range, chooseRangeMonth, chooseMonth, pack, chooseMonths } = this

      if (range) {
        return chooseRangeMonth.length ? `${chooseRangeMonth[0]} ~ ${chooseRangeMonth[1]}` : ''
      }

      let monthName = ''
      if (chooseMonth) {
        monthName = pack.datePickerMonthDict?.[chooseMonth.index].name ?? ''
      }
      return multiple ? `${chooseMonths.length}${pack.datePickerSelected}` : monthName
    },

    getDateTitle() {
      const { multiple, range, chooseRangeDay, chooseDays, pack, chooseYear, chooseMonth, chooseDay } = this

      if (range) {
        const formatRangeDays = chooseRangeDay.map((date) => dayjs(date).format('YYYY-MM-DD'))

        return formatRangeDays.length ? `${formatRangeDays[0]} ~ ${formatRangeDays[1]}` : ''
      }

      if (multiple) return `${chooseDays.length}${pack.datePickerSelected}`

      if (!chooseYear || !chooseMonth || !chooseDay) return ''
      const weekIndex = dayjs(`${chooseYear}-${chooseMonth.index}-${chooseDay}`).day()
      const week = WEEK_HEADER.find((value) => value.index === `${weekIndex}`)
      const weekName = pack.datePickerWeekDict?.[week.index].name ?? ''

      const monthName = pack.datePickerMonthDict?.[chooseMonth.index].name ?? ''
      const showDay = chooseDay.padStart(2, '0')

      if (pack.lang === 'zh-CN') return `${chooseMonth.index}-${showDay} ${weekName.slice(0, 3)}`
      return `${weekName.slice(0, 3)}, ${monthName.slice(0, 3)} ${chooseDay}`
    },

    slotProps() {
      const { chooseYear, chooseMonth, chooseDay } = this

      const weekIndex = dayjs(`${chooseYear}-${chooseMonth?.index}-${chooseDay}`).day()
      const date = chooseDay ? chooseDay?.padStart(2, '0') : ''

      return {
        week: `${weekIndex}`,
        year: chooseYear ?? '',
        month: chooseMonth?.index ?? '',
        date,
      }
    },

    formatRange() {
      return this.getChoose.chooseRangeDay.map((choose) => dayjs(choose).format('YYYY-MM-DD'))
    },

    isSameYear() {
      return this.chooseYear === this.previewYear
    },

    isSameMonth() {
      return this.chooseMonth?.index === this.previewMonth.index
    },
  },

  watch: {
    value: {
      handler(newValue) {
        if (!this.checkValue() || this.invalidFormatDate(newValue) || !newValue) return

        if (this.range) {
          if (!isArray(newValue)) return

          this.rangeDone = newValue.length !== 1
          this.rangeInit(newValue, this.type)
        } else if (this.multiple) {
          if (!isArray(newValue)) return

          this.multipleInit(newValue, this.type)
        } else {
          this.dateInit(newValue)
        }
      },
      immediate: true,
    },
  },

  methods: {
    clickEl(type) {
      if (type === 'year') this.isYearPanel = true
      else if (type === 'month') this.isMonthPanel = true
      else {
        this.isYearPanel = false
        this.isMonthPanel = false
      }
    },

    updateRange(date, type) {
      const rangeDate = type === 'month' ? 'chooseRangeMonth' : 'chooseRangeDay'
      this[rangeDate] = this.rangeDone ? [date, date] : [this[rangeDate][0], date]
      this.rangeDone = !this.rangeDone

      if (this.rangeDone) {
        const isChangeOrder = dayjs(this[rangeDate][0]).isAfter(this[rangeDate][1])
        const date = isChangeOrder ? [this[rangeDate][1], this[rangeDate][0]] : [...this[rangeDate]]
        this.getListeners().onInput?.(date)
        this.getListeners().onChange?.(date)
      }
    },

    updateMultiple(date, type) {
      const multipleDates = type === 'month' ? this.chooseMonths : this.chooseDays
      const formatType = type === 'month' ? 'YYYY-MM' : 'YYYY-MM-DD'
      const formatDates = multipleDates.map((date) => dayjs(date).format(formatType))

      const index = formatDates.findIndex((choose) => choose === date)

      if (index === -1) formatDates.push(date)
      else formatDates.splice(index, 1)

      this.getListeners().onInput?.(formatDates)
      this.getListeners().onChange?.(formatDates)
    },

    getReverse(dateType, date) {
      const { chooseYear, chooseMonth, isSameYear, previewYear, isSameMonth, chooseDay, previewMonth } = this

      if (!chooseYear || !chooseMonth) return false
      if (!isSameYear) return chooseYear > previewYear
      if (dateType === 'month') return date.index < chooseMonth.index

      return isSameMonth ? date < toNumber(chooseDay) : chooseMonth.index > previewMonth.index
    },

    getChooseDay(day) {
      const {
        readonly,
        range,
        multiple,
        getListeners,
        getReverse,
        previewYear,
        previewMonth,
        updateRange,
        updateMultiple,
      } = this
      if (day < 0 || readonly) return

      this.reverse = getReverse('day', day)

      const date = `${previewYear}-${previewMonth.index}-${day}`
      const formatDate = dayjs(date).format('YYYY-MM-DD')

      if (range) updateRange(formatDate, 'day')
      else if (multiple) updateMultiple(formatDate, 'day')
      else {
        getListeners().onInput?.(formatDate)
        getListeners().onChange?.(formatDate)
      }
    },

    getChooseMonth(month) {
      const { type, readonly, range, multiple, getListeners, getReverse, previewYear, updateRange, updateMultiple } =
        this

      this.reverse = getReverse('month', month)

      if (type === 'month' && !readonly) {
        const date = `${previewYear}-${month.index}`

        if (range) updateRange(date, 'month')
        else if (multiple) updateMultiple(date, 'month')
        else {
          getListeners().onInput?.(date)
          getListeners().onChange?.(date)
        }
      } else {
        this.previewMonth = month
      }

      this.isMonthPanel = false
    },

    getChooseYear(year) {
      this.previewYear = `${year}`
      this.isYearPanel = false
      this.isMonthPanel = true
    },

    checkPreview(type, checkType) {
      const changeValue = checkType === 'prev' ? -1 : 1

      if (type === 'year') {
        this.previewYear = `${toNumber(this.previewYear) + changeValue}`
      } else {
        let checkIndex = toNumber(this.previewMonth.index) + changeValue

        if (checkIndex < 1) {
          this.previewYear = `${toNumber(this.previewYear) - 1}`
          checkIndex = 12
        }

        if (checkIndex > 12) {
          this.previewYear = `${toNumber(this.previewYear) + 1}`
          checkIndex = 1
        }

        this.previewMonth = MONTH_LIST.find((month) => toNumber(month.index) === checkIndex)
      }
    },

    checkValue() {
      const { multiple, range, value } = this

      if ((multiple || range) && !isArray(value)) {
        console.error('[Varlet] DatePicker: type of prop "value" should be an Array')
        return false
      }
      if (!multiple && !range && isArray(value)) {
        console.error('[Varlet] DatePicker: type of prop "value" should be a String')
        return false
      }
      return true
    },

    invalidFormatDate(date) {
      if (isArray(date)) return false

      if (date === 'Invalid Date') {
        console.error('[Varlet] DatePicker: "value" is an Invalid Date')
        return true
      }

      return false
    },

    rangeInit(value, type) {
      const rangeDate = type === 'month' ? 'chooseRangeMonth' : 'chooseRangeDay'
      const formatType = type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D'
      const formatDateList = value.map((choose) => dayjs(choose).format(formatType)).slice(0, 2)

      const isValid = this[rangeDate].some((date) => this.invalidFormatDate(date))
      if (isValid) return

      this[rangeDate] = formatDateList

      const isChangeOrder = dayjs(this[rangeDate][0]).isAfter(this[rangeDate][1])

      if (this[rangeDate].length === 2 && isChangeOrder) {
        this[rangeDate] = [this[rangeDate][1], this[rangeDate][0]]
      }
    },

    multipleInit(value, type) {
      const formatType = type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D'

      // 需要去重
      const formatDateList = Array.from(new Set(value.map((choose) => dayjs(choose).format(formatType))))

      if (type === 'month') {
        this.chooseMonths = formatDateList.filter((date) => date !== 'Invalid Date')
      } else {
        this.chooseDays = formatDateList.filter((date) => date !== 'Invalid Date')
      }
    },

    dateInit(value) {
      const formatDate = dayjs(value).format('YYYY-MM-D')

      if (this.invalidFormatDate(formatDate)) return

      const [yearValue, monthValue, dayValue] = formatDate.split('-')

      const monthDes = MONTH_LIST.find((month) => month.index === monthValue)

      this.chooseMonth = monthDes
      this.chooseYear = yearValue
      this.chooseDay = dayValue
      this.previewMonth = monthDes
      this.previewYear = yearValue
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../button/button';
@import '../icon/icon';
@import './date-picker';
</style>
