<template>
  <div class="var-pagination-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <div class="transformer">
      <var-pagination :current="3" :total="120" />
    </div>
    <app-type>{{ pack.hideSize }}</app-type>
    <div class="transformer">
      <var-pagination :current="3" :total="120" :show-size-changer="false" />
    </div>
    <app-type>{{ pack.showTotal }}</app-type>
    <div class="transformer">
      <var-pagination :current="3" :total="120" :show-total="(total) => `${pack.total} ${total} ${pack.item}`" />
    </div>
    <app-type>{{ pack.disabled }}</app-type>
    <div class="transformer">
      <var-pagination :current="3" :total="120" disabled />
    </div>
  </div>
</template>

<script>
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import VarPagination from '..'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'PaginationExample',

  components: {
    VarPagination,
    AppType,
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
}
</script>

<style lang="less" scoped>
.var-pagination-example {
  .transformer {
    transform: translateX(-10px);
  }
}
</style>
