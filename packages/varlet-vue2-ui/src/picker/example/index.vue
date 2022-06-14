<template>
  <div class="var-picker-example">
    <app-type>{{ pack.functionCall }}</app-type>
    <var-button type="primary" style="margin-bottom: 10px" block @click="picker">{{ pack.singlePicker }}</var-button>
    <var-button type="primary" style="margin-bottom: 10px" block @click="picker2">{{ pack.multiplePicker }}</var-button>
    <var-button type="primary" style="margin-bottom: 10px" block @click="picker3">{{ pack.cascadePicker }}</var-button>
    <var-button type="primary" style="margin-bottom: 10px" block @click="picker4">{{ pack.textFormatter }}</var-button>
    <var-button type="primary" style="margin-bottom: 10px" block @click="picker5">{{ pack.extension }}</var-button>

    <app-type>{{ pack.componentCall }}</app-type>
    <var-picker style="margin-bottom: 14px" :columns="columns" />
    <var-picker style="margin-bottom: 14px" :columns="columns2" />
    <var-picker style="margin-bottom: 14px" cascade :columns="columns3" />
    <var-picker style="margin-bottom: 14px" cascade :columns="columns4" :text-formatter="formatter" />
    <var-picker style="margin-bottom: 14px" :columns="columns5" @change="handleChange" />
  </div>
</template>

<script>
import Picker from '../index'
import VarButton from '../../button'
import Snackbar from '../../snackbar'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import area from '../../../json/area.json'
import dark from '../../themes/dark'
import { use, pack } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

const months = genCounts(12)

const leapYearFebruaryDates = genCounts(29)

const februaryDates = genCounts(28)

const oddMonthDates = genCounts(31)

const evenMonthDates = genCounts(30)

function isOddMonth(month) {
  return [1, 3, 5, 7, 8, 10, 12].includes(month)
}

function genCounts(length) {
  return Array.from({ length }, (_, index) => index + 1)
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

function genDates(year, month) {
  if (isLeapYear(year) && month === 2) {
    return leapYearFebruaryDates
  }

  if (!isLeapYear(year) && month === 2) {
    return februaryDates
  }

  if (isOddMonth(month)) {
    return oddMonthDates
  }

  return evenMonthDates
}

function genColumns(startYear, endYear) {
  const columns = []
  for (let year = startYear; year < endYear; year++) {
    columns.push({
      text: year,
      children: months.map((month) => {
        return {
          text: month,
          children: genDates(year, month).map((date) => {
            return { text: date }
          }),
        }
      }),
    })
  }

  return columns
}

const rawColumns = [
  [
    { label: '灰烬之灵', id: 1 },
    { label: '风暴之灵', id: 2 },
    { label: '大地之灵', id: 3 },
    { label: '虚空之灵', id: 4 },
  ],
  [
    { label: '灰烬之灵', id: 1 },
    { label: '风暴之灵', id: 2 },
    { label: '大地之灵', id: 3 },
    { label: '虚空之灵', id: 4 },
  ],
  [
    { label: '灰烬之灵', id: 1 },
    { label: '风暴之灵', id: 2 },
    { label: '大地之灵', id: 3 },
    { label: '虚空之灵', id: 4 },
  ],
]

const normalizedRawColumns = rawColumns.map((column) => {
  return column.map((option) => option.label)
})

export default {
  name: 'PickerExample',

  components: {
    VarPicker: Picker.Component,
    VarButton,
    AppType,
  },

  data: () => ({
    columns: [Array.from({ length: 20 }).map((_, index) => index)],
    columns2: [
      Array.from({ length: 20 }).map((_, index) => index),
      Array.from({ length: 20 }).map((_, index) => index),
      Array.from({ length: 20 }).map((_, index) => index),
    ],
    columns3: area,
    columns4: genColumns(1970, 2100),
    columns5: normalizedRawColumns,
  }),

  computed: {
    pack() {
      return pack.value
    },
    normalizedRawColumns() {
      return this.rawColumns.map((column) => {
        return column.map((option) => option.label)
      })
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark)
  },

  methods: {
    async picker() {
      await Picker(this.columns)
    },

    async picker2() {
      await Picker(this.columns2)
    },

    async picker3() {
      await Picker({
        cascade: true,
        columns: this.columns3,
      })
    },

    formatter(text, columnIndex) {
      if (columnIndex === 0) return `${text}年`
      if (columnIndex === 1) return `${text}月`
      if (columnIndex === 2) return `${text}日`
    },

    async picker4() {
      await Picker({
        cascade: true,
        columns: this.columns4,
        textFormatter: this.formatter,
      })
    },

    handleChange(_, [i1, i2, i3]) {
      const [c1, c2, c3] = rawColumns
      const ids = [c1[i1].id, c2[i2].id, c3[i3].id]
      Snackbar({
        content: ids.toString(),
      })
    },

    async picker5() {
      await Picker({
        columns: this.columns5,
        onChange: this.handleChange,
      })
    },
  },
}
</script>
