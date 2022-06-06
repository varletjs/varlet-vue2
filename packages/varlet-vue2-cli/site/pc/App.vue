<template>
  <div>
    <router-view></router-view>
    <logo-animation />
  </div>
</template>

<script>
import config from '@config'
import { get } from 'lodash-es'
import { getPCLocationInfo, isPhone } from '../utils'
import { defineComponent } from '../components/utils/create'
import LogoAnimation from './components/LogoAnimation.vue'

export default defineComponent({
  components: {
    LogoAnimation
  },

  data: () => ({
    defaultLanguage: get(config, 'defaultLanguage'),
    useMobile: get(config, 'useMobile'),
  }),

  mounted() {
    this.init()
  },

  methods: {
    init() {
      const { language, menuName } = getPCLocationInfo()

      if (isPhone() && this.useMobile) {
        window.location.href = `./mobile.html#/${menuName}?language=${language || this.defaultLanguage}&platform=mobile`
        return
      }
    },
  },
})
</script>

<style lang="less">
body {
  transition: background-color 0.25s, box-shadow 0.25s;

  * {
    transition: background-color 0.25s, box-shadow 0.25s;
  }
}
</style>
