<template>
  <div>
    <app-type>{{ pack.toggleTheme }}</app-type>
    <var-button block @click="toggleTheme">{{ pack.toggleTheme }}</var-button>
  </div>
</template>

<script>
import VarButton from '../../button'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { use, pack } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  components: {
    AppType,
    VarButton,
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

  methods: {
    toggleTheme() {
      window.toggleTheme()
    },
  },
}
</script>
