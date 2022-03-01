<template>
  <div class="var-list-example">
    <var-tabs :active.sync="current" sticky offset-top="54px" style="margin-bottom: 10px">
      <var-tab>{{ pack.basicUsage }}</var-tab>
      <var-tab>{{ pack.loadFail }}</var-tab>
      <var-tab>{{ pack.tipText }}</var-tab>
    </var-tabs>

    <var-tabs-items :active.sync="current">
      <var-tab-item>
        <var-list :finished="finished" :loading.sync="loading" @load="load">
          <var-cell :key="d" v-for="d in list"> {{ pack.listItem }}: {{ d }} </var-cell>
        </var-list>
      </var-tab-item>
      <var-tab-item>
        <var-list :finished="finished2" :error.sync="error" :loading.sync="loading2" @load="load2">
          <var-cell :key="d" v-for="d in list2"> {{ pack.listItem }}: {{ d }} </var-cell>
        </var-list>
      </var-tab-item>
      <var-tab-item>
        <var-list
          :loading-text="pack.loadingText"
          :finished-text="pack.finishedText"
          :error-text="pack.errorText"
          :finished="finished3"
          :loading.sync="loading3"
          @load="load3"
        >
          <var-cell :key="d" v-for="d in list3"> {{ pack.listItem }}: {{ d }} </var-cell>
        </var-list>
      </var-tab-item>
    </var-tabs-items>
  </div>
</template>

<script>
import VarList from '..'
import VarCell from '../../cell'
import VarTabs from '../../tabs'
import VarTab from '../../tab'
import VarTabsItems from '../../tabs-items'
import VarTabItem from '../../tab-item'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'ListExample',

  components: {
    VarList,
    VarCell,
    VarTabs,
    VarTab,
    VarTabsItems,
    VarTabItem,
  },

  data: () => ({
    loading: false,
    loading2: false,
    loading3: false,
    finished: false,
    finished2: false,
    finished3: false,
    error: false,
    list: [],
    list2: [],
    list3: [],
    current: 0,
  }),

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
    load() {
      if (this.current !== 0) {
        this.loading = false
        return
      }

      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          this.list.push(this.list.length + 1)
        }

        this.loading = false

        if (this.list.length >= 60) {
          this.finished = true
        }
      }, 1000)
    },

    load2() {
      if (this.current !== 1) {
        this.loading2 = false
        return
      }

      setTimeout(() => {
        if (this.list2.length === 40) {
          this.error = true
          this.loading2 = false
          return
        }

        for (let i = 0; i < 20; i++) {
          this.list2.push(this.list2.length + 1)
        }

        this.loading2 = false
      }, 1000)
    },

    load3() {
      if (this.current !== 2) {
        this.loading3 = false
        return
      }

      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          this.list3.push(this.list3.length + 1)
        }

        this.loading3 = false

        if (this.list3.length >= 60) {
          this.finished3 = true
        }
      }, 1000)
    },
  },
}
</script>
