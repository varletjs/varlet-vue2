<template>
  <div class="var-month-picker__panel">
    <div class="var-month-picker__content">
      <panel-header
        ref="headerEl"
        type="month"
        :date="preview"
        :disabled="panelBtnDisabled"
        @check-panel="clickYear"
        @check-date="checkDate"
      />
      <transition :name="`var-date-picker${reverse ? '-reverse' : ''}-translatex`">
        <ul :key="panelKey">
          <li v-for="month in MONTH_LIST" :key="month.index">
            <var-button
              type="primary"
              class="var-month-picker__button"
              var-month-picker-cover
              :ripple="false"
              v-bind="{
                ...buttonProps(month.index),
              }"
              @click="(event) => chooseMonth(month, event)"
            >
              {{ getMonthAbbr(month.index) }}
            </var-button>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '../../utils/create'
import dayjs from 'dayjs/esm'
import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter'
import { MONTH_LIST } from '../props'
import PanelHeader from './panel-header.vue'
import VarButton from '../../button'
import { toNumber } from '../../utils/shared'
import { pack } from '../../locale'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

export default defineComponent({
  name: 'MonthPickerPanel',

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
    clickYear: {
      type: Function,
      required: true,
    },
    componentProps: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
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

    MONTH_LIST() {
      return MONTH_LIST
    },

    currentYear() {
      return this.current.split('-')[0]
    },

    currentMonth() {
      return this.current.split('-')[1]
    },

    isSameYear() {
      return this.choose.chooseYear === this.preview.previewYear
    },

    isCurrentYear() {
      return this.preview.previewYear === this.currentYear
    },
  },

  watch: {
    'preview.previewYear': {
      handler(year) {
        const {
          componentProps: { min, max },
        } = this

        if (max) this.panelBtnDisabled.right = !dayjs(`${toNumber(year) + 1}`).isSameOrBefore(dayjs(max), 'year')
        if (min) this.panelBtnDisabled.left = !dayjs(`${toNumber(year) - 1}`).isSameOrAfter(dayjs(min), 'year')
      },
      immediate: true,
    },
  },

  methods: {
    getMonthAbbr(key) {
      return this.pack.datePickerMonthDict?.[key].abbr ?? ''
    },

    inRange(key) {
      const {
        preview: { previewYear },
        componentProps: { min, max },
      } = this
      let isBeforeMax = true
      let isAfterMin = true
      const previewDate = `${previewYear}-${key}`
      if (max) isBeforeMax = dayjs(previewDate).isSameOrBefore(dayjs(max), 'month')
      if (min) isAfterMin = dayjs(previewDate).isSameOrAfter(dayjs(min), 'month')
      return isBeforeMax && isAfterMin
    },

    shouldChoose(val) {
      const {
        choose: { chooseMonths, chooseDays, chooseRangeMonth },
        componentProps: { type, range },
      } = this
      if (range) {
        if (!chooseRangeMonth.length) return false
        const isBeforeMax = dayjs(val).isSameOrBefore(dayjs(chooseRangeMonth[1]), 'month')
        const isAfterMin = dayjs(val).isSameOrAfter(dayjs(chooseRangeMonth[0]), 'month')
        return isBeforeMax && isAfterMin
      }
      if (type === 'month') return chooseMonths.includes(val)
      return chooseDays.some((value) => value.includes(val))
    },

    buttonProps(key) {
      const {
        choose: { chooseMonth },
        preview: { previewYear },
        componentProps: { allowedDates, color, multiple, range },
        shouldChoose,
        isSameYear,
        inRange,
        isCurrentYear,
        currentMonth,
      } = this

      const val = `${previewYear}-${key}`
      const monthExist = () => {
        if (range || multiple) return shouldChoose(val)
        return chooseMonth?.index === key && isSameYear
      }

      const computeDisabled = () => {
        if (!inRange(key)) return true
        if (!allowedDates) return false
        return !allowedDates(val)
      }

      const disabled = computeDisabled()

      const computeText = () => {
        if (disabled) return true
        if (range || multiple) return !shouldChoose(val)
        return !isSameYear || chooseMonth?.index !== key
      }

      const computeOutline = () => {
        // 不满足基本条件， 基本条件为当前年、当前月并且 showCurrent 为true的情况
        if (!(isCurrentYear && currentMonth === key && this.componentProps.showCurrent)) return false
        // 存在着 disabled
        if ((range || multiple || isSameYear) && disabled) return true
        // 在选择范围之外
        if (range || multiple) return !shouldChoose(val)
        // 同一年但是未被选择的情况
        if (isSameYear) return chooseMonth?.index !== currentMonth
        return true
      }

      const textColorOrCover = () => {
        if (disabled) return ''
        if (computeOutline()) return color ?? ''
        if (monthExist()) return ''
        return 'var-date-picker-color-cover'
      }

      const isCover = textColorOrCover().startsWith('var-date-picker')

      return {
        disabled,
        outline: computeOutline(),
        text: computeText(),
        color: !computeText() ? color : '',
        textColor: isCover ? '' : textColorOrCover(),
        'var-date-picker-color-cover': isCover,
        class: {
          'var-month-picker__button-disabled': disabled,
        },
      }
    },

    chooseMonth(month, event) {
      const buttonEl = event.currentTarget
      if (buttonEl.classList.contains('var-month-picker__button-disabled')) return

      this.$emit('choose-month', month)
    },

    checkDate(checkType) {
      this.reverse = checkType === 'prev'
      this.panelKey += checkType === 'prev' ? -1 : 1
      this.$emit('check-preview', 'year', checkType)
    },

    forwardRef(checkType) {
      this.$refs.headerEl.checkDate(checkType)
    },
  },
})
</script>
