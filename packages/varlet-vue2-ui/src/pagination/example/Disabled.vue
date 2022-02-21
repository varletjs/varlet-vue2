<template>
  <var-pagination :current="6" :total="115" :simple="false" disabled />
</template>

<script>
import VarPagination from '../Pagination'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'
import { pack, use } from './locale'

export default {
  name: 'Disabled',

  components: {
    VarPagination,
  },

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use, 'pc')
    watchDarkMode(this, dark)
  },
}
</script>

<style lang="less" scoped>
ul {
  margin: 0;
  padding: 10px 0;
  box-shadow: none;
}
</style>
