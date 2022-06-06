<template>
  <div class="var-ripple-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <div class="block var-elevation--2" v-ripple>{{ pack.click }}</div>

    <app-type>{{ pack.customColor }}</app-type>
    <div class="block var-elevation--2" v-ripple="{ color: '#2979ff' }">{{ pack.click }}</div>

    <app-type>{{ pack.disabledStatus }}</app-type>
    <div class="block var-elevation--2" v-ripple="{ disabled: true }">{{ pack.click }}</div>
  </div>
</template>

<script>
import Ripple from '..'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet-vue2/cli/site/utils'
import { pack, use } from './locale'

export default {
  name: 'RippleExample',

  components: { AppType },

  directives: { Ripple },

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
  },
}
</script>

<style scoped lang="less">
@import '../../styles/elevation';
.var-ripple-example {
  .block {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    color: var(--site-config-color-sub-text);
    background: var(--site-config-color-sub-bar);
    user-select: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transition: background-color 0.25s;
  }
}
</style>
