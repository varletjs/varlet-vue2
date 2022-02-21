<template>
  <div class="var-input-example">
    <app-type class="pb">{{ pack.basicUsage }}</app-type>
    <var-input :placeholder="pack.placeholder" v-model="value" />

    <app-type class="pb">{{ pack.plainMode }}</app-type>
    <var-input :hint="false" :line="false" :placeholder="pack.placeholder" v-model="value7" />

    <app-type class="pb">{{ pack.textarea }}</app-type>
    <var-input :placeholder="pack.placeholder" textarea v-model="value2" />

    <app-type class="pb">{{ pack.maxlength }}</app-type>
    <var-input :placeholder="pack.placeholder" :maxlength="10" v-model="value8" />

    <app-type class="pb">{{ pack.disabled }}</app-type>
    <var-input :placeholder="pack.placeholder" disabled v-model="value3" />

    <app-type class="pb">{{ pack.readonly }}</app-type>
    <var-input :placeholder="pack.placeholder" readonly v-model="value4" />

    <app-type class="pb">{{ pack.clearable }}</app-type>
    <var-input :placeholder="pack.placeholder" clearable v-model="value5" />

    <app-type class="pb">{{ pack.displayIcon }}</app-type>
    <var-input :placeholder="pack.placeholder" v-model="value6">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="plus" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="minus" />
      </template>
    </var-input>

    <app-type>{{ pack.validate }}</app-type>
    <var-input :placeholder="pack.placeholder" :rules="[(v) => v.length > 6 || pack.maxMessage]" v-model="value9" />

    <div style="height: 40px"></div>
  </div>
</template>

<script>
import VarInput from '..'
import VarIcon from '../../icon'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { use, pack } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'InputExample',

  components: {
    VarInput,
    VarIcon,
    AppType,
  },

  data: () => ({
    value: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: '',
    value9: '',
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, (lang) => {
      use(lang)
      this.value5 = this.pack.clearableText
    })
    watchDarkMode(this, dark)
  },
}
</script>

<style scoped lang="less">
.var-input-example {
  .prepend-icon {
    margin-right: 2px;
  }

  .append-icon {
    margin-left: 2px;
  }

  .pb {
    padding-bottom: 10px;
  }
}
</style>
