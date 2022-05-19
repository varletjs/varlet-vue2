<template>
  <div class="var-snackbar-example">
    <div class="snackbar-demo">
      <app-type>{{ pack.componentCall }}</app-type>
      <var-button type="primary" block @click="changeValue('show1')">{{ pack.basicUsage }}</var-button>
      <var-button type="primary" block @click="changeValue('show3')">{{ pack.multiLine }}</var-button>
      <var-button type="primary" block @click="changeValue('show2')">{{ pack.bottomDisplay }}</var-button>
      <var-button type="primary" block @click="changeValue('show4')">{{ pack.hiddenTime }}</var-button>
      <var-button type="primary" block @click="changeValue('show9')">{{ pack.forbidClick }}</var-button>
    </div>

    <div class="snackbar-demo">
      <app-type>{{ pack.functionCall }}</app-type>
      <var-button type="warning" block @click="createSnackbar()">{{ pack.basicUsage }}</var-button>
      <var-button type="warning" block @click="createSnackbar('time')">{{ pack.hiddenTime }}</var-button>
      <var-button type="warning" block @click="createSnackbar('position')">{{ pack.bottomDisplay }}</var-button>
    </div>

    <div class="snackbar-demo">
      <app-type>{{ pack.type }}</app-type>
      <div class="snackbar-demo__type-block">
        <var-button type="success" block @click="create('success')">{{ pack.success }}</var-button>
        <var-button type="warning" block @click="create('warning')">{{ pack.warning }}</var-button>
        <var-button type="info" block @click="create('info')">{{ pack.info }}</var-button>
        <var-button type="danger" block @click="create('error')">{{ pack.error }}</var-button>
        <var-button type="primary" block @click="create('loading')">{{ pack.loading }}</var-button>
      </div>
    </div>

    <div class="snackbar-demo">
      <var-snackbar :show.sync="shows.show1">
        {{ pack.text }}
      </var-snackbar>

      <var-snackbar :show.sync="shows.show2" position="bottom">
        {{ pack.text }}
        <template #action>
          <var-button type="primary" @click="shows.show2 = false">{{ pack.close }}</var-button>
        </template>
      </var-snackbar>

      <var-snackbar :show.sync="shows.show3" :vertical="true">
        {{ pack.text }}
        <template #action>
          <var-button type="primary" @click="shows.show3 = false">{{ pack.close }}</var-button>
        </template>
      </var-snackbar>

      <var-snackbar :show.sync="shows.show4" :duration="1000">
        {{ pack.text }}
      </var-snackbar>

      <var-snackbar :show.sync="shows.show9" :forbid-click="true">
        {{ pack.text }}
      </var-snackbar>
    </div>
  </div>
</template>

<script>
import Snackbar from '../index'
import VarButton from '../../button'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'SnackbarExample',

  components: {
    VarSnackbar: Snackbar.Component,
    VarButton,
    AppType,
  },

  data: () => ({
    shows: {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show9: false,
    },
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
    changeValue(type) {
      this.shows[type] = !this.shows[type]
    },

    create(type) {
      const text = type === 'loading' ? this.pack.wait : this.pack.text
      Snackbar[type](text)

      if (type === 'loading') {
        setTimeout(() => {
          Snackbar.success(this.pack.loaded)
        }, 2000)
      }
    },

    createSnackbar(type) {
      if (type === 'time') {
        Snackbar({
          content: this.pack.text,
          duration: 1000,
        })
      }

      if (type === 'position') {
        Snackbar({
          content: this.pack.text,
          position: 'bottom',
        })
      }

      if (!type) {
        Snackbar(this.pack.text)
      }
    },
  },
}
</script>

<style lang="less" scoped>
.var-snackbar-example {
  .snackbar-demo {
    .var-button {
      margin-top: 10px;
    }
  }
}
</style>
