<template>
  <div class="var-select-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <div>
      <div class="container"></div>
      <var-select :placeholder="pack.placeholder" v-model="value" @focus="focus" @blur="blur">
        <var-option label="吃饭" />
        <var-option label="睡觉" />
      </var-select>
    </div>
    <app-type>{{ pack.plainMode }}</app-type>
    <var-select :hint="false" :line="false" :placeholder="pack.placeholder" v-model="value2">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
    <app-type>{{ pack.relation }}</app-type>
    <var-select :placeholder="pack.placeholder" v-model="value6">
      <var-option :label="pack.eat" :value="1" />
      <var-option :label="pack.sleep" :value="2" />
    </var-select>
    <div class="relation">{{ pack.currentSelect }} {{ value6 }}</div>
    <app-type>{{ pack.disabled }}</app-type>
    <var-select :placeholder="pack.placeholder" disabled v-model="value4">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
    <app-type>{{ pack.readonly }}</app-type>
    <var-select :placeholder="pack.placeholder" readonly v-model="value3">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
    <app-type>{{ pack.clearable }}</app-type>
    <var-select :placeholder="pack.placeholder" clearable v-model="value8">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
    <app-type>{{ pack.displayIcon }}</app-type>
    <var-select :placeholder="pack.placeholder" v-model="value11">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="plus" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="minus" />
      </template>
      <template #default>
        <var-option :label="pack.eat" />
        <var-option :label="pack.sleep" />
      </template>
    </var-select>
    <app-type>{{ pack.multiple }}</app-type>
    <var-select :placeholder="pack.multiplePlaceholder" multiple v-model="value5">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
      <var-option :label="pack.play" />
      <var-option :label="pack.coding" />
    </var-select>
    <app-type>{{ pack.chipMultiple }}</app-type>
    <var-select :placeholder="pack.multiplePlaceholder" chip multiple v-model="value7">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
      <var-option :label="pack.play" />
      <var-option :label="pack.coding" />
    </var-select>
    <app-type>{{ pack.validate }}</app-type>
    <var-select
      :placeholder="pack.placeholder"
      :rules="[(v) => v === pack.rest || pack.mustSelectRest]"
      v-model="value9"
    >
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
      <var-option :label="pack.rest" />
    </var-select>
    <app-type>{{ pack.multipleValidate }}</app-type>
    <var-select
      :placeholder="pack.multiplePlaceholder"
      multiple
      :rules="[(v) => v.length >= 2 || pack.mustSelectMoreThan]"
      v-model="value10"
    >
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
      <var-option :label="pack.play" />
      <var-option :label="pack.coding" />
    </var-select>

    <app-type>{{ pack.offsetY }}</app-type>
    <var-select :placeholder="pack.placeholder" v-model="value12" :offset-y="-138">
      <var-option :label="pack.emberSprit" />
      <var-option :label="pack.stormSpirit" />
      <var-option :label="pack.voidSpirit" />
      <var-option :label="pack.earthSprit" />
    </var-select>
    <div class="space"></div>
  </div>
</template>

<script>
import VarSelect from '..'
import VarOption from '../../option'
import VarIcon from '../../icon'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'SelectExample',

  components: {
    VarSelect,
    VarOption,
    VarIcon,
    AppType,
  },

  data: () => ({
    value: undefined,
    value2: undefined,
    value3: undefined,
    value4: undefined,
    value5: [],
    value6: undefined,
    value7: [],
    value8: undefined,
    value9: undefined,
    value10: [],
    value11: undefined,
    value12: undefined,
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, (lang) => {
      use(lang)
      this.value = undefined
      this.value2 = undefined
      this.value3 = undefined
      this.value4 = undefined
      this.value6 = undefined
      this.value5 = []
      this.value7 = []
      this.value8 = undefined
      this.value9 = undefined
      this.value10 = []
      this.value11 = undefined
      this.value12 = undefined
    })

    watchDarkMode(this, dark)
  },

  methods: {
    blur() {
      console.log('blur')
    },

    focus() {
      console.log('focus')
    },
  },
}
</script>

<style scoped lang="less">
.relation {
  margin: 10px 0;
}

.space {
  height: 160px;
}

.prepend-icon {
  margin-right: 2px;
}

.append-icon {
  margin-left: 2px;
}
</style>
