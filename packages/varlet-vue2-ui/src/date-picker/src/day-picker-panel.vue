<template>
  <div class="var-day-picker__panel">
    <div class="var-day-picker__content">
      <panel-header
        ref="headerEl"
        type="day"
        :date="preview"
        :disabled="panelBtnDisabled"
        @check-panel="clickMonth"
        @check-date="checkDate"
      />
      <transition :name="`var-date-picker${reverse ? '-reverse' : ''}-translatex`">
        <div :key="panelKey">
          <ul class="var-day-picker__head">
            <li v-for="week in sortWeekList" :key="week.index">{{ getDayAbbr(week.index) }}</li>
          </ul>
          <ul class="var-day-picker__body">
            <li v-for="(day, index) in days" :key="index">
              <var-button
                type="primary"
                class="var-day-picker__button"
                :class="{
                  'var-day-picker__button--usable': day > 0,
                }"
                var-day-picker-cover
                round
                :ripple="false"
                v-bind="{
                  ...buttonProps(day),
                }"
                @click="(event) => chooseDay(day, event)"
              >
                {{ filterDay(day) }}
              </var-button>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs/esm'
import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter'
import PanelHeader from './panel-header.vue'
import VarButton from '../../button'
import { defineComponent } from '../../utils/create'
import { WEEK_HEADER } from '../props'
import { toNumber } from '../../utils/shared'
import { pack } from '../../locale'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

export default defineComponent({
  name: 'DayPickerPanel',

  components: {
    VarButton,
    PanelHeader,
  },

  props: {
    choose: {
      type: Object,
      required: true,
    },
    preview: {
      type: Object,
      required: true,
    },
    current: {
      type: String,
      required: true,
    },
    clickMonth: {
      type: Function,
      required: true,
    },
    componentProps: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    days: [],
    reverse: false,
    panelKey: 0,
    panelBtnDisabled: {
      left: false,
      right: false,
    },
  }),

  computed: {
    pack() {
      return pack.value
    },

    currentYear() {
      return this.current.split('-')[0]
    },

    currentMonth() {
      return this.current.split('-')[1]
    },

    currentDay() {
      return this.current.split('-')[2]
    },

    isCurrent() {
      return this.preview.previewYear === this.currentYear && this.preview.previewMonth.index === this.currentMonth
    },

    isSame() {
      return (
        this.choose.chooseYear === this.preview.previewYear &&
        this.choose.chooseMonth?.index === this.preview.previewMonth.index
      )
    },

    sortWeekList() {
      const index = WEEK_HEADER.findIndex((week) => week.index === this.componentProps.firstDayOfWeek)
      if (index === -1 || index === 0) return WEEK_HEADER
      return WEEK_HEADER.slice(index).concat(WEEK_HEADER.slice(0, index))
    },
  },

  mounted() {
    this.initDate()
    this.initHeader()
  },

  watch: {
    preview() {
      this.initDate()
      this.initHeader()
    },
  },

  methods: {
    getDayAbbr(key) {
      return this.pack.datePickerWeekDict?.[key].abbr ?? ''
    },

    filterDay(day) {
      return day > 0 ? day : ''
    },

    initDate() {
      const {
        preview: { previewMonth, previewYear },
      } = this

      const monthNum = dayjs(`${previewYear}-${previewMonth.index}`).daysInMonth()
      const firstDayToWeek = dayjs(`${previewYear}-${previewMonth.index}-01`).day()
      const index = this.sortWeekList.findIndex((week) => week.index === `${firstDayToWeek}`)
      this.days = [...Array(index).fill(-1), ...Array.from(Array(monthNum + 1).keys())].filter((value) => value)
    },

    initHeader() {
      const {
        preview: { previewYear, previewMonth },
        componentProps: { max, min },
      } = this

      if (max) {
        const date = `${previewYear}-${toNumber(previewMonth.index) + 1}`
        this.panelBtnDisabled.right = !dayjs(date).isSameOrBefore(dayjs(max), 'month')
      }

      if (min) {
        const date = `${previewYear}-${toNumber(previewMonth.index) - 1}`
        this.panelBtnDisabled.left = !dayjs(date).isSameOrAfter(dayjs(min), 'month')
      }
    },

    inRange(day) {
      const {
        preview: { previewYear, previewMonth },
        componentProps: { min, max },
      } = this

      let isBeforeMax = true
      let isAfterMin = true
      const previewDate = `${previewYear}-${previewMonth.index}-${day}`

      if (max) isBeforeMax = dayjs(previewDate).isSameOrBefore(dayjs(max), 'day')
      if (min) isAfterMin = dayjs(previewDate).isSameOrAfter(dayjs(min), 'day')

      return isBeforeMax && isAfterMin
    },

    shouldChoose(val) {
      const {
        choose: { chooseDays, chooseRangeDay },
        componentProps: { range },
      } = this

      if (range) {
        if (!chooseRangeDay.length) return false

        const isBeforeMax = dayjs(val).isSameOrBefore(dayjs(chooseRangeDay[1]), 'day')
        const isAfterMin = dayjs(val).isSameOrAfter(dayjs(chooseRangeDay[0]), 'day')
        return isBeforeMax && isAfterMin
      }

      return chooseDays.includes(val)
    },

    buttonProps(day) {
      if (day < 0) {
        return {
          text: true,
          outline: false,
          textColor: '',
        }
      }

      const {
        choose: { chooseDay },
        preview: { previewYear, previewMonth },
        componentProps: { allowedDates, color, multiple, range },
        shouldChoose,
        isSame,
        inRange,
        isCurrent,
        currentDay,
      } = this

      const val = `${previewYear}-${previewMonth.index}-${day}`

      const dayExist = () => {
        if (range || multiple) return shouldChoose(val)

        return toNumber(chooseDay) === day && isSame
      }

      const computeDisabled = () => {
        if (!inRange(day)) return true
        if (!allowedDates) return false

        return !allowedDates(val)
      }
      const disabled = computeDisabled()

      const computeText = () => {
        if (disabled) return true
        if (range || multiple) return !shouldChoose(val)

        return !isSame || toNumber(chooseDay) !== day
      }

      const computeOutline = () => {
        // 不满足基本条件，基本条件为当前年、当前月、当前日并且 showCurrent 为true的情况
        if (!(isCurrent && toNumber(currentDay) === day && this.componentProps.showCurrent)) return false

        // 存在着 disabled
        if ((range || multiple || isSame) && disabled) return true

        // 在选择范围之外
        if (range || multiple) return !shouldChoose(val)

        // 同一年但是未被选择的情况
        if (isSame) return chooseDay !== currentDay

        return true
      }

      const textColorOrCover = () => {
        if (disabled) return ''
        if (computeOutline()) return color ?? ''
        if (dayExist()) return ''

        return 'var-date-picker-color-cover'
      }

      const isCover = textColorOrCover().startsWith('var-date-picker')

      return {
        disabled,
        text: computeText(),
        outline: computeOutline(),
        textColor: isCover ? '' : textColorOrCover(),
        'var-date-picker-color-cover': isCover,
        class: {
          'var-day-picker__button-disabled': disabled,
        },
      }
    },

    checkDate(checkType) {
      this.reverse = checkType === 'prev'
      this.panelKey += checkType === 'prev' ? -1 : 1
      this.$emit('check-preview', 'month', checkType)
    },

    chooseDay(day, event) {
      const buttonEl = event.currentTarget
      if (buttonEl.classList.contains('var-day-picker__button-disabled')) return

      this.$emit('choose-day', day)
    },

    forwardRef(checkType) {
      this.$refs.headerEl.checkDate(checkType)
    },
  },
})
</script>
