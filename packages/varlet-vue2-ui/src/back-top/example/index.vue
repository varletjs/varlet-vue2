<template>
  <div class="var-backTop-example">
    <var-cell v-for="list in lists" :key="list">Scroll to bottom {{ list }}</var-cell>
    <var-back-top :duration="300" />
  </div>
</template>

<script>
import VarBackTop from '..'
import VarCell from '../../cell'
import dark from '../../themes/dark'
import { watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'BackTopExample',

  components: {
    VarBackTop,
    VarCell,
  },

  data: () => ({
    lists: [...Array(100).keys()],
  }),

  created() {
    watchDarkMode(this, dark)
  },
}
</script>
