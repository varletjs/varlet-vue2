<template>
  <div class="var-datePicker-example">
    <div>
      <app-type>{{ pack.basicUsage }}</app-type>
      <var-date-picker v-model="date1" />
    </div>
    <div>
      <app-type>{{ pack.monthPicker }}</app-type>
      <var-date-picker type="month" v-model="date" shadow />
    </div>
    <div>
      <app-type>{{ pack.multiple }}</app-type>
      <var-date-picker type="date" v-model="date2" multiple />
    </div>
    <div>
      <app-type>{{ pack.range }}</app-type>
      <var-date-picker type="date" v-model="date3" range />
    </div>
    <div>
      <app-type>{{ pack.dateLimit }}</app-type>
      <var-date-picker type="date" v-model="date4" min="2020-10-15" max="2021-01-15" :allowed-dates="allowedDates1" />
    </div>
    <div style="padding-bottom: 20px">
      <app-type>{{ pack.custom }}</app-type>
      <var-date-picker
        type="month"
        :allowed-dates="allowedDates"
        v-model="date5"
        max="2022-01"
        min="2016-07"
        shadow
        header-color="purple"
        color="#7bb872"
        first-day-of-week="1"
        @change="change"
      >
        <template #year="{ year }">
          <span>{{ year }}{{ pack.year }}</span>
        </template>
        <template #month="{ year, month }">
          <span>{{ year }}{{ pack.divider }}{{ month }}{{ pack.month }}</span>
        </template>
      </var-date-picker>
    </div>
  </div>
</template>

<script>
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import VarDatePicker from '..'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'DatePickerExample',

  components: {
    AppType,
    VarDatePicker,
  },

  data: () => ({
    date: '2021-01',
    date1: '2021-04-08',
    date2: ['', ''],
    date3: ['2021-02-01', '2021-02-15'],
    date4: '2020-11-11',
    date5: '2021-02',
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark)
  },

  methods: {
    allowedDates(val) {
      return parseInt(val.split('-')[1], 10) % 2 === 1
    },

    allowedDates1(val) {
      return parseInt(val.split('-')[2], 10) % 2 === 1
    },

    change(date) {
      console.log(date)
    },
  },
}
</script>
