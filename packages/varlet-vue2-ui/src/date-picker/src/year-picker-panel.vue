<template>
  <ul class="var-year-picker__panel">
    <li
      v-for="year in yearList"
      :key="year"
      :class="[year === toNumber(preview) ? 'var-year-picker__panel--active' : null]"
      :style="{ color: year === toNumber(preview) ? componentProps.color : '' }"
      @click="chooseYear(year)"
    >
      {{ year }}
    </li>
  </ul>
</template>

<script>
import { defineComponent } from '../../utils/create'
import dayjs from 'dayjs/esm'
import { toNumber } from '../../utils/shared'

export default defineComponent({
  name: 'YearPickerPanel',

  props: {
    preview: {
      type: String,
    },
    componentProps: {
      type: Object,
      required: true,
    },
  },

  computed: {
    yearList() {
      const list = []
      const {
        preview,
        componentProps: { max, min },
      } = this

      if (!preview) return list

      let yearRange = [toNumber(preview) + 100, toNumber(preview) - 100]

      if (max) {
        const formatMax = dayjs(max).format('YYYY-MM-D')
        const year = toNumber(formatMax.split('-')[0])

        if (year < yearRange[0] && year > yearRange[1]) yearRange = [year, yearRange[1]]
        if (year <= yearRange[1]) return [year]
      }

      if (min) {
        const formatMin = dayjs(min).format('YYYY-MM-D')
        const year = toNumber(formatMin.split('-')[0])

        if (year < yearRange[0] && year > yearRange[1]) yearRange = [yearRange[0], year]
        if (year >= yearRange[0]) return [year]
      }

      for (let i = yearRange[0]; i >= yearRange[1]; i--) {
        list.push(i)
      }
      return list
    },
  },

  mounted() {
    const activeEl = document.querySelector('.var-year-picker__panel--active')
    activeEl?.scrollIntoView({
      block: 'center',
    })
  },

  methods: {
    toNumber,

    chooseYear(year) {
      this.$emit('choose-year', year)
    },
  },
})
</script>
