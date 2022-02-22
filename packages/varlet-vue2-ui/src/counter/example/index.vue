<template>
  <div class="var-counter-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-counter v-model="value" />

    <app-type>{{ pack.range }}</app-type>
    <var-counter :min="0" :max="5" v-model="value2" />

    <app-type>{{ pack.step }}</app-type>
    <var-counter :step="10" v-model="value3" />

    <app-type>{{ pack.toFixed }}</app-type>
    <var-counter :decimal-length="1" v-model="value4" />

    <app-type>{{ pack.size }}</app-type>
    <var-counter input-text-size="18px" input-width="50px" button-size="36px" v-model="value5" />

    <app-type>{{ pack.disabled }}</app-type>
    <var-counter disabled v-model="value6" />

    <app-type>{{ pack.readonly }}</app-type>
    <var-counter readonly v-model="value7" />

    <app-type>{{ pack.lazyChange }}</app-type>
    <var-counter lazy-change v-model="value8" @before-change="handleBeforeChange" />

    <app-type>{{ pack.validate }}</app-type>
    <var-counter :rules="[(v) => v > 5 || pack.validateMessage]" v-model="value9" />

    <div class="space"></div>
  </div>
</template>

<script>
import VarCounter from '..'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'CounterExample',

  components: {
    VarCounter,
    AppType,
  },

  data: () => ({
    value: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0,
    value7: 0,
    value8: 0,
    value9: 0,
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
    handleBeforeChange(value, change) {
      setTimeout(() => {
        change(value)
      }, 500)
    },
  },
}
</script>

<style scoped lang="less">
.var-counter-example {
  .space {
    height: 40px;
  }
}
</style>
