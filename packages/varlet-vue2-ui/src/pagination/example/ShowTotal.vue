<template>
  <div class="var-pagination-showTotal">
    <var-pagination
      :current="3"
      :size="10"
      :total="120"
      :simple="false"
      :show-total="(total) => `${pack.pcTotal} ${total} ${pack.item}`"
    />
    <var-pagination
      :current="3"
      :size="10"
      :total="120"
      :simple="false"
      :show-total="(total, range) => `${pack.current} ${range[0]}-${range[1]} / ${pack.pcTotal} ${total} ${pack.item}`"
    />
  </div>
</template>

<script>
import VarPagination from '../Pagination'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'
import { pack, use } from './locale'

export default {
  name: 'ShowTotal',

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
.var-pagination-showTotal {
  ul {
    margin: 0;
    padding: 10px 0;
    box-shadow: none;
  }
}
</style>
