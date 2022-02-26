<template>
  <var-tabs-items />
</template>

<script>
import VarTabsItems from '..'
import dark from '../../themes/dark'
import { defineComponent } from '../../utils/create'
import { watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default defineComponent({
  name: 'TabsItemsExample',

  components: {
    VarTabsItems,
  },

  created() {
    watchDarkMode(this, dark)
  },

  setup() {},
})
</script>
