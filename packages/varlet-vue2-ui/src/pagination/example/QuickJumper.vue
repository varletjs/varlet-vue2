<template>
  <var-pagination :current="3" :total="120" :simple="false" show-quick-jumper />
</template>

<script>
import VarPagination from '../Pagination'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'
import { pack, use } from './locale'

export default {
  name: 'QuickJumper',

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
