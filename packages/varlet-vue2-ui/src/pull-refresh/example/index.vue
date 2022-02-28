<template>
  <var-pull-refresh @refresh="refresh" v-model="isRefresh" success-duration="2000">
    <var-cell v-for="(item, index) in data" :key="index" border>{{ item + ' ' + (index + 1) }}</var-cell>
  </var-pull-refresh>
</template>

<script>
import VarPullRefresh from '..'
import VarCell from '../../cell'
import dark from '../../themes/dark'
import { watchDarkMode } from '@varlet-vue2/cli/site/utils'

const data1 = Array(10).fill('List Item')
const data2 = Array(10).fill('This is new List Item')

export default {
  name: 'PullRefreshExample',

  components: {
    VarPullRefresh,
    VarCell,
  },

  data: () => ({
    isRefresh: false,
    data: data1,
  }),

  created() {
    watchDarkMode(this, dark)
  },

  mounted() {
    document.body.addEventListener('touchmove', this.prevent, { passive: false })
  },

  beforeDestroy() {
    document.body.removeEventListener('touchmove', this.prevent)
  },

  methods: {
    refresh() {
      window.setTimeout(() => {
        this.data = this.data[0] === 'List Item' ? data2 : data1
        this.isRefresh = false
      }, 2000)
    },

    prevent(event) {
      event.preventDefault()
    },
  },
}
</script>

<style lang="less" scoped>
.var-pull-refresh {
  margin-top: 18px;
}

.pull-refresh__example {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    min-height: 40px;
    line-height: 40px;
    padding: 0 16px;
    border-bottom: 1px solid #ccc;

    &:first-child {
      border-top: 1px solid #ccc;
    }
  }
}
</style>
