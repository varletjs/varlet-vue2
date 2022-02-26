<template>
  <var-tab-item />
</template>

<script>
import VarTabItem from '..'
import dark from '../../themes/dark'
import { defineComponent } from '../../utils/create'
import { watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default defineComponent({
  name: 'TabItemExample',

  components: {
    VarTabItem,
  },

  created() {
    watchDarkMode(this, dark)
  },
})
</script>
