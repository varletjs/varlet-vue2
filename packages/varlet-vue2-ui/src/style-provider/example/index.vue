<template>
  <div class="var-styleProvider-example">
    <app-type>{{ pack.componentCall }}</app-type>
    <var-style-provider :style-vars="styleVars">
      <var-rate v-model="state.score" />
      <var-switch v-model="state.license" />
      <var-button style="margin-top: 10px" type="primary" block @click="toggleTheme">{{ pack.toggleTheme }}</var-button>
    </var-style-provider>

    <app-type>{{ pack.functionCall }}</app-type>
    <var-button type="primary" block @click="toggleRootTheme">{{ pack.toggleRootTheme }}</var-button>
  </div>
</template>

<script>
import StyleProvider from '../index'
import VarRate from '../../rate'
import VarSwitch from '../../switch'
import VarButton from '../../button'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { getBrowserThemes, watchLang } from '@varlet-vue2/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'StyleProviderExample',

  components: {
    VarStyleProvider: StyleProvider.Component,
    VarRate,
    VarSwitch,
    VarButton,
    AppType,
  },

  data: () => ({
    state: {
      score: 5,
      license: true,
    },
    styleVars: null,
    successTheme: {
      '--rate-primary-color': 'var(--color-success)',
      '--button-primary-color': 'var(--color-success)',
      '--switch-handle-active-background': 'var(--color-success)',
      '--switch-track-active-background': 'var(--color-success)',
    },
    rootStyleVars: null,
    darkTheme: {
      '--color-primary': '#3f51b5',
    },
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)

    this.$on('hook:beforeDestroy', () => {
      StyleProvider(getBrowserThemes() === 'darkThemes' ? dark : null)
    })
  },

  methods: {
    toggleTheme() {
      this.styleVars = this.styleVars ? null : this.successTheme
    },

    toggleRootTheme() {
      this.rootStyleVars = this.rootStyleVars ? null : this.darkTheme
      StyleProvider(this.rootStyleVars)
    },
  },
}
</script>
