<template>
  <div class="var-menu-example">
    <app-type>{{ pack.alignmentMethods }}</app-type>
    <div class="block-1">
      <var-menu :show.sync="top">
        <var-button type="primary" @click="top = true">{{ pack.topAlignment }}</var-button>

        <template #menu>
          <div class="cell-list" :style="{ background: bgColor }">
            <var-cell>{{ pack.menuOption }}</var-cell>
            <var-cell>{{ pack.menuOption }}</var-cell>
            <var-cell>{{ pack.menuOption }}</var-cell>
          </div>
        </template>
      </var-menu>
    </div>

    <div class="block">
      <var-menu alignment="bottom" :show.sync="bottom">
        <var-button type="primary" @click="bottom = true">{{ pack.bottomAlignment }}</var-button>

        <template #menu>
          <div class="cell-list" :style="{ background: bgColor }">
            <var-cell>{{ pack.menuOption }}</var-cell>
            <var-cell>{{ pack.menuOption }}</var-cell>
            <var-cell>{{ pack.menuOption }}</var-cell>
          </div>
        </template>
      </var-menu>
    </div>

    <app-type>{{ pack.offset }}</app-type>

    <div class="block-1">
      <var-menu :offset-x="72" :show.sync="offsetX">
        <var-button type="primary" @click="offsetX = true">{{ pack.offsetRight }}</var-button>

        <template #menu>
          <div class="cell-list" :style="{ background: bgColor }">
            <var-cell>{{ pack.menuOption }}</var-cell>
            <var-cell>{{ pack.menuOption }}</var-cell>
            <var-cell>{{ pack.menuOption }}</var-cell>
          </div>
        </template>
      </var-menu>

      <var-menu :offset-x="-72" :show.sync="offsetX1">
        <var-button type="primary" @click="offsetX1 = true">{{ pack.offsetLeft }}</var-button>

        <template #menu>
          <div class="cell-list" :style="{ background: bgColor }">
            <var-cell>{{ pack.menuOption }}</var-cell>
            <var-cell>{{ pack.menuOption }}</var-cell>
            <var-cell>{{ pack.menuOption }}</var-cell>
          </div>
        </template>
      </var-menu>
    </div>

    <div class="block-2">
      <var-menu :offset-y="36" :show.sync="offsetY">
        <var-button type="primary" @click="offsetY = true">{{ pack.offsetBottom }}</var-button>

        <template #menu>
          <div class="cell-list" :style="{ background: bgColor }">
            <var-cell>{{ pack.menuOption }}</var-cell>
            <var-cell>{{ pack.menuOption }}</var-cell>
            <var-cell>{{ pack.menuOption }}</var-cell>
          </div>
        </template>
      </var-menu>

      <var-menu :offset-y="-36" :show.sync="offsetY1">
        <var-button type="primary" @click="offsetY1 = true">{{ pack.offsetTop }}</var-button>

        <template #menu>
          <div class="cell-list" :style="{ background: bgColor }">
            <var-cell>{{ pack.menuOption }}</var-cell>
            <var-cell>{{ pack.menuOption }}</var-cell>
            <var-cell>{{ pack.menuOption }}</var-cell>
          </div>
        </template>
      </var-menu>
    </div>

    <app-type>{{ pack.events }}</app-type>
    <var-menu :show.sync="event" @open="menuOpen" @opened="menuOpened" @close="menuClose" @closed="menuClosed">
      <var-button type="primary" @click="event = true">{{ pack.events }}</var-button>

      <template #menu>
        <div class="cell-list" :style="{ background: bgColor }">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>

    <div style="margin-bottom: 100px"></div>
  </div>
</template>

<script>
import VarMenu from '..'
import VarButton from '../../button'
import VarCell from '../../cell'
import Snackbar from '../../snackbar'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'
import dark from '../../themes/dark'

export default {
  name: 'MenuExample',

  components: {
    VarMenu,
    VarButton,
    VarCell,
    AppType,
  },

  data: () => ({
    // styles start
    top: false,
    bottom: false,
    offsetX: false,
    offsetX1: false,
    offsetY: false,
    offsetY1: false,
    event: false,
    // styles end

    bgColor: '#fff',
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark, (themes) => {
      this.bgColor = themes === 'darkThemes' ? '#272727' : '#fff'
    })
  },

  methods: {
    menuOpen() {
      Snackbar.info('open')
    },

    menuOpened() {
      Snackbar.success('opened')
    },

    menuClose() {
      Snackbar.warning('close')
    },

    menuClosed() {
      Snackbar.error('closed')
    },
  },
}
</script>

<style scoped lang="less">
.var-menu-example {
  .cell-list {
    transition: background-color 0.25s;
  }

  .block {
    margin-top: 130px;
  }

  .block-1 {
    display: flex;
    justify-content: space-between;
  }

  .block-2 {
    display: flex;
    justify-content: space-between;
    margin-top: 130px;
  }
}
</style>
