<template>
  <div class="var-switch-outer">
    <app-type>{{ pack.basicUsage }}</app-type>
    <div class="var-switch__example-block">
      <var-switch v-model="value" />
    </div>
    <app-type>{{ pack.notAvailable }}</app-type>
    <div class="var-switch__example-block">
      <var-switch v-model="value1" disabled />
      <var-switch v-model="value1" readonly />
    </div>
    <app-type>{{ pack.customColor }}</app-type>
    <div class="var-switch__example-block">
      <var-switch v-model="value2" :ripple="false" />
      <var-switch v-model="value2" color="#ff9f00" close-color="#f5cb90" />
    </div>
    <app-type>{{ pack.size }}</app-type>
    <div class="var-switch__example-block">
      <var-switch v-model="value3" size="15" />
      <var-switch v-model="value3" />
      <var-switch v-model="value3" size="25" />
    </div>
    <app-type>{{ pack.loading }}</app-type>
    <div class="var-switch__example-block">
      <var-switch :value="true" loading />
      <var-switch :value="true" size="25" loading loading-color="#ff9f00" />
    </div>
    <app-type>{{ pack.validateValue }}</app-type>
    <var-switch v-model="value4" :rules="[(v) => v === true || pack.state]" />
  </div>
</template>

<script>
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import VarSwitch from '..'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'SwitchExample',

  components: {
    VarSwitch,
    AppType,
  },

  data() {
    return {
      value: true,
      value1: true,
      value2: true,
      value3: true,
      value4: true,
    }
  },

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark)
  },
}
</script>

<style scoped lang="less">
.var-switch__example-block {
  display: flex;
  align-items: center;
}

.var-switch {
  margin-right: 30px;
}
</style>
