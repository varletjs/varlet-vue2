<template>
  <div class="var-picker-example">
    <app-type>{{ pack.functionCall }}</app-type>
    <var-button type="primary" style="margin-bottom: 10px" block @click="picker">{{ pack.singlePicker }}</var-button>
    <var-button type="primary" style="margin-bottom: 10px" block @click="picker2">{{ pack.multiplePicker }}</var-button>
    <var-button type="primary" style="margin-bottom: 10px" block @click="picker3">{{ pack.cascadePicker }}</var-button>

    <app-type>{{ pack.componentCall }}</app-type>
    <var-picker style="margin-bottom: 14px" :columns="columns" />
    <var-picker style="margin-bottom: 14px" :columns="columns2" />
    <var-picker style="margin-bottom: 14px" cascade :columns="columns3" />
  </div>
</template>

<script>
import Picker from '../index'
import VarButton from '../../button'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import area from '../../../json/area.json'
import context from '../../context'
import dark from '../../themes/dark'
import { use, pack } from './locale'
import { watchLang, watchPlatform, watchDarkMode } from '@varlet-vue2/cli/site/utils'

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
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark)

    const prevTouchmoveForbid = context.touchmoveForbid
    watchPlatform(this, (platform) => {
      if (platform === 'pc') {
        context.touchmoveForbid = false
      }
    })

    this.$on('hook:beforeDestroy', () => {
      context.touchmoveForbid = prevTouchmoveForbid
    })
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
  },
}
</script>
